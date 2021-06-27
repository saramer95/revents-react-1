import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';

export default function SignedOutMenu({setAuthenticated}) {
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} basic inverted content='Login'></Button>
      <Button
        basic
        inverted
        content='Register'
        style={{ marginRight: '5px' }}
      ></Button>
    </Menu.Item>
  );
}
