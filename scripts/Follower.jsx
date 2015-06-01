import React, { PropTypes } from 'react';
import * as FollowerActionCreators from './actions/FollowerActionCreators';
import FollowerStore from './stores/FollowerStore';
import FollowerByUserStore from './stores/FollowerByUserStore';
import UserStore from './stores/UserStore';
import User from './components/User';
import Follower from './components/Follower';
import DocumentTitle from 'react-document-title';
import connectToStores from './utils/connectToStores';

function parseUser(params) {
  return params.user;
}

/**
 * Requests data from server for current props.
 */
function requestData(props) {
  const { params } = props;
  const userLogin = parseUser(params);

  FollowerActionCreators.requestFollower(userLogin, ['followers_url']);
}

/**
 * Retrieves state from stores for current props.
 */
function getState(props) {
  const login = parseUser(props.params);

  const followers = FollowerStore.get(login);

  return {
    followers
  };
}

@connectToStores([FollowerByUserStore, UserStore], getState)

export default class FollowerPage {
  static propTypes = {
    // Injected by React Router:
    /*     PropTypes.shape定义一种特殊的验证组合 */
    params: PropTypes.shape({
      user: PropTypes.string.isRequired
    }).isRequired,

    // Injected by @connectToStores:
    followers: PropTypes.object
  };

  constructor() {
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }

  componentWillMount() {
    requestData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (parseLogin(nextProps.params) !== parseUser(this.props.params)) {
      requestData(nextProps);
    }
  }

  render() {
    const { followers, params } = this.props;
    const login = parseUser(params);

    return (
      <DocumentTitle title={`${login}\'s Followers`}>
        <div>
          {followers ?
            <Follower followers={followers} /> :
            <h1>Loading...</h1>
          }
        </div>
      </DocumentTitle>
    );
  }

  renderStarredRepos() {
    const {
      starred,
      starredOwners,
      isLoadingStarred: isLoading,
      isLastPageOfStarred: isLastPage
    } = this.props;

    const isEmpty = starred.length === 0;

    return (
      <div>
        {starred.map((repo, index) =>
          <Repo key={repo.fullName}
                repo={repo}
                owner={starredOwners[index]} />
        )}

        {isEmpty && !isLoading &&
          <span>None :-(</span>
        }

        {isEmpty && isLoading &&
          <span>Loading...</span>
        }

        {!isEmpty && (isLoading || !isLastPage) &&
          <button onClick={this.handleLoadMoreClick}
                  disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load more'}
          </button>
        }
      </div>
    );
  }

  handleLoadMoreClick() {
    const login = parseLogin(this.props.params);
    RepoActionCreators.requestStarredReposPage(login);
  }
}
