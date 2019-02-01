import React from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend } from '../store/actions';
import FriendForm from '../components/FriendForm';

class FriendFormView extends React.Component {
  state = {
    friend: {},
  };

  componentDidMount() {
    if (this.props.editingFriend) {
      this.setState({ friend: this.props.selectedFriend });
    }
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  saveFriend = e => {
    e.preventDefault();
    if (this.props.editingFriend) {
      this.props.updateFriend(this.state.friend.id);
      this.setState({ friend: {} });
      document.getElementById('friendForm').reset();
    } else {
      this.props.addFriend(this.state.friend);
      this.setState({ friend: {} });
      document.getElementById('friendForm').reset();
    }
  };

  render() {
    return (
      <div>
        <FriendForm
          friend={this.state.friend}
          handleChange={this.handleChange}
          saveFriend={this.saveFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.friendsReducer.error,
  selectedFriend: state.friendsReducer.selectedFriend,
  editingFriend: state.friendsReducer.editingFriend,
});

export default connect(
  mapStateToProps,
  { addFriend, updateFriend },
)(FriendFormView);
