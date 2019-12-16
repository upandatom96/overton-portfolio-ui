export interface TextResource {
  text: TextItem[];
}

export interface TextItem {
  _id: string;
  areaName: string;
  textContent: string;
}
