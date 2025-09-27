import { createContext, useContext, useState } from "react";


const ChatContext = createContext()

const ChatProvider = () => {
  const [users, setUsers] = useState([])

  return (
    <ChatContext.Provider value={{ users }}>

    </ChatContext.Provider>

  )
}

const useChat = () => useContext(ChatContext)

export default useChat