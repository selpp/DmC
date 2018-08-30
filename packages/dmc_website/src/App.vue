<template>
  <div id="app">
    <NavBar />

    <transition name="slide">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Inconsolata', monospace;;
  font-weight: 400;
  background-color: #282b32;
  color: #c4c9d4;
  overflow-x: hidden;
}

.slide-leave-active,
.slide-enter-active { transition: 0.4s; }
.slide-enter { transform: translate(100%, 0); }
.slide-leave-to { opacity: 0; }

::-webkit-scrollbar { width: 0px; }
::-webkit-scrollbar-thumb { width: 0px; }
::-webkit-scrollbar-track        { width: 0px; }
::-webkit-scrollbar-track-piece  { width: 0px; }
</style>
