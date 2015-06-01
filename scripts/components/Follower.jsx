import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Follower {
  static propTypes = {
    follower: PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { follower } = this.props;

    return (
      <div className='Follower'>
        <Link to='follower' params={{ login: follower.login }}>
          <img src={follower.avatarUrl} width='72' height='72' />
          <h3>
            {follower.login} {follower.name && <span>({follower.name})</span>}
          </h3>
        </Link>
      </div>
    );
  }
}
