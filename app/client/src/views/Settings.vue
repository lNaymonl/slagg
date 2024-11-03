<template>
  <div class="settings-page">
    <aside class="settings-sidebar">
      <nav>
        <h3>Settings</h3>
        <ul>
          <li @click="currentSection = 'profile'" :class="{ active: currentSection === 'profile' }">Profile</li>
          <li @click="currentSection = 'account'" :class="{ active: currentSection === 'account' }">Account</li>
          <li @click="currentSection = 'notifications'" :class="{ active: currentSection === 'notifications' }">Notifications</li>
        </ul>
      </nav>
    </aside>

    <section class="settings-content">
      <h2>{{ sectionTitle }}</h2>

      <div v-if="currentSection === 'profile'" class="settings-section">
        <h3>Profile Settings</h3>
        
        <!-- Display Name -->
        <div class="setting-item">
          <label for="displayName">Display Name</label>
          <input type="text" id="displayName" placeholder="Enter your display name" />
        </div>

        <!-- Profile Picture with Avatar Preview -->
        <div class="setting-item profile-picture">
          <label for="profilePicture">Profile Picture</label>
          <div class="profile-upload">
            <img src="@/assets/Louie.jpg" alt="User Avatar" class="avatar-preview" />
            <input type="file" id="profilePicture" />
          </div>
        </div>

        <!-- Status -->
        <div class="setting-item">
          <label for="status">Status</label>
          <textarea id="status" rows="2" placeholder="Enter your current status"></textarea>
        </div>

        <!-- Save and Cancel Buttons -->
        <div class="settings-buttons">
          <button class="save-button" @click="saveChanges">Save Changes</button>
          <button class="cancel-button" @click="cancelChanges">Cancel</button>
        </div>
      </div>

      <div v-if="currentSection === 'account'" class="settings-section">
        <h3>Account Settings</h3>

        <!-- Change Password -->
        <div class="setting-item">
          <label for="password">Change Password</label>
          <input type="password" id="password" placeholder="Enter new password" />
        </div>

        <!-- Theme -->
        <div class="setting-item">
          <label for="theme">Theme</label>
          <select id="theme">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>

        <!-- Save and Cancel Buttons -->
        <div class="settings-buttons">
          <button class="save-button" @click="saveChanges">Save Changes</button>
          <button class="cancel-button" @click="cancelChanges">Cancel</button>
        </div>
      </div>

      <div v-if="currentSection === 'notifications'" class="settings-section">
        <h3>Notification Settings</h3>

        <!-- Email Notifications -->
        <div class="setting-item">
          <label for="emailNotifications">Email Notifications</label>
          <input type="checkbox" id="emailNotifications" />
        </div>

        <!-- Sound Notifications -->
        <div class="setting-item">
          <label for="soundNotifications">Sound Notifications</label>
          <input type="checkbox" id="soundNotifications" />
        </div>

        <!-- Save and Cancel Buttons -->
        <div class="settings-buttons">
          <button class="save-button" @click="saveChanges">Save Changes</button>
          <button class="cancel-button" @click="cancelChanges">Cancel</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentSection = ref('profile');

const sectionTitle = computed(() => {
  switch (currentSection.value) {
    case 'profile':
      return 'Profile Settings';
    case 'account':
      return 'Account Settings';
    case 'notifications':
      return 'Notification Settings';
    default:
      return 'Settings';
  }
});

// Dummy methods for save and cancel actions
const saveChanges = () => {
  alert("Changes saved successfully!");
};

const cancelChanges = () => {
  alert("Changes canceled.");
};
</script>

<style scoped>
.settings-page {
  display: flex;
  height: 100vh;
  background-color: var(--body-bg);
  color: var(--text-color);
}

.settings-sidebar {
  width: 250px;
  background-color: var(--primary-alt);
  padding: 1.5rem;
  border-right: 1px solid var(--grey);
}

.settings-sidebar h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1rem;
}

.settings-sidebar ul {
  list-style: none;
  padding: 0;
}

.settings-sidebar li {
  padding: 0.8rem 0;
  font-size: 1rem;
  color: var(--light);
  cursor: pointer;
  transition: color 0.2s;
}

.settings-sidebar li:hover, .settings-sidebar li.active {
  color: var(--accent);
  font-weight: bold;
}

.settings-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.settings-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.settings-section h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.setting-item {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.setting-item label {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.setting-item input[type="text"],
.setting-item input[type="password"],
.setting-item select,
.setting-item textarea {
  width: 60%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--grey);
  background-color: #f8f9fa;
  color: var(--dark-alt);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.setting-item input[type="text"]:focus,
.setting-item input[type="password"]:focus,
.setting-item select:focus,
.setting-item textarea:focus {
  box-shadow: 0 0 0 2px var(--accent);
}

.setting-item textarea {
  resize: none;
  height: 50px;
}

.profile-picture .profile-upload {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--accent);
}

/* Save and Cancel Buttons */
.settings-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.save-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--accent);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: darken(var(--accent), 10%);
}

.cancel-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--grey);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: darken(var(--grey), 10%);
}
</style>