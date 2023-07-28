import {
  StateType,
  addCounterAC,
  changeCounterAC,
  countReducer,
} from "./components/counterReducer";

let count: StateType;

beforeEach(() => {
  count = {
    count: 5,
    maxValue:0,
    minValue:0,
    loading:4
  };
});

test("Counter + 1", () => {
  const result = countReducer(count, addCounterAC(count.count));

  expect(result.count).toBe(6);
  
});




test('Change counter value ', () => {


    const result = countReducer(count,changeCounterAC(3))


    expect(result.count).toBe(3)


})