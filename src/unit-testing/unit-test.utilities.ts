import { DebugElement } from "@angular/core";
import {By} from "@angular/platform-browser";

export abstract class UnitTestUtilities {
  public static getElementById(fixture, id): DebugElement {
    const css = this.idAsSelector(id);
    return this.getElementByCss(fixture, css);
  }

  public static getElementByCss(fixture, css): DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css(css));
  }

  private static idAsSelector(id: string): string {
    return `#${id}`;
  }
}
