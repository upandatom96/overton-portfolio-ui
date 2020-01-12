import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quill-default',
  templateUrl: './quill-default.component.html',
  styleUrls: ['./quill-default.component.scss']
})
export class QuillDefaultComponent {
  public modules = null;
  @Input() public content = ''

  public get ready(): any {
    return this.modules !== null;
  }

  constructor() {
    this.setupModules();
  }

  private setupModules() {
    this.modules = {
      'toolbar': [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        ['link']                         // link and image, video
      ]
    }
  }

}
