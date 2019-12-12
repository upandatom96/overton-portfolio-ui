import { ShowStatusValues } from "../enums/show-status-enums";

export interface Show {
  _id?: string;
  title: string;
  details: string;
  month: string;
  year: number;
  showStatus: ShowStatusValues;
  dateAdded?: Date;
}

export interface ShowResource {
  shows: Show[];
}
