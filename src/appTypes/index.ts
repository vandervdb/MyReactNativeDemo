import {MutationFunction} from '@reduxjs/toolkit/dist/query/react';

//TODO: add types for navigation

export interface Note {
  readonly id: string;
  readonly title: string;
  readonly content: string;
}
export interface NoteState {
  readonly notes: Note[];
}

export type TRootStackParamList = {};

export interface DeleteNoteParams {
  id: number;
}

export interface DeleteNoteResult {
  success: boolean;
  message?: string;
}

export type DeleteNoteMutationFn = MutationFunction<
  DeleteNoteResult,
  DeleteNoteParams
>;
