import { toBoolean, toDecodedToken, toString } from "../../utils/parserFunctions";

describe("Login api parser functions", () => {

  describe("toString", () => {
    test("returns the string if parameter is string", () => {
      expect(toString("test")).toStrictEqual("test");
      expect(toString("second")).toStrictEqual("second");
    });

    test("fails if parameter is number", () => {
      expect(() => toString(3)).toThrowError();
      expect(() => toString(100)).toThrowError();
    });

    test("fails if parameter is boolean", () => {
      expect(() => toString(true)).toThrowError();
      expect(() => toString(false)).toThrowError();
    });

    test("fails if parameter is object", () => {
      expect(() => toString({ a:1 })).toThrowError();
      expect(() => toString({})).toThrowError();
    });

    test("fails if parameter is undefined", () => {
      expect(() => toString(undefined)).toThrowError();
    });

    test("fails if parameter is null", () => {
      expect(() => toString(null)).toThrowError();
    });

    test("fails if parameter is function", () => {
      function x() {return;}
      expect(() => toString(x)).toThrowError();
    });

  });

  describe("toBoolean", () => {
    test("returns the value if parameter is boolean", () => {
      expect(toBoolean(true)).toStrictEqual(true);
      expect(toBoolean(false)).toStrictEqual(false);
    });

    test("fails if parameter is number", () => {
      expect(() => toString(3)).toThrowError();
      expect(() => toString(100)).toThrowError();
    });

    test("fails if parameter is string", () => {
      expect(() => toBoolean("test")).toThrowError();
      expect(() => toBoolean("second")).toThrowError();
    });

    test("fails if parameter is object", () => {
      expect(() => toBoolean({ a:1 })).toThrowError();
      expect(() => toBoolean({})).toThrowError();
    });

    test("fails if parameter is undefined", () => {
      expect(() => toBoolean(undefined)).toThrowError();
    });

    test("fails if parameter is null", () => {
      expect(() => toBoolean(null)).toThrowError();
    });

    test("fails if parameter is function", () => {
      function x() {return;}
      expect(() => toBoolean(x)).toThrowError();
    });

  });

  describe("toDecodedToken", () => {
    test("returns the decoded token if parameter is a decoded token", () => {
      expect(toDecodedToken({ token:"test", valid:true })).toStrictEqual({ token:"test", valid:true });
      expect(toDecodedToken({ token:"second", valid:false })).toStrictEqual({ token:"second", valid:false });
    });

    test("fails if property token is not string", () => {
      function x() {return;}
      expect(() => toDecodedToken({ token:3, valid:false })).toThrowError();
      expect(() => toDecodedToken({ token:true, valid:false })).toThrowError();
      expect(() => toDecodedToken({ token:{ a:1 }, valid:false })).toThrowError();
      expect(() => toDecodedToken({ token:x, valid:false })).toThrowError();
      expect(() => toDecodedToken({ token:undefined, valid:false })).toThrowError();
      expect(() => toDecodedToken({ token:null, valid:false })).toThrowError();
    });

    test("fails if property valid is not boolean", () => {
      function x() {return;}
      expect(() => toDecodedToken({ valid:3, token:"test" })).toThrowError();
      expect(() => toDecodedToken({ valid:"second", token:"test" })).toThrowError();
      expect(() => toDecodedToken({ valid:{ a:1 }, token:"test" })).toThrowError();
      expect(() => toDecodedToken({ valid:x, token:"test" })).toThrowError();
      expect(() => toDecodedToken({ valid:undefined, token:"test" })).toThrowError();
      expect(() => toDecodedToken({ valid:null, token:"test" })).toThrowError();
    });

  });

});