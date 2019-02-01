import React from 'react';

const FriendForm = props => {
  return (
    <form onSubmit={props.saveFriend} id="friendForm">
      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        placeholder="name"
        value={props.friend.name}
      />
      <input
        type="number"
        name="age"
        onChange={props.handleChange}
        placeholder="age"
        value={props.friend.age}
      />
      <input
        type="email"
        name="email"
        onChange={props.handleChange}
        placeholder="email"
        value={props.friend.email}
      />
      {!props.editingFriend ? (
        <button>Add Friend</button>
      ) : (
        <button>Update Friend</button>
      )}
    </form>
  );
};

export default FriendForm;
