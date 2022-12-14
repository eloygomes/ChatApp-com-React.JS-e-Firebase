import React from 'react';
import ChatHeader from '../ChatHeader';
import * as C from './style';
import Default from '../Default';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';

function Chat({ userChat }) {
  if(!userChat) return <Default/>
  
  return (
    <C.Container>
      <ChatHeader protoURL={userChat?.photoURL} name={userChat?.name}/>
      <ChatBody chatId={userChat?.chatId}/>
      <ChatFooter chatId={userChat?.chatId}/>
    </C.Container>
  )
}

export default Chat