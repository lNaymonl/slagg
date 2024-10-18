<script setup lang="ts">
import { ref, useTemplateRef, type Ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import User from "@/libs/user.lib";
import type { HttpResponseModel } from "@common/models/response";
import type { LoginUserModel } from "@common/models/user";
import router from "@/router";

const user: LoginUserModel = {
  email: "",
  password: ""
};

let error: Ref<HttpResponseModel | null> = ref(null);

const passwordValidationModel: Ref<{
  isLength: boolean;
  containsSpecialChar: boolean;
  containsNumber: boolean;
  containsUpperCase: boolean;
}> = ref({
  isLength: false,
  containsSpecialChar: false,
  containsNumber: false,
  containsUpperCase: false
});

const CHECK_ALL_REGEX = /^(?=.*[A-ZÄÜÖ])(?=.*\d)(?=.*[^A-Za-z0-9ÄÖÜ]).+$/;
const SPECIAL_CHAR_REGEX = /[^A-Za-z0-9ÄÖÜ]/;
const NUMBER_REGEX = /\d/;
const UPPER_CASE_REGEX = /[A-ZÄÜÖ]/;

function validatePassword() {
  passwordValidationModel.value = {
    isLength: user.password.length >= 8,
    containsSpecialChar: SPECIAL_CHAR_REGEX.test(user.password),
    containsNumber: NUMBER_REGEX.test(user.password),
    containsUpperCase: UPPER_CASE_REGEX.test(user.password)
  };
}

const form = useTemplateRef("form");
const emitter = defineEmits<{
  loggedIn: []
}>();

function loginUser() {
  if (form.value?.checkValidity()) {
    User.login(user)
      .then(() => {
        form.value?.classList.add("logged-in"); // Start the animation to blend out the login page
        emitter("loggedIn");
        if (User.isExpired()) {
          throw new Error("The token provided by the server is expired.");
        } else router.push("/");
        router.clearRoutes();
      })
      .catch((e: HttpResponseModel) => {
        console.log(user);
        error.value = e;
      });
  }
  form.value?.classList.add("was-validated"); // Add the "was-validated" class so the bootstrap feedback is shown
}
</script>

<template>
  <div style="min-width: 100vw; min-height: 100vh; overflow: hidden" class="position-relative">
    <form
      ref="form"
      class="login-form bg-secondary rounded needs-validation container p-3"
      :style="{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }"
      @submit.prevent
      @submit="loginUser()"
      novalidate
    >
      <div class="row row-cols-auto justify-content-center">
        <div class="col">
          <img
            src="/Slagg_Logo_Alt_Bright.ico"
            alt="Application Logo"
            class="rounded-4 bg-body"
            width="64px"
            height="64px"
          />
        </div>
      </div>
      <div class="row row-cols-auto justify-content-center">
        <div class="col">
          <h1>Login</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="email-input" class="form-label">Email</label>
          <input
            id="email-input"
            type="email"
            class="bg-white form-control text-black"
            aria-label="Email"
            v-model="user.email"
            required
            autofocus
          />
          <div class="invalid-feedback">
            <div class="d-flex align-items-center gap-1 ps-2">
              <FontAwesomeIcon :icon="faTriangleExclamation" />
              <p>Please provide a valid email-adress</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="password-input" class="form-label">Email</label>
          <input
            id="password-input"
            type="password"
            class="bg-white form-control text-black"
            aria-label="Password"
            v-model="user.password"
            required
            minlength="8"
          />
          <div class="invalid-feedback">
            <div class="d-flex align-items-center gap-1 ps-2">
              <FontAwesomeIcon :icon="faTriangleExclamation" />
              <p>Please provide a valid password (min. 8 characters)</p>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 32px" class="my-1 row justify-content-center">
        <div
          v-if="error !== null"
          class="text-danger d-flex flex-row align-items-center gap-1 bg-white px-2 py-1 rounded col-auto"
        >
          <FontAwesomeIcon :icon="faTriangleExclamation" />
          <p>{{ error.message }}</p>
        </div>
      </div>
      <div class="input-group d-flex justify-content-center">
        <button type="submit" class="btn btn-primary w-50">Login</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
</style>
