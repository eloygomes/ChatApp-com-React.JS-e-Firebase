import React from 'react';
import * as C from './style'
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md';

function ChatHeader({ photoURL, name }) {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL}/> :  <MdPerson/>}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
    </C.Container>
  )
}

export default ChatHeader