import { omit } from './';

describe("Omit function tests", () => {
  const originObject = { type: "literal", value: 5 };

  test("Omit function should remove field", () => {
    expect(omit(originObject, 'value')).toStrictEqual({ type: "literal"});
  });

  test("Omit function should remove few fields", () => {
    expect(omit(originObject, 'value', 'type')).toStrictEqual({});
  });
});
