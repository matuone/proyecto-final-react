import { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";

export default function Sidebar() {
  const { users, setSelectedUser } = useChat();

  const [usersToRender, setUsersToRender] = useState(users);
  useEffect(() => setUsersToRender(users), [users]);

  const handleChange = (event) => {
    const q = event.target.value.toLocaleLowerCase();
    setUsersToRender(
      users.filter((u) => u.name.toLocaleLowerCase().includes(q))
    );
  };

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handleChange}
      />
      {usersToRender.length === 0 && (
        <p className="search-result">No search found...</p>
      )}

      <ul className="user-list">
        {usersToRender.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user.id)}
            className="user"
          >
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84oI2MA8Xg&s"
              alt=""
            />
            <div className="user-info">
              <strong>
                <span
                  style={{
                    color: user.status === "online" ? "green" : "red",
                    marginRight: "3px",
                  }}
                >
                  ●
                </span>
                {user.name}
              </strong>
              <small>{user.status === "offline" ? user.lastSeen : "online"}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
