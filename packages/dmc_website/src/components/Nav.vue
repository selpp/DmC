<template>
  <div id="nav">
    <button @click="redirect('/')" v-on:mouseover="hover">Home</button>
    <button v-if="!presentation" @click="redirect('/session')" v-on:mouseover="hover">Session</button>
    <button v-if="!presentation" @click="redirect('/tutorial')" v-on:mouseover="hover">Tutorial</button>
    <button v-if="!presentation" @click="donate" v-on:mouseover="hover">Donate</button>
    <div id="nav-logo">DmC</div>
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
    hover: function() { sound.play('BUTTON_HOVER'); },
    donate: function() {
      sound.play('BUTTON_CLICK');
      window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=KFFQWKMWAGAMN&lc=FR&item_name=DrawMyCode&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted');
    }
  }
}
</script>

<style scoped>
#nav {
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: #17181c;
}
#nav-logo {
  float: right;
  font-weight: bold;
  font-size: 25px;
  border: solid 3px #dadee7;
  margin: 15px 25px;
}
</style>
