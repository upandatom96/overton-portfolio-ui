export interface TextResource {
  text: TextItem[];
}

export interface TextItem {
  _id: string;
  areaName: string;
  isOptional: boolean;
  textContent?: string;
}
