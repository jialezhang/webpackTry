import { fetchFollowers, fetchFollowerArray } from '../utils/APIUtils';

export function getFollowers(login, url = `users/${login}/followers`) {
  return fetchFollowers(url);
}
