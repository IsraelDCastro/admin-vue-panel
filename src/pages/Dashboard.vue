<template>
  <div class="relative flex flex-wrap wrapper">
    <!-- <Sidebar /> -->
    <div class="content">
      <Navbar></Navbar>
      <div class="container flex-1">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Navbar from '@/layouts/Header.vue';
</script>