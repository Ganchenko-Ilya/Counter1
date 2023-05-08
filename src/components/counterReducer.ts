type actionType = addCounterTypeAc |  changeCounterTypeAC;

type addCounterTypeAc = ReturnType<typeof addCounterAC>;


type changeCounterTypeAC = ReturnType<typeof changeCounterAC>;

type StateType = {
  count: number;
};
const initialState = {
  count: 0,
};

export const countReducer = (
  state: StateType = initialState,
  action: actionType
): StateType => {
  switch (action.type) {
    case "ADD-COUNTER": {
      return { ...state, count: action.count + 1 };
    }

    

    case "CHANGE-COUNTER": {
      return { ...state, count: action.value };
    }

    default:
      return state;
  }
};

export const addCounterAC = (count: number) => {
  return { type: "ADD-COUNTER", count } as const;
};

export const resetCounterAC = () => {
  return { type: "RESET-COUNTER" } as const;
};
export const changeCounterAC = (value: number) => {
  return { type: "CHANGE-COUNTER", value } as const;
};
