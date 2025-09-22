export default function Chat() {
  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt="Aiden Chavez"
              className="chat-avatar"
            />
            <strong>Aiden Chavez</strong>
          </div>
          <span className="last-seen"> Last seen: 2 hours ago</span>
        </div>


        <div className="chat-actions">
          <button title="Font"><span>A</span></button>
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <button title="Settings">⚙️</button>
          <button title="Help">❓</button>
        </div>
      </header>


      <section className="chat-messages">
        {[].map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            <p>{m.text}</p>
            <span className="time">{m.time}</span>
          </div>
        ))}
      </section>

      <footer className="chat-footer">
        <input type="text" placeholder="Enter text here..." />
        <button>➤</button>
      </footer>
    </div>
  )
}
