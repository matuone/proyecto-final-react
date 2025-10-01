import { createContext, useContext, useState } from "react";

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(false)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan Perez",
      status: "online",
      lastSeen: "",
      messages: [
        {
          id: 1,
          text: "Hola, como estas?",
          time: "00:40"
        }

      ]
    },
    {
      id: 2,
      name: "Marita Rodriguez",
      status: "offline",
      lastSeen: "3 hours ago",
      messages: [
        {
          id: 1,
          text: "RESPONDEEEEE!",
          time: "15:00"
        },
        {
          id: 2,
          text: "Estoy desde las 12 en el banco",
          time: "15:10"
        }, {
          id: 3,
          text: "Estoy comprando empanadas, ahi las llevo :)",
          time: "20:00"
        },
      ]
    },
    {
      id: 3,
      name: "Juan Roman Riquelme",
      status: "online",
      lastSeen: "",
      messages: [
        {
          id: 1,
          text: "Hola Roman, estas feli?",
          time: "00:40"
        }

      ]
    },
  ])

  return (
    <ChatContext.Provider value={{ users, setSelectedUser, selectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }
