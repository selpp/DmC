<template>
  <div id="nav">
    <button @click="redirect('/')" v-on:mouseover="hover">Home</button>
    <button v-if="!presentation" @click="redirect('/session')" v-on:mouseover="hover">Session</button>
    <button v-if="!presentation" @click="redirect('/tutorial')" v-on:mouseover="hover">Tutorial</button>
    <button v-if="!presentation" @click="redirect('/')" v-on:mouseover="hover">Donate</button>
  </div>
</template>

<script>
import sound from '@/sound/sound';

export default {
  name: 'Nav',
  computed: {
    presentation: function() {
      return (this.$route.path == '/session' || this.$route.path == '/tutorial');
    }
  },
  methods: {
    redirect: function(path) { sound.play('BUTTON_CLICK'); this.$router.push({ path: path }); },
    hover: function() { sound.play('BUTTON_HOVER'); }
  }
}
</script>

<style scoped>
#nav {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: #282b32;
}
</style>
