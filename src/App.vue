<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup></script>
<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
