<script setup>
import { ref, onMounted } from 'vue';

const items = ref([
  // Example default items can go here if needed
]);

// Fetch items from API using Fetch
const fetchItems = async () => {
  const userId = 1;
  try {
    const response = await fetch(`/api/settings/getsettings?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();  // Parse the JSON response directly
    items.value = data;  // Update items with the fetched array of settings
    console.log('Fetched items:', items.value);
  } catch (error) {
    console.error('Error fetching items:', error.message);
  }
};





onMounted(() => {
  fetchItems();
});
</script>

<template>
  <div class="container mt-4">
    <h2 class="text-light mb-4">User Settings</h2>
    <div class="row">
      <!-- Iterate through settings -->
      <div v-for="(item, index) in items" :key="index" class="col-md-6 mb-4">
        <div class="card bg-primary-alt text-light p-3 shadow-sm">
          <div class="card-body">
            <!-- Text Input -->
            <div v-if="item.settingInputType === 'text'" class="form-group">
              <label :for="'setting-' + item.settingId" class="form-label">
                {{ item.settingName }}
              </label>
              <input
                type="text"
                class="form-control"
                :id="'setting-' + item.settingId"
                :placeholder="item.value"
              />
            </div>

            <!-- Checkbox Input -->
            <div v-else-if="item.settingInputType === 'checkbox'" class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                :id="'setting-' + item.settingId"
                v-model="item.value"
                :true-value="1"
                :false-value="0"
              />
              <label :for="'setting-' + item.settingId" class="form-check-label">
                {{ item.settingName }}
              </label>
            </div>

            <!-- Select Input -->
            <div v-else-if="item.settingInputType === 'select'" class="form-group">
              <label :for="'setting-' + item.settingId" class="form-label">
                {{ item.settingName }}
              </label>
              <select class="form-control" v-model="item.value" :id="'setting-' + item.settingId">
                <option v-for="option in item.options" :key="option" :value="option">{{ option }}</option>
              </select>
            </div>

            <!-- Radio Buttons -->
            <div v-else-if="item.settingInputType === 'radio'" class="form-group">
              <label>{{ item.settingName }}</label>
              <div v-for="option in item.options" :key="option" class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="option"
                  v-model="item.value"
                  :id="option"
                />
                <label :for="option" class="form-check-label">{{ option }}</label>
              </div>
            </div>

            <!-- Number Input -->
            <div v-else-if="item.settingInputType === 'number'" class="form-group">
              <label :for="'setting-' + item.settingId" class="form-label">
                {{ item.settingName }}
              </label>
              <input
                type="number"
                class="form-control"
                v-model="item.value"
                :min="item.min"
                :max="item.max"
              />
            </div>

            <!-- Textarea Input -->
            <div v-else-if="item.settingInputType === 'textarea'" class="form-group">
              <label :for="'setting-' + item.settingId" class="form-label">{{ item.settingName }}</label>
              <textarea class="form-control" v-model="item.value" :rows="5"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  background-color: var(--body-bg);
  padding: 20px;
  border-radius: 10px;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-color);
}

.card {
  background-color: var(--primary-alt);
  border: none;
  border-radius: 8px;
}

.form-label {
  font-weight: bold;
  color: var(--primary);
  text-transform: capitalize;
}

.form-control {
  background-color: var(--light);
  border: 1px solid var(--grey);
  color: var(--dark-alt);
  padding: 10px;
  transition: box-shadow 0.3s ease;
}

.form-control:focus {
  box-shadow: 0 0 5px var(--accent);
}

.form-check-input {
  background-color: var(--body-bg);
  border: 2px solid var(--primary);
  transition: all 0.3s;
}

.form-check-input:checked {
  background-color: var(--accent);
  border-color: var(--accent);
}

.form-check-label {
  color: var(--text-color);
  margin-left: 10px;
}
</style>
