import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const LS_USERS_KEY = "chat_users_v1";
const LS_SELECTED_KEY = "chat_selected_v1";

// 🚀 Datos iniciales por si no hay nada en localStorage
const seedUsers = [
  {
    id: 1,
    name: "Juan Perez",
    status: "online",
    lastSeen: "",
    messages: [{ id: 1, text: "Hola, como estas?", time: "00:40" }],
  },
  {
    id: 2,
    name: "Marita Rodriguez",
    status: "offline",
    lastSeen: "3 hours ago",
    messages: [
      { id: 1, text: "RESPONDEEEEE!", time: "15:00" },
      { id: 2, text: "Estoy desde las 12 en el banco", time: "15:10" },
      { id: 3, text: "Estoy comprando empanadas, ahi las llevo :)", time: "20:00" },
    ],
  },
  {
    id: 3,
    name: "Juan Roman Riquelme",
    status: "online",
    lastSeen: "",
    messages: [{ id: 1, text: "Hola Roman, estas feli?", time: "00:40" }],
  },
];

const ChatProvider = ({ children }) => {
  // 🧠 Leemos una sola vez desde localStorage (lazy initializer)
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(LS_USERS_KEY);
    return saved ? JSON.parse(saved) : seedUsers;
  });

  const [selectedUser, setSelectedUser] = useState(() => {
    const saved = localStorage.getItem(LS_SELECTED_KEY);
    return saved ? JSON.parse(saved) : false;
  });

  // 💾 Cada cambio en users se persiste
  useEffect(() => {
    localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
  }, [users]);

  // 💾 (Opcional) persistimos también el seleccionado
  useEffect(() => {
    localStorage.setItem(LS_SELECTED_KEY, JSON.stringify(selectedUser));
  }, [selectedUser]);

  return (
    <ChatContext.Provider
      value={{ users, setUsers, selectedUser, setSelectedUser }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => useContext(ChatContext);

export { useChat, ChatProvider };
