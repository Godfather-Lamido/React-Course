import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif"
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
    // console.log(inputText);
  }

  async function sendMessage() {
    if (isLoading) {
      return;
    }

    if (inputText === "") {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);
    setInputText("");
    setIsLoading(true);

    const loadingMessage = {
      message: (
        <img src={LoadingSpinner} style={{ height: "40px", margin: "-15px"}} 
        />
      ),
      sender: "robot",
      id: crypto.randomUUID(),
    };
    
    setChatMessages([...newChatMessages, loadingMessage]);

    const response = await Chatbot.getResponseAsync(inputText);
    // console.log(response);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    }

    if (e.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleEnter}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
