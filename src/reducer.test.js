import globalReducer, { initialState } from "./reducer";

describe("Global reducer", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2021-02-18"));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return the mocked date", () => {
    expect(globalReducer(undefined, {}).today).toEqual(new Date('2021-02-18'));
  });
});
