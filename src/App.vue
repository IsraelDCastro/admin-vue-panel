<template>
  <div class="relative flex flex-wrap wrapper" v-if="checkLogin">
    <Sidebar />
    <div class="content">
      <Navbar></Navbar>
      <transition name="fade" mode="out-in" >
        <router-view/>
      </transition>
    </div>
  </div>
  <transition name="fade" mode="out-in" v-else>
    <router-view/>
  </transition>
</template>

<script setup>
  import Navbar from '@/layouts/Header.vue';
  import Sidebar from '@/layouts/Sidebar.vue';
  import { ref } from 'vue';
  import { useRouter } from "vue-router";
  const router = useRouter()

  let checkLogin = ref(false)

  if (router.name !== "SignIn" || router.name !== "SignUp") {
    checkLogin.value = true
  } else {
    checkLogin.value = false
  }
</script>