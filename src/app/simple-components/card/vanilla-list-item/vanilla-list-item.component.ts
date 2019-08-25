import { Component, Input } from "@angular/core";

@Component({
  selector: "app-vanilla-list-item",
  templateUrl: "./vanilla-list-item.component.html",
  styleUrls: ["./vanilla-list-item.component.scss"]
})
export class VanillaListItemComponent {
  @Input() public title: string;
  @Input() public details: string;
  @Input() public footer: string;
}
