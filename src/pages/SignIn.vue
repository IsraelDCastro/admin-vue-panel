<!-- @format -->

<template>
  <div class="sign-in">
    <div class="sign-wrap">
      <div class="sign-image-wrap">
        <div class="signin-img"></div>
      </div>
      <div class="form-wrap">
        <div class="form">
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
            <button class="w-full btn btn-primary">Sign in</button>
          </div>
        </div>
        <hr class="my-8">
      </div>
    </div>
  </div>
</template>
