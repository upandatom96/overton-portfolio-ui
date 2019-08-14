import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal-box-basic",
  templateUrl: "./modal-box-basic.component.html",
  styleUrls: ["./modal-box-basic.component.scss"]
})
export class ModalBoxBasicComponent {
  @Input() modalBoxId = "modal-box";
  @Input() modalTitle = "Information";
}
