import React, { useState } from "react";
import Header from "../../components/header";
import { Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, Send } from "@mui/icons-material";

import "./index.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Samer A.⚡",
      image: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
      message: "What's up!",
    },
    {
      id: 2,
      name: "Samer A.⚡",
      image: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
      message: "What's up!",
    },
    {
      id: 3,
      message: "What's up!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    if (!input.length) {
      return;
    }

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <main className="chat-screen">
      <Header Icon={ArrowBackIos} path="/chat" />

      <p className="chat-screen__about-chat">
        you matched with Elen on 10/08/20
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="chat-screen__message">
            <Avatar
              className="chat-screen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chat-screen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen__message">
            <p className="chat-screen__owntext">{message.message}</p>
          </div>
        )
      )}

      <form className="chat-screen__form">
        <input
          className="chat-screen__input"
          placeholder="Send a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <IconButton
          className="chat-screen__button"
          type="submit"
          onClick={handleSend}
          disabled={!input.length}
        >
          <Send />
        </IconButton>
      </form>
    </main>
  );
};

export default ChatScreen;
