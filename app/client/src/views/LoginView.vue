<script setup lang="ts">
import User from "@/libs/user.lib";
import type { LoginUserModel } from "@common/models/user";

const loginUser: LoginUserModel = {
  email: "",
  password: ""
};
</script>

<template>
  <div
    class="login-slide d-flex align-items-center justify-content-center"
    style="min-height: 100vh"
  >
    <form
      class="d-flex flex-column gap-3 align-items-center justify-content-center"
      v-on:submit="User.login(loginUser)"
      @submit.prevent
    >
      <div class="input-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          v-model="loginUser.email"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          v-model="loginUser.password"
        />
      </div>
      <div class="input-group d-grid">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
