import { register } from '../AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import selectn from 'selectn';

const _followers = {};

const FollowerStore = createStore({
  contains(fullName, fields) {
    return isInBag(_followers, fullName, fields);
  },

  get(fullName) {
    return _followers[fullName];
  }
});

FollowerStore.dispatchToken = register(action => {
  const responseFollowers = selectn('response.entities.followers', action);
  if (responseFollowers) {
    mergeIntoBag(_followers, responseFollowers);
    responseFollowers.emitChange();
  }
});

export default FollowerStore;
