import React, { useContext, useState } from "react";
import { ChatEngine } from 'react-chat-engine';
import { Context } from '../store/appContext';

const ChatComponent = () => {

  //traemos username y usersecret del store
  const { store, actions } = useContext(Context);
  const username = localStorage.email;
  const usersecret = localStorage.email;


  return (
    <div className="h-[50rem]">
      <ChatEngine
        projectID="c8bb60d8-9854-45f0-9b36-ccadd30bf73b"
        userName={username}
        userSecret={usersecret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatComponent;
