import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quill-view',
  templateUrl: './quill-view.component.html',
  styleUrls: ['./quill-view.component.scss']
})
export class QuillViewComponent {
  @Input() public content;
}
