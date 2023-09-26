import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import tw from '../../../lib/tailwind';
import {
  ActivityIndicator,
  Button,
  Card,
  Modal,
  Portal,
  Snackbar,
  TextInput,
  useTheme,
} from 'react-native-paper';
import {
  useUpdateNoteMutation,
  useAddNoteMutation,
} from '../../features/reduxApi/apiSlice';
import {Note, TNavEditNoteScreenProps} from '../../appTypes';

//TODO: Manage notes that failed to save
export type TEditNoteScreenProps = {
  note: Note;
  onPress?: () => void;
  onLongPress?: () => void;
  onOk?: () => any;
  onOkTitle?: string;
  onCancel?: () => any;
  onCancelTitle?: string;
};

const EditNoteScreen = (props: TNavEditNoteScreenProps) => {
  const theme = useTheme();

  const {
    id,
    title: inputTitle,
    content: inputContent,
  } = props.route?.params?.note;

  const [updateNote, {isLoading, isSuccess, isError}] = useUpdateNoteMutation();
  const [
    addNote,
    {isLoading: isLoadingAdd, isSuccess: isSuccessAdd, isError: isErrorAdd},
  ] = useAddNoteMutation();

  const [title, setTitle] = useState(inputTitle);
  const [content, setContent] = useState(inputContent);
  const [doDisplaySavedOk, setSavedOk] = useState(false);
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    if (isSuccess || isSuccessAdd) {
      setSavedOk(true);
      setSaved(true);
      setTimeout(() => setSavedOk(false), 2000);
    }
  }, [isSuccess, isSuccessAdd]);

  return (
    <View style={tw`bg-gray mt-3 p-3 flex-1`}>
      <Portal>
        <Modal visible={isLoading || doDisplaySavedOk || isLoadingAdd}>
          <ActivityIndicator
            animating={isLoading || isLoadingAdd}
            size={'large'}
          />
          <Snackbar
            visible={doDisplaySavedOk}
            onDismiss={() => setSavedOk(false)}
            action={{label: 'Close'}}>
            Note saved successfully
          </Snackbar>
        </Modal>
      </Portal>

      <Card testID={'EditCardComponent'}>
        <Card.Content>
          <TextInput
            testID={'ECC_title'}
            style={[
              {backgroundColor: theme.colors.surface},
              tw`italic font-bold`,
            ]}
            multiline={true}
            label={'Titre'}
            value={title}
            onChangeText={t => setTitle(t)}
          />
          <TextInput
            testID={'ECC_Content'}
            style={{backgroundColor: theme.colors.surface}}
            multiline={true}
            value={content}
            label={'Note'}
            underlineColor={'transparent'}
            onChangeText={t => {
              setSaved(false);
              setContent(t);
            }}
          />
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => props.navigation.goBack()}>Cancel</Button>
          {isSaved ? null : (
            <Button
              onPress={() => {
                setSaved(false);
                id
                  ? updateNote({id, title, content})
                  : addNote({id, title, content});
              }}>
              Save
            </Button>
          )}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default EditNoteScreen;
