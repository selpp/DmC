<template>
  <div id="nav">
    <div id="nav-links">
      <span id="nav-logo">DMC</span>
      <button @click="redirect('/')">Home</button>
      <button v-if="!presentation" @click="redirect('/session')">Session</button>
      <button v-if="!presentation" @click="redirect('/tutorial')">Tutorial</button>
      <button v-if="!presentation" @click="redirect('/')">Donate</button>
    </div>
  </div>
</template>

<script>
const BUTTON_SOUND = new Audio(require('../assets/button.wav'));

export default {
  name: 'NavBar',
  computed: {
    presentation: function() { return (this.$route.path == '/session/play' || this.$route.path == '/tutorial'); }
  },
  methods: {
    redirect: function(path) {
      BUTTON_SOUND.pause(); BUTTON_SOUND.currentTime = 0; BUTTON_SOUND.play();
      this.$router.push({ path: path });
    }
  }
}
</script>

<style scoped>
#nav {
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#nav-links {
  background-color: #1a1e26;
  box-shadow: 0 20px 50px #1a1e26;
}
#nav-logo {
  float: right;
  padding: 10px 15px;

  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;

  border-style: solid;
  border-width: 10px;
  border-color: rgba(0, 0, 0, 0);
}

button {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  border: none;
  color: #c4c9d4;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: 0.4s;

  border-style: solid;
  border-width: 10px;
  border-color: rgba(0, 0, 0, 0);
}
button:hover {
  border-style: solid;
  border-width: 10px;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #3e19a7 rgba(0, 0, 0, 0);
}
button:focus {
  outline: none;
}
</style>
