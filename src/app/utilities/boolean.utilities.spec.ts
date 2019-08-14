import { BooleanUtilities } from "./boolean.utilities";

describe("boolean-utilities", () => {

  describe("notNull", () => {

    it("should return false if null", () => {
      expect(BooleanUtilities.notNull(null)).toBeFalsy();
    });

    it("should return true if not null", () => {
      expect(BooleanUtilities.notNull(undefined)).toBeTruthy();
    });

  });

  describe("notUndefined", () => {

    it("should return false if undefined", () => {
      expect(BooleanUtilities.notUndefined(undefined)).toBeFalsy();
    });

    it("should return true if not null", () => {
      expect(BooleanUtilities.notUndefined(null)).toBeTruthy();
    });

  });

  describe("notEmptyText", () => {

    it("should return false if empty text", () => {
      expect(BooleanUtilities.notEmptyText("")).toBeFalsy();
    });

    it("should return true if not empty text", () => {
      expect(BooleanUtilities.notEmptyText(null)).toBeTruthy();
    });

  });

  describe("hasValue", () => {

    it("should return false if null", () => {
      expect(BooleanUtilities.hasValue(null)).toBeFalsy();
    });

    it("should return false if undefined", () => {
      expect(BooleanUtilities.hasValue(undefined)).toBeFalsy();
    });


    it("should return false if empty text", () => {
      expect(BooleanUtilities.hasValue("")).toBeFalsy();
    });

    it("should return true if has value", () => {
      expect(BooleanUtilities.hasValue(1)).toBeTruthy();
    });

  });

  describe("isNull", () => {

    it("should return false if not null", () => {
      expect(BooleanUtilities.isNull("")).toBeFalsy();
    });

    it("should return true if null", () => {
      expect(BooleanUtilities.isNull(null)).toBeTruthy();
    });

  });

  describe("isUndefined", () => {

    it("should return false if not undefined", () => {
      expect(BooleanUtilities.isUndefined("")).toBeFalsy();
    });

    it("should return true if undefined", () => {
      expect(BooleanUtilities.isUndefined(undefined)).toBeTruthy();
    });

  });

  describe("isNullOrUndefined", () => {

    it("should return false if not null or undefined", () => {
      expect(BooleanUtilities.isNullOrUndefined("")).toBeFalsy();
    });

    it("should return true if undefined", () => {
      expect(BooleanUtilities.isNullOrUndefined(undefined)).toBeTruthy();
    });

    it("should return true if null", () => {
      expect(BooleanUtilities.isNullOrUndefined(null)).toBeTruthy();
    });

  });

});
