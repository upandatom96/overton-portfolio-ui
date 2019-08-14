import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal-trigger-link",
  templateUrl: "./modal-trigger-link.component.html",
  styleUrls: ["./modal-trigger-link.component.scss"]
})
export class ModalTriggerLinkComponent {
  @Input() modalBoxId = "modal-box";
  @Input() danger = false;
}
