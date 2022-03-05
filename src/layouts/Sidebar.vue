<template>
  <aside class="sidebar">
    <div class="sidebar-head">
      <h4>{{ route.name }}</h4>
      <span class="rotate-180 close-sidebar">
        <ChevronDoubleLeftIcon class="w-7 h-7" />
      </span>
    </div>
    <hr class="sidebar-divider" />
    <ul class="sidebar-nav">
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <TableIcon class="w-5 h-5" />
            <span class="tooltip">Dashboard</span>
          </span>
          <span class="sidebar-text"> Dashboard </span>
        </a>
      </li>
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <UsersIcon class="w-5 h-5" />
            <span class="tooltip">Accounts</span>
          </span>
          <span class="sidebar-text"> Accounts </span>
        </a>
      </li>
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <ChartBarIcon class="w-5 h-5" />
            <span class="tooltip">Statistics</span>
          </span>
          <span class="sidebar-text"> Statistics </span>
        </a>
      </li>
      <hr class="sidebar-divider" />
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <CogIcon class="w-5 h-5" />
            <span class="tooltip">Accounts</span>
          </span>
          <span class="sidebar-text"> Settings </span>
        </a>
      </li>
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <UserIcon class="w-5 h-5" />
            <span class="tooltip">Profile</span>
          </span>
          <span class="sidebar-text"> My Profile </span>
        </a>
      </li>
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <LightBulbIcon class="w-5 h-5" />
            <span class="tooltip">Suggetions</span>
          </span>
          <span class="sidebar-text"> Suggetions </span>
        </a>
      </li>
      <li>
        <a href="#!" class="sidebar-item">
          <span class="sidebar-icon has-tooltip">
            <QuestionMarkCircleIcon class="w-5 h-5" />
            <span class="tooltip">FQAs</span>
          </span>
          <span class="sidebar-text"> FQAs </span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();

import {
  ChartBarIcon,
  ChevronDoubleLeftIcon,
  CogIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  TableIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/vue/solid";
</script>
