import { Component, Input } from "@angular/core";

@Component({
  selector: "app-admin-form-header",
  templateUrl: "./admin-form-header.component.html",
  styleUrls: ["./admin-form-header.component.scss"]
})
export class AdminFormHeaderComponent {
  @Input() formHeader = "Admin Form Header";

}
