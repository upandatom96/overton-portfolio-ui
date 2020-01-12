import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTextComponent } from './manage-text.component';
import { ModalTriggerButtonComponent } from 'src/app/simple-components/modal/modal-trigger-button/modal-trigger-button.component';
import { ModalBoxBasicComponent } from 'src/app/simple-components/modal/modal-box-basic/modal-box-basic.component';
import { QuillViewComponent } from 'src/app/components/quill-view/quill-view.component';
import { QuillDefaultComponent } from 'src/app/components/quill-default/quill-default.component';
import { FormsModule } from '@angular/forms';
import { ErrorsReportRowComponent } from 'src/app/simple-components/error/errors-report-row/errors-report-row.component';
import { LoadingComponent } from 'src/app/simple-components/loading/loading.component';
import { QuillModule } from 'ngx-quill';
import { ErrorsReportComponent } from 'src/app/simple-components/error/errors-report/errors-report.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageTextComponent', () => {
  let component: ManageTextComponent;
  let fixture: ComponentFixture<ManageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManageTextComponent, ModalTriggerButtonComponent, ModalBoxBasicComponent,
        QuillViewComponent, QuillDefaultComponent, ErrorsReportRowComponent,
        LoadingComponent, ErrorsReportComponent, FaIconComponent,
      ],
      imports: [FormsModule, QuillModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
