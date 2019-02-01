import React from 'react';
import { Button, Form, Input } from 'reactstrap';

const FriendForm = props => {
  return (
    <div className='formField' >
      <Form inline onSubmit={props.saveFriend} id="friendForm">
        <Input
          type="text"
          name="name"
          onChange={props.handleChange}
          placeholder="Name"
          value={props.friend.name}
        />
        <Input
          type="number"
          name="age"
          onChange={props.handleChange}
          placeholder="Age"
          value={props.friend.age}
        />
        <Input
          type="email"
          name="email"
          onChange={props.handleChange}
          placeholder="Email"
          value={props.friend.email}
        />
        {!props.editingFriend ? (
          <Button type="submit">Add Friend</Button>
        ) : (
          <Button>Update Friend</Button>
        )}
      </Form>
    </div>
  );
};

export default FriendForm;
