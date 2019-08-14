export abstract class BooleanUtilities {

  public static notNull(value: any) {
    return value !== null;
  }

  public static notUndefined(value: any) {
    return value !== undefined;
  }

  public static notEmptyText(value: any) {
    return value !== "";
  }

  public static hasValue(value: any) {
    return this.notNull(value) && this.notUndefined(value) && this.notEmptyText(value);
  }

  public static isNull(value: any) {
    return value === null;
  }

  public static isUndefined(value: any) {
    return value === undefined;
  }

  public static isNullOrUndefined(value: any) {
    return this.isNull(value) || this.isUndefined(value);
  }

}
