<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier;
  font-weight: 400;
  background-color: #282b32;
  color: #c4c9d4;
}

button {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  border: none;
  color: #c4c9d4;
  background-color: #282b32;
  cursor: pointer;
  transition: 0.4s;

  border-style: solid;
  border-width: 10px;
  border-color: #282b32;
}
button:hover {
  border-style: solid;
  border-width: 10px;
  border-color: #3e19a7;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar {
  background: #c4c9d4;
}
::-webkit-scrollbar-thumb {
  background: #282b32;
}
::-webkit-scrollbar-thumb:hover {
  background: #1d1f25;
}
</style>
