import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Logger} from '../../debug/Logger';
import {
  apiSlice,
  useDeleteNoteMutation,
} from '../../features/reduxApi/apiSlice';
import tw from '../../../lib/tailwind';
import NoteCard from '../NoteCard';
const NoteListScreen = () => {
  Logger.debug('__NoteListScreen__');
  const {
    data: notes,
    refetch,
    isLoading,
    isSuccess,
    isError,
    error: error,
  } = apiSlice.endpoints.getNotes.useQuery(undefined, undefined);

  const [
    deleteNote,
    {
      isLoading: isLoadingDel,
      isSuccess: isSuccessDel,
      isError: isErrorDel,
      error: errorDel,
    },
  ] = useDeleteNoteMutation();

  if (isLoading) {
    Logger.debug('Is Loading');
    return (
      <View style={tw`bg-gray-dark mt-3`}>
        <Text>Loading...</Text>
      </View>
    );
  } else if (isError) {
    Logger.debug('Error');
    return (
      <View style={tw`bg-gray-dark mt-3`}>
        <Text>Error: {JSON.stringify(error)}</Text>
      </View>
    );
  } else if (isSuccess) {
    Logger.debug('Success');
    Logger.debug(notes);
    return (
      <FlatList
        style={tw`bg-gray-dark mt-3`}
        data={notes}
        renderItem={item => NoteCard({item, deleteNote})}
        // onRefresh={() => {
        //   // dispatch(apiSlice.util.invalidateTags(['Notes']));
        //   refetch();
        // }}
        // refreshing={isLoadingDel}
      />
    );
  }
};

export default NoteListScreen;
