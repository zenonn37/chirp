import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTH_ID = "tylermcginnis";

export const handleIntialData = () => (dispatch) => {
  return getInitialData().then(({ users, tweets }) => {
    dispatch(receiveTweets(tweets));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTH_ID));
  });
};
