<template>
  <nav class="navbar">
    <div class="nav-search">
      <input type="text" placeholder="Search"/>
      <button class="btn btn-primary">
        <SearchIcon class="w-5 h-5" />
      </button>
    </div>
    
    <div class="user dropdown is-hovered">
      <div class="user-info">
        <h6>John Smith</h6>
        <span class="user-image">
          <img src="https://images.pexels.com/photos/3214788/pexels-photo-3214788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        </span>
        <ChevronDownIcon class="w-5 h-5 dropdown-icon" />
      </div>
      <ul class="dropdown-content">
        <li class="dropdown-item">Profile</li>
        <li class="dropdown-item">Settings</li>
        <hr class="dropdown-divider" />
        <li class="dropdown-item">
          <a href="#" @click="SetFakeLogin">Log out</a>
        </li>
      </ul>
    </div>
    <!-- <span class={ openSidebar ? "open-sidebar is-active" : "open-sidebar"}> -->
    <span class="open-sidebar">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </nav>
</template>

<script setup>
  import { ChevronDownIcon, SearchIcon } from '@heroicons/vue/solid';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  async function SetFakeLogin () {
    await localStorage.setItem("FakeLoginAdminPanel", false);
    router.push('/')
  }
</script>