import { types } from "mobx-state-tree";

export const CounterModel = types
  .model({
    value: types.integer
  })
  .actions(self => ({
    plus: () => {
      self.value = self.value + 1;
    },
    minus: () => {
      self.value = self.value - 1;
    }
  }));
