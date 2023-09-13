export interface Note {
  readonly id: string;
  readonly title: string;
  readonly content: string;
}
export interface NoteState {
  readonly notes: Note[];
}
