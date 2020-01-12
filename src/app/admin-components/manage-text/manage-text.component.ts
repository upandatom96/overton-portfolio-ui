import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagementModeValues } from 'src/app/enums/mode-enums';
import { TextService } from 'src/app/services/text.service';
import { TextItem } from 'src/app/models/TextResource.model';
import { BooleanUtilities } from 'src/app/utilities/boolean.utilities';
import { QuillDefaultComponent } from 'src/app/components/quill-default/quill-default.component';

@Component({
  selector: 'app-manage-text',
  templateUrl: './manage-text.component.html',
  styleUrls: ['./manage-text.component.scss']
})
export class ManageTextComponent implements OnInit {
  @ViewChild(QuillDefaultComponent, null) public quillDefaultComponent: QuillDefaultComponent;

  public showErrors = false;
  public admin = true;
  public mode: ManagementModeValues = ManagementModeValues.OVERVIEW;

  public formText: TextItem;

  public showAsOptional(): boolean {
    return this.formText && this.formText.isOptional;
  }

  public get overviewActive(): boolean {
    return this.mode === ManagementModeValues.OVERVIEW;
  }

  public get editActive(): boolean {
    return this.mode === ManagementModeValues.EDIT;
  }

  public get textReady(): boolean {
    return this.textService.textReady;
  }

  public get textList(): TextItem[] {
    return this.textService.textList;
  }

  public get textContentError(): boolean {
    return !this.formText.isOptional && !BooleanUtilities.hasValue(this.formText.textContent);
  }

  public get errors(): String[] {
    const errors: String[] = [];
    if (this.textContentError) {
      errors.push("Please add text content.");
    }
    return errors;
  }

  private get valid(): boolean {
    return this.errors.length === 0;
  }

  constructor(
    private textService: TextService,
  ) { }

  ngOnInit() {
    this.textService.loadText();
  }

  public switchToEditMode(id: string): void {
    this.showErrors = false;
    const focusItem = this.textList.find((text) => {
      return text._id === id;
    });
    this.formText = {
      _id: focusItem._id,
      areaName: focusItem.areaName,
      textContent: focusItem.textContent,
      isOptional: focusItem.isOptional,
      isQuill: focusItem.isQuill
    };
    this.mode = ManagementModeValues.EDIT;
  }

  public switchToOverviewMode(): void {
    this.showErrors = false;
    this.mode = ManagementModeValues.OVERVIEW;
  }

  public submit(): void {
    this.formText.textContent = this.quillDefaultComponent.content;
    this.showErrors = true;
    if (this.valid) {
      this.submitEdit();
    }
  }

  private submitEdit(): void {
    let response;
    this.textService.updateText(this.formText)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update text failed");
        },
        () => {
          this.concludeSubmit();
        });
  }

  private concludeSubmit(): void {
    this.formText = {
      _id: null,
      areaName: "",
      textContent: "",
      isOptional: false,
      isQuill: false,
    };
    this.showErrors = false;
    this.textService.loadText();
    this.switchToOverviewMode();
  }

}
