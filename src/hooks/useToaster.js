import { useState, useRef } from "@pionjs/pion";

export function useToaster(duration = 3000) {
  const [message, setMessage] = useState("");
  const timeoutRef = useRef(null);

  const showToast = (msg) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(msg);
    timeoutRef.current = setTimeout(() => {
      setMessage("");
    }, duration);
  };

  return { message, showToast };
}
