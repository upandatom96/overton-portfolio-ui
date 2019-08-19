import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TRUE_TXT, EMPTY_TXT } from "src/app/constants/general-constants";

export abstract class UnitTestUtilities {

  public static getElementById(fixture, id): DebugElement {
    const css = this.idAsSelector(id);
    return this.getElementByCss(fixture, css);
  }

  public static getElementByCss(fixture, css): DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css(css));
  }

  public static clickElement(element: DebugElement): void {
    element.nativeElement.click();
  }

  public static getElementAttribute(element: DebugElement, attribute: string): any {
    return element.nativeElement.getAttribute(attribute);
  }

  public static getValueFromElement(element: DebugElement): any {
    return element.nativeElement.value;
  }

  public static getIsCheckboxChecked(element: DebugElement): boolean {
    return this.getElementAttribute(element, "ng-reflect-model") === TRUE_TXT;
  }

  public static getIsElementDisabled(element: DebugElement): boolean {
    const angularDisabled = this.getElementAttribute(element, "ng-reflect-is-disabled") === TRUE_TXT;
    const standardDisabled = this.getElementAttribute(element, "disabled") === EMPTY_TXT;

    return angularDisabled || standardDisabled;
  }

  public static getSourceFromElement(element: DebugElement): string {
    return element.nativeElement.src;
  }

  public static getElementText(element: DebugElement): string {
    return element.nativeElement.innerText.trim();
  }

  private static idAsSelector(id: string): string {
    return `#${id}`;
  }

  private static classAsSelector(className: string): string {
    return `.${className}`;
  }
}
