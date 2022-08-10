import { INCREMENT } from "./constants";

const appInitialState = {
  count: 0
};

export const app = (state = appInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case "DEC":
      console.log("click DEC");
      return Object.assign({}, { count: state.count - 1 });
    case "PLUS2":
      console.log("click PLUS2");
      return Object.assign({}, { count: state.count + 2 });
    case "PLUS3":
      console.log("click PLUS3");
      return Object.assign({}, { count: state.count + 3 });
    default:
      return state;
  }
};
