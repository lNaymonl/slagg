<template>
  <main class="home-page">
    <!-- Sidebar with channels and direct messages -->
    <aside class="sidebar">
      <div class="profile-section">
      <img src="@/assets/Louie.jpg" alt="User Profile" class="profile-image" />        
      <div class="user-info">
          <h3 class="user-name">Louie Maclure</h3>
          <p class="user-status">Available</p>
        </div>
      </div>
      
      <nav class="channels">
        <h4>Channels</h4>
        <ul>
          <li class="general"># general</li>
          <li># random</li>
          <li># announcements</li>
        </ul>
      </nav>

      <nav class="direct-messages">
        <h4>Direct Messages</h4>
        <ul>
          <li>John Doe</li>
          <li>Pippa Smith</li>
          <li>Team Bot</li>
        </ul>
      </nav>

        <nav class="direct-messages">
        <h4>Group Chats</h4>
        <ul>
          <li>Project Red</li>
          <li>ITSM</li>
          <li>Christmas Party Planning</li>
        </ul>
      </nav>
    </aside>

    <!-- Chat area -->
    <section class="chat-area">
      <header class="chat-header">
        <h2 class="chat-title"># general</h2>
        <p class="chat-subtitle">Discussion and updates</p>
      </header>
      
      <div class="messages">
        <!-- Example message -->
        <div class="message received">
          <img src="@/assets/Pippa.jpg" alt="User Profile" class="profile-image" />        
          <div class="message-content">
            <p class="message-author">Pippa Smith</p>
            <p class="message-text">Hey everyone! Excited to start working on this top secret project!</p>
            <span class="message-time">10:15 AM</span>
          </div>
        </div>
        
        <!-- Another example message (sent) -->
        <div class="message sent">
        <img src="@/assets/Louie.jpg" alt="User Profile" class="profile-image" />        
          <div class="message-content">
            <p class="message-author">You</p>
            <p class="message-text">I'm secretly looking forward to it too!</p>
            <span class="message-time">10:17 AM</span>
          </div>
        </div>
      </div>
      
      <!-- Input box for new messages -->
      <footer class="message-input">
        <input type="text" placeholder="Type your message here..." />
        <button class="send-button">Send</button>
      </footer>
    </section>
  </main>
</template>

<style scoped>
/* Layout */
.home-page {
  display: flex;
  height: 100vh;
  background-color: var(--body-bg);
  color: var(--text-color);
  padding-left: 0 !important;
}

.sidebar {
  width: 250px;
  background-color: var(--primary-alt);
  color: var(--text-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* Remove or make the border-right transparent */
  border-right: none; /* or border-right: 1px solid transparent; */
}

/* Profile section in sidebar */
.profile-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--grey);
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
}

.user-status {
  font-size: 0.85rem;
  color: var(--accent);
}

/* Channels and Direct Messages */
.channels, .direct-messages {
  margin-top: 1rem;
  border: 20px;
}
.general {
  font-weight: bold;
  background-color: var(--grey);
}
.channels h4, .direct-messages h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.channels ul, .direct-messages ul {
  list-style: none;
  padding: 0;
}

.channels li, .direct-messages li {
  padding: 0.5rem 0;
  font-size: 0.95rem;
  color: var(--light);
  cursor: pointer;
  transition: color 0.2s;
}

.channels li:hover, .direct-messages li:hover {
  color: var(--accent);
}

/* Chat area */
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid var(--grey);
}

.chat-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.chat-subtitle {
  font-size: 0.9rem;
  color: var(--accent);
}

.messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.message {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
}

.message.received .message-content {
  background-color: var(--primary);
  color: var(--dark-alt);
  border-radius: 10px;
  padding: 0.75rem;
}

.message.sent .message-content {
  background-color: var(--accent);
  color: var(--text-color);
  border-radius: 10px;
  padding: 0.75rem;
  align-self: flex-end;
}

.message-content {
  max-width: 70%;
}

.message-author {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.message-text {
  margin-bottom: 0.25rem;
}

.message-time {
  font-size: 0.75rem;
  color: var(--grey);
  text-align: right;
}

.message-input {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid var(--grey);
}

.message-input input {
  flex: 1;
  padding: 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--grey);
  margin-right: 0.5rem;
  background-color: var(--light);
  color: var(--dark-alt);
}

.message-input input::placeholder {
  color: var(--grey);
}

.send-button {
  padding: 0.75rem 1rem;
  border-radius: 20px;
  background-color: var(--accent);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: darken(var(--accent), 10%);
}
</style>