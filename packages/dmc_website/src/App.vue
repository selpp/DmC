<template>
  <div id="app">
    <router-view/>
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav';

export default {
  name: 'App',
  components: { Nav }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #c4c9d4;
  background-color: #282b32;
}
::-webkit-scrollbar { width: 0px; }
::-webkit-scrollbar-thumb { width: 0px; }
::-webkit-scrollbar-track { width: 0px; }
::-webkit-scrollbar-track-piece  { width: 0px; }

h1, h2, h3, h4, h5, h6 {
  border-style: solid;
  border-width: 10px;
  font-weight: bold;
  text-align: center;
}
h1 {
  padding: 50px;
  font-size: 50px;
  border-color: #a71961;
}
h2 {
  padding: 40px;
  font-size: 40px;
  border-color: #7a19a7;
}
h3 {
  padding: 35px;
  font-size: 35px;
  border-color: #3e19a7;
}
h4 {
  padding: 30px;
  font-size: 30px;
  border-color: #1941a7;
}
h5 {
  padding: 27px;
  font-size: 27px;
  border-color: #1963a7;
}
h6 {
  padding: 25px;
  font-size: 25px;
  border-color: #1996a7;
}

button {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  color: #c4c9d4;
  background-color: rgba(0, 0, 0, 0);
  border: solid 10px rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: 0.4s;
}
button:hover {
  border: solid 10px;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #3e19a7 rgba(0, 0, 0, 0);
}
button:focus {
  outline: none;
}
</style>
