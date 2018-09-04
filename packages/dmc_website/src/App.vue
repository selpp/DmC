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
@import "../node_modules/katex/dist/katex.min.css";
.katex {
  font-size: 3em;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #dadee7;
  background-color: #17181c;
}
::-webkit-scrollbar { width: 0px; }
::-webkit-scrollbar-thumb { width: 0px; }
::-webkit-scrollbar-track { width: 0px; }
::-webkit-scrollbar-track-piece  { width: 0px; }

button {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  color: #dadee7;
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
