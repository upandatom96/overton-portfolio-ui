import { Component, Input } from "@angular/core";
import { BooleanUtilities } from "src/app/utilities/boolean.utilities";

@Component({
  selector: "app-json-pretty-table",
  templateUrl: "./json-pretty-table.component.html",
  styleUrls: ["./json-pretty-table.component.scss"]
})
export class JsonPrettyTableComponent {
  @Input() data: any;
  @Input() hideMongoMetadata = true;

  public get hasData(): boolean {
    return BooleanUtilities.hasValue(this.data);
  }

  public showData(item: any): boolean {
    if (this.hideMongoMetadata) {
      return !this.isMongoMetadata(item);
    }
    return true;
  }

  private isMongoMetadata(item: any): boolean {
    const mongo__v = item.key === "__v";
    const mongo_id = item.key === "_id";
    return mongo__v || mongo_id;
  }
}
