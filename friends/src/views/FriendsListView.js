import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend, editFriend } from '../store/actions';
import FriendsList from '../components/FriendsList';
import Loader from 'react-loader-spinner';

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  removeFriend = e => {
    this.props.deleteFriend(e.target.id);
  };

  showFriend = friend => {
    this.props.editFriend(friend);
  };

  render() {
    return (
      <div className="friendList">
        {this.props.fetchingFriends && (
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        )}
        <FriendsList
          
          friends={this.props.friends}
          removeFriend={this.removeFriend}
          showFriend={this.showFriend}
        />
        {this.props.error && <h2>{this.props.error}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetchingFriends: state.friendsReducer.fetchingFriends,
  error: state.friendsReducer.error,
});

export default connect(
  mapStateToProps,
  { fetchFriends, deleteFriend, editFriend },
)(FriendsListView);
