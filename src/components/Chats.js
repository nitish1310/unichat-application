import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { CalculatorFilled } from "@ant-design/icons";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="77c9e9db-669c-4b77-bfc6-a9cc925d579a"
        username="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
