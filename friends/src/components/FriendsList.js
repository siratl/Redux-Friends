import React from 'react';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div className='friendCard' key={friend.id}>
          <span onClick={() => props.showFriend(friend)}><strong>{friend.name}</strong> </span>
          <span className='deleteBtn' onClick={props.removeFriend} id={friend.id}>
             delete
          </span>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
