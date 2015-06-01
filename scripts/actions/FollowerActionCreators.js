import { dispatchAsync } from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as FollowerAPI from '../api/FollowerAPI';
import FollowerStore from '../stores/FollowerStore';

export function requestFollower(fullName, fields) {
  // Exit early if we know about this repo
  if (RepoStore.contains(fullName, fields)) {
    return;
  }

  dispatchAsync(FollowerAPI.getFollowers(fullName), {
    request: ActionTypes.REQUEST_FOLLOWERS,
    success: ActionTypes.REQUEST_FOLLOWERS_SUCCESS,
    failure: ActionTypes.REQUEST_FOLLOWERS_ERROR
  }, { fullName });
}
