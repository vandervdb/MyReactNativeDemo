import React from 'react';
import CardComponent from './CardComponent';
import tw from '../../lib/tailwind';
import {Logger} from '../debug/Logger';
import {DeleteNoteMutationFn} from '../appTypes';

type TNoteCardProps = {
  item: {item: {id: string; title: string; content: string}};
  deleteNote: DeleteNoteMutationFn;
};
const NoteCard = (props: TNoteCardProps) => {
  // Logger.debug('NoteCard Item JSON : ' + JSON.stringify(item));
  const {id, title, content} = props.item.item;
  return (
    <CardComponent
      contentStyle={tw`mb-2 mr-3 ml-2 bg-gray-light`}
      title={id}
      content={content}
      onLongPress={() => props.deleteNote({id, title, content})}
    />
    // <TouchableRipple
    //   onLongPress={() => {
    //     deleteNote(item.item);
    //     // dispatch(
    //     //   apiSlice.util.invalidateTags([{type: 'Notes', id: item.item.id}]),
    //     // );
    //   }}
    //   onPress={() => onPressNote(item)}>
    //   <Card style={tw`mb-2 mr-3 ml-2 bg-gray-light`}>
    //     <Card.Content>
    //       <Title style={tw`italic font-bold`}> {title}</Title>
    //       <Paragraph>{content}</Paragraph>
    //     </Card.Content>
    //   </Card>
    // </TouchableRipple>
  );
};

export default NoteCard;
