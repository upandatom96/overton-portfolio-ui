import { Component, Input } from "@angular/core";

@Component({
  selector: "app-info-block",
  templateUrl: "./info-block.component.html",
  styleUrls: ["./info-block.component.scss"]
})
export class InfoBlockComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() details: string[];
}
