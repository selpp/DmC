<template>
  <div id="app">
    <router-view />
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
button:focus {
  outline: none;
}

::-webkit-scrollbar {
  background: #282b32;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: #c4c9d4;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #969dad;
}
</style>
