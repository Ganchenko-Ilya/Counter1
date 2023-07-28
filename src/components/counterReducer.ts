type actionType =
  | addCounterTypeAc
  | changeCounterTypeAC
  | changeMinValueTypeAC
  | changeMaxValueTypeAC
  | changeLoadingTypeAC;

type addCounterTypeAc = ReturnType<typeof addCounterAC>;

type changeCounterTypeAC = ReturnType<typeof changeCounterAC>;
type changeMinValueTypeAC = ReturnType<typeof changeMinValueAC>;
type changeMaxValueTypeAC = ReturnType<typeof changeMaxValueAC>;
type changeLoadingTypeAC = ReturnType<typeof changeLoadingAC>;

const initialState = {
  count: 0,
  minValue: 0,
  maxValue: 0,
  loading:0
};

export type StateType = typeof initialState;

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
    case "CHANGE-MAX-VALUE": {
      return { ...state, maxValue: action.value };
    }
    case "CHANGE-MIN-VALUE": {
      return { ...state, minValue: action.value };
    }
    case 'CHANGE-LOADING': {
      return {...state,loading:1}
    }

    default:
      return state;
  }
};

export const addCounterAC = (count: number) => {
  return { type: "ADD-COUNTER", count } as const;
};

export const changeCounterAC = (value: number) => {
  return { type: "CHANGE-COUNTER", value } as const;
};
export const changeMaxValueAC = (value: number) => {
  return { type: "CHANGE-MAX-VALUE", value } as const;
};
export const changeMinValueAC = (value: number) => {
  return { type: "CHANGE-MIN-VALUE", value } as const;
};

export const changeLoadingAC = () => {
  return { type: "CHANGE-LOADING" } as const;
};
