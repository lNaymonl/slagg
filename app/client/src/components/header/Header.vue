<template>
  <div class="header">
    <div class="header-left">
              <icon class="header-icon" name="access_time" scale="2"></icon>
    </div>
    <div class="header-center">
      <icon class="header-icon" name="search" scale="2"></icon>
      <input placeholder="Search Slagg" />
    </div>
    <div class="header-right">
      <icon class="header-icon" name="help_outline" scale="2"></icon>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: var(--dark);
  color: var(--light);
  box-shadow: 0 2px 5px var(--dark-alt);;
}

.header-left, .header-right {
  flex: 0.2;
  display: flex;
  align-items: center;
}

.header-center {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-alt);
  padding: 5px 20px;
  border-radius: 6px;
}

.header-center > input {
  background-color: transparent;
  border: none;
  color: var(--light);
  text-align: center;
  width: 100%;
}

.header-icon {
  margin-right: 10px;
  color: var(--light);
}

.header-right {
  display: flex;
  justify-content: flex-end;
}
</style>
