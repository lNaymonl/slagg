<script setup lang="ts">
import { onMounted, ref, useTemplateRef, type Ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import User from "@/libs/user.lib";
import type { HttpResponseModel } from "@common/models/response";
import type { LoginUserModel } from "@common/models/user";

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

// TODO implement propper emitting
function loginUser() {
  User.login(user)
    .then(console.log)
    .catch((e: HttpResponseModel) => {
      console.log(user);
      error.value = e;
    });
}

function test(e: Event) {
  e.preventDefault();
  e.stopPropagation();
}

const form = useTemplateRef("form");

onMounted(() => {
  if (form.value) {
    form.value.addEventListener(
      "submit",
      (ev) => {
        if (!form.value!.checkValidity()) {
          ev.preventDefault();
          ev.stopPropagation();
        }

        form.value!.classList.add("was-validated");
      },
      false
    );
  }
});
</script>

<template>
  <form
    ref="form"
    class="bg-secondary rounded needs-validation container p-3"
    style="min-width: fit-content"
    novalidate
    v-on:submit="test"
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
        />
        <div class="invalid-feedback">
          <div class="d-flex align-items-center gap-1 ps-2">
            <FontAwesomeIcon :icon="faTriangleExclamation" />
            <p>Please provide a password that is at least 8 characters long.</p>
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
          :pattern="CHECK_ALL_REGEX.source"
          @change="validatePassword"
        />
        <div class="invalid-feedback">
          <div class="d-flex align-items-center gap-1 ps-2">
            <FontAwesomeIcon :icon="faTriangleExclamation" />
            <p>Please provide a password that is at least 8 characters long.</p>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 32px">
      <div
        v-if="error !== null"
        class="text-danger d-flex flex-row align-items-center gap-1 bg-white px-2 py-1 rounded"
      >
        <FontAwesomeIcon :icon="faTriangleExclamation" />
        <p>{{ error.message }}</p>
      </div>
    </div>
    <div class="input-group d-flex justify-content-center">
      <button type="submit" class="btn btn-primary w-50">Login</button>
    </div>
  </form>
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
// .input-group {
//   width: 75%;
// }
</style>
