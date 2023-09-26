import {TEditNoteScreenProps} from '../components/screens/EditNoteScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';

export interface Note {
  readonly id: string;
  readonly title: string;
  readonly content: string;
}
export interface NoteState {
  readonly notes: Note[];
}

// API
export interface DeleteNoteParams {
  id: number;
}

export interface DeleteNoteResult {
  success: boolean;
  message?: string;
}

export type MutationFunction<TResult, TVariables = unknown> = (
  variables: TVariables,
) => Promise<TResult>;

export type DeleteNoteMutationFn = MutationTrigger<
  MutationDefinition<
    Partial<Note> & Pick<Note, 'id'>,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    'Notes',
    NoteState,
    'api'
  >
>;

// Navigation
export type TRootStackParamList = {
  HomeScreen: undefined;
  NoteScreen: undefined;
  NoteListScreen: undefined;
  ReduxToolkitScreen: undefined;
  EditNoteScreen: TEditNoteScreenProps;
};

export type TNavReduxToolkitScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'ReduxToolkitScreen'
>;
export type PNavNoteListScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'NoteListScreen'
>;
export type TNavEditNoteScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'EditNoteScreen'
>;

export type TNavHomeScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'HomeScreen'
>;
