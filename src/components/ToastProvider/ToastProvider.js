import React from "react";
import useScapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = React.useState([]);
  useScapeKey(handleDismiss);

  function addMessage(message, variant) {
    if (message && variant) {
      setMessages([...messages, { message, variant, id: crypto.randomUUID() }]);
    }
  }

  function handleDismiss(messageIndex = false) {
    if (!messageIndex) {
      setMessages([]);
    }
    setMessages((prevMessages) =>
      prevMessages.filter((_, index) => index !== messageIndex)
    );
  }

  return (
    <ToastContext.Provider value={{ messages, addMessage, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
