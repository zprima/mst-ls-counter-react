import { CounterModel } from "./counterModel.js";

it("can create an instance of a model", () => {
  const x = CounterModel.create({
    value: 0
  });

  expect(x.value).toEqual(0);
});

it("can increment its value", () => {
  const x = CounterModel.create({ value: 0 });

  expect(x.value).toEqual(0);
  x.plus();
  expect(x.value).toEqual(1);
});

it("can decrement its value", () => {
  const x = CounterModel.create({ value: 1 });

  expect(x.value).toEqual(1);
  x.minus();
  expect(x.value).toEqual(0);
});
