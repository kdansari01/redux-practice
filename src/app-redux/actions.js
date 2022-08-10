import { INC } from "./constants";

export const increment = (payload) => ({
  type: INC,
  payload
});
