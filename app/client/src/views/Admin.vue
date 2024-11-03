<template>
  <div class="admin-page">
    <!-- Sidebar for navigation between CRUD sections -->
    <aside class="admin-sidebar">
      <nav>
        <h3>Admin Controls</h3>
        <ul>
          <li @click="currentSection = 'channels'" :class="{ active: currentSection === 'channels' }">Channels</li>
          <li @click="currentSection = 'users'" :class="{ active: currentSection === 'users' }">Users</li>
          <li @click="currentSection = 'dirtyWords'" :class="{ active: currentSection === 'dirtyWords' }">Dirty Words</li>
          <li @click="currentSection = 'deleteMessages'" :class="{ active: currentSection === 'deleteMessages' }">Delete Messages</li>
          <li @click="currentSection = 'groupMessages'" :class="{ active: currentSection === 'groupMessages' }">Group Messages</li>
          <li @click="currentSection = 'directMessages'" :class="{ active: currentSection === 'directMessages' }">Direct Messages</li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <section class="admin-content">
      <h2>{{ sectionTitle }}</h2>

      <!-- Manage Dirty Words CRUD Interface -->
      <div v-if="currentSection === 'dirtyWords'" class="crud-section">
        <h3>Manage Dirty Words</h3>

        <!-- Form to add new dirty word -->
        <div class="add-dirty-word">
          <input
            type="text"
            v-model="newDirtyWord"
            placeholder="Enter new dirty word"
            class="add-input"
          />
          <button @click="addDirtyWord" class="add-button">Add</button>
        </div>

        <!-- List of dirty words -->
        <div class="crud-list">
          <div v-for="(word, index) in dirtyWords" :key="index" class="dirty-word-item">
            <span class="word-text">{{ word }}</span>
            <div class="action-buttons">
              <button @click="editDirtyWord(index)" class="edit-button">Edit</button>
              <button @click="deleteDirtyWord(index)" class="delete-button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentSection = ref('dirtyWords'); // Set to "dirtyWords" for focused view on that section

const sectionTitle = computed(() => {
  switch (currentSection.value) {
    case 'channels':
      return 'Manage Channels';
    case 'users':
      return 'Manage Users';
    case 'dirtyWords':
      return 'Manage Dirty Words';
    case 'deleteMessages':
      return 'Delete Messages';
    case 'groupMessages':
      return 'Group Messages';
    case 'directMessages':
      return 'Direct Messages';
    default:
      return 'Admin Controls';
  }
});

// Dummy data and functions for dirty words management
const dirtyWords = ref(["Project Phoenix", "Prototype Omega", "Confidential Partner Company"]);
const newDirtyWord = ref("");

const addDirtyWord = () => {
  if (newDirtyWord.value.trim()) {
    dirtyWords.value.push(newDirtyWord.value.trim());
    newDirtyWord.value = "";
  }
};

const editDirtyWord = (index) => {
  const editedWord = prompt("Edit Dirty Word", dirtyWords.value[index]);
  if (editedWord !== null && editedWord.trim()) {
    dirtyWords.value[index] = editedWord.trim();
  }
};

const deleteDirtyWord = (index) => {
  dirtyWords.value.splice(index, 1);
};
</script>

<style scoped>
.admin-page {
  display: flex;
  height: 100vh;
  background-color: var(--body-bg);
  color: var(--text-color);
}

.admin-sidebar {
  width: 250px;
  background-color: var(--primary-alt);
  padding: 1.5rem;
  border-right: 1px solid var(--grey);
}

.admin-sidebar h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1rem;
}

.admin-sidebar ul {
  list-style: none;
  padding: 0;
}

.admin-sidebar li {
  padding: 0.8rem 0;
  font-size: 1rem;
  color: var(--light);
  cursor: pointer;
  transition: color 0.2s;
}

.admin-sidebar li:hover, .admin-sidebar li.active {
  color: var(--accent);
  font-weight: bold;
}

.admin-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.admin-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.crud-section h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Add Dirty Word Form */
.add-dirty-word {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.add-input {
  padding: 0.5rem;
  flex: 1;
  border-radius: 6px;
  border: 1px solid var(--grey);
  background-color: #f8f9fa;
  color: var(--dark-alt);
}

.add-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: var(--accent);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: darken(var(--accent), 10%);
}

/* Dirty Words List */
.crud-list {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dirty-word-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--grey);
}

.word-text {
  font-size: 1rem;
  color: var(--dark-alt);
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button {
  background-color: var(--primary);
  color: var(--text-color);
}

.delete-button {
  background-color: var(--accent);
  color: var(--text-color);
}

.edit-button:hover {
  background-color: darken(var(--primary), 10%);
}

.delete-button:hover {
  background-color: darken(var(--accent), 10%);
}
</style>