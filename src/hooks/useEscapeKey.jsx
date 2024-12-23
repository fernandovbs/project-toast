import React from "react";

export default function useScapeKey(handler) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handler();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
}
