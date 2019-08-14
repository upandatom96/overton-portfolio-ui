import { Component, Input } from "@angular/core";

@Component({
  selector: "app-jumbotron-header",
  templateUrl: "./jumbotron-header.component.html",
  styleUrls: ["./jumbotron-header.component.scss"]
})
export class JumbotronHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
}
