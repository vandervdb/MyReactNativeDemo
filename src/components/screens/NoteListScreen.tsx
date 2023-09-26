import React from 'react';
import {View, FlatList} from 'react-native';
import {
  apiSlice,
  useDeleteNoteMutation,
} from '../../features/reduxApi/apiSlice';
import tw from '../../../lib/tailwind';
import NoteCard from '../NoteCard';
import {Card, FAB, Paragraph, Title} from 'react-native-paper';
import Shimmer from 'react-native-shimmer';
import {PNavNoteListScreenProps} from '../../appTypes';

//TODO: manage deletion status
const NoteListScreen = ({navigation}: PNavNoteListScreenProps) => {
  const {
    data: notes,
    refetch,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error: error,
  } = apiSlice.endpoints.getNotes.useQuery(undefined, undefined);

  const [
    deleteNote,
    // {
    //   isLoading: isLoadingDel,
    //   isSuccess: isSuccessDel,
    //   isError: isErrorDel,
    //   error: errorDel,
    // },
  ] = useDeleteNoteMutation();

  if (isLoading) {
    return (
      <View style={tw`bg-gray mt-3 p-3 flex-1`}>
        <Card style={tw`mt-3`}>
          <Card.Content>
            <Shimmer>
              <Title testID={'NL_shimmer_loading'} style={tw`italic font-bold`}>
                Loading...
              </Title>
            </Shimmer>
            <Shimmer>
              <Paragraph testID={'NL_shimmer_notes'}>Loading...</Paragraph>
            </Shimmer>
          </Card.Content>
        </Card>
      </View>
    );
  } else if (isError) {
    return (
      <View style={tw`bg-gray-dark mt-3`}>
        <Card>
          <Card.Content>
            <Title testID={'NL_shimmer_error'}> Error</Title>
            <Paragraph testID={'NL_shimmer_error_msg'}>
              {JSON.stringify(error)}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  } else if (isSuccess) {
    return (
      <View style={tw`bg-gray mt-3 p-3`}>
        <FlatList
          testID={'NL_list'}
          data={notes}
          refreshing={isFetching}
          onRefresh={() => refetch()}
          renderItem={item => (
            <NoteCard
              navigation={navigation}
              item={item}
              deleteNote={deleteNote}
              onPress={() => {}}
              resetEditing={() => {}}
            />
          )}
          ItemSeparatorComponent={() => {
            return <View style={tw`mb-2`} />;
          }}
        />
        <FAB
          testID={'NL_fab'}
          style={tw`bg-blue-500 absolute right-5 bottom-8`}
          // label={'Add'}
          icon="plus"
          onPress={() => {
            navigation.navigate('EditNoteScreen', {
              note: {id: '', title: '', content: ''},
            });
          }}
        />
      </View>
    );
  }
};

export default NoteListScreen;
