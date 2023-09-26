import React, {useState} from 'react';
import CardComponent from './CardComponent';
import {Logger} from '../debug/Logger';
import {DeleteNoteMutationFn} from '../appTypes';
import {v4} from 'uuid';

export type TNoteCardProps = {
  navigation: any;
  item: {item: {id: string; title: string; content: string}};
  deleteNote: DeleteNoteMutationFn;
  onPress: () => void;
  resetEditing: () => void;
};
const NoteCard = (props: TNoteCardProps) => {
  // Logger.debug('NoteCard Item JSON : ' + JSON.stringify(item));
  const {id: inputId, title, content} = props.item.item;
  const id = inputId ? inputId : v4();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CardComponent
      testId={id}
      title={title}
      content={content}
      onPress={() => {
        setIsEditing(!isEditing);
        props.onPress();
      }}
      onOkTitle={isEditing ? 'Edit' : undefined}
      onOk={
        isEditing
          ? () => {
              setIsEditing(false);
              props.navigation.navigate('EditNoteScreen', {
                note: {id, title, content},
              });
            }
          : undefined
      }
      onCancel={isEditing ? () => setIsEditing(false) : undefined}
    />
  );
};

export default NoteCard;
