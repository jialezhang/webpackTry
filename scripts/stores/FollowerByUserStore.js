import { register, waitFor } from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import FollowerStore from './FollowerStore';
import UserStore from './UserStore';
import {
  createIndexedListStore,
  createListActionHandler
} from '../utils/PaginatedStoreUtils';

const FollowersByUserStore = createIndexedListStore({
  getFollowers(userLogin) {
    return this.getIds(userLogin).map(FollowerStore.get);
  }
});

const handleListAction = createListActionHandler({
  request: ActionTypes.REQUEST_STARRED_REPOS_PAGE,
  success: ActionTypes.REQUEST_STARRED_REPOS_PAGE_SUCCESS,
  failure: ActionTypes.REQUEST_STARRED_REPOS_PAGE_ERROR
});

register(action => {
  // Let the entity stores consume entities first, or else by the time we
  // emit a change in IDs, they might not have entities for those IDs.
  waitFor([FollowerStore.dispatchToken, UserStore.dispatchToken]);

  const { login } = action;
  if (login) {
    handleListAction(
      action,
      FollowersByUserStore.getList(login),
      FollowersByUserStore.emitChange
    );
  }
});

export default FollowersByUserStore;
