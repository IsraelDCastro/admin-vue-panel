<!-- @format -->

<template>
  <div class="sign-in">
    <div class="sign-wrap">
      <div class="sign-image-wrap">
        <div class="signin-img"></div>
      </div>
      <div class="form-wrap">
        <div>
          <h2 class="mb-8 text-center">Sign In</h2>
          <div class="field">
            <label class="label">Email</label>
            <input type="text" class="input" placeholder="example@example.com" />
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input type="password" class="input" placeholder="Your password" />
          </div>
          <div class="field is-checkbox">
            <input type="checkbox" id="remind" class="checkbox" />
            <label for="remind" class="label">Remind me</label>
          </div>
          <div class="field is-button">
            <router-link to="/dashboard" class="w-full btn btn-primary" @click="SetFakeLogin">Sign in</router-link>
          </div>
        </div>
        <hr class="my-8" />
        <router-link to="/register" class="mb-1 link info">Create an account</router-link>
        <div class="other-options">
          <h5>Sign in with:</h5>
          <ul>
            <li>
              <a href="#" class="bg-white border border-blue-300 hover:bg-blue-300/20"><img :src="Google" alt=""></a>
            </li>
            <li>
              <a href="#" class="bg-twitter/80 hover:bg-twitter"><Twitter /></a>
            </li>
            <li>
              <a href="#" class="bg-facebook/80 hover:bg-facebook"><Facebook /></a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Facebook from "@/components/icons/Facebook.vue";
  import Twitter from "@/components/icons/Twitter.vue";
  import Google from "@/assets/images/google.png";
</script>
