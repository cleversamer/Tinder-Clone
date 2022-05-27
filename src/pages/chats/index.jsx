import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Chat from "../../components/chat";
import { ArrowBackIos } from "@mui/icons-material";

import "./index.css";

const Chats = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Samer A.⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
    },
    {
      id: 2,
      name: "Samer A.⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
    },
    {
      id: 3,
      name: "Samer A.⚡",
      message: "YOOO\n What's up!",
      timestamp: "40 seconds ago",
      avatarUrl: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
    },
  ]);

  return (
    <main className="chats">
      <Header Icon={ArrowBackIos} path="/" />

      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.name}`}>
          <Chat chat={chat} />
        </Link>
      ))}
    </main>
  );
};

export default Chats;
