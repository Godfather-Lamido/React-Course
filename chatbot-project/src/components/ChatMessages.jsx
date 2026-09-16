import { ChatMessage } from "./ChatMessage";
import { useAutoscroll } from "../hooks/useAutoscroll";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoscroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.length === 0 && (
        <div className="welcome-message">
          welcome to the chatbot project! send a message using the textbox below
        </div>
      )}
      
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
