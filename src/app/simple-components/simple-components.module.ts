import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule, FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ErrorsReportComponent } from "./error/errors-report/errors-report.component";
import { ErrorsReportRowComponent } from "./error/errors-report-row/errors-report-row.component";
import { SelectMultipleComponent } from "./form/select-multiple/select-multiple.component";
import { AdminFormHeaderComponent } from "./header/admin-form-header/admin-form-header.component";
import { InfoBlockComponent } from "./info-block/info-block.component";
import { JsonPrettyTableComponent } from "./json/json-pretty-table/json-pretty-table.component";
import { JumbotronHeaderComponent } from "./jumbotron-header/jumbotron-header.component";
import { LoadingComponent } from "./loading/loading.component";
import { ModalBoxBasicComponent } from "./modal/modal-box-basic/modal-box-basic.component";
import { ModalTriggerButtonComponent } from "./modal/modal-trigger-button/modal-trigger-button.component";
import { ModalTriggerLinkComponent } from "./modal/modal-trigger-link/modal-trigger-link.component";
import { SafePipe } from "./pipes/SafeUrlPipe";

@NgModule({
  exports: [
    FaIconComponent,
    ErrorsReportComponent,
    ErrorsReportRowComponent,
    SelectMultipleComponent,
    AdminFormHeaderComponent,
    InfoBlockComponent,
    JsonPrettyTableComponent,
    JumbotronHeaderComponent,
    LoadingComponent,
    ModalBoxBasicComponent,
    ModalTriggerButtonComponent,
    ModalTriggerLinkComponent,
    SafePipe
  ],
  declarations: [
    ErrorsReportComponent,
    ErrorsReportRowComponent,
    SelectMultipleComponent,
    AdminFormHeaderComponent,
    InfoBlockComponent,
    JsonPrettyTableComponent,
    JumbotronHeaderComponent,
    LoadingComponent,
    ModalBoxBasicComponent,
    ModalTriggerButtonComponent,
    ModalTriggerLinkComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SimpleComponentsModule { }
