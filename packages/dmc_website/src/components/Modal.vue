<template>
  <div class="modal">
    <div class='modal-content'>
      <h1 v-if="modal.type == 'HEADER 1'">{{ modal.content }}</h1>
      <h2 v-if="modal.type == 'HEADER 2'">{{ modal.content }}</h2>
      <h3 v-if="modal.type == 'HEADER 3'">{{ modal.content }}</h3>
      <h4 v-if="modal.type == 'HEADER 4'">{{ modal.content }}</h4>
      <h5 v-if="modal.type == 'HEADER 5'">{{ modal.content }}</h5>
      <h6 v-if="modal.type == 'HEADER 6'">{{ modal.content }}</h6>

      <pre v-if="modal.type == 'INFO'">{{ '\n' + modal.content }}</pre>

      <img v-if="modal.type == 'IMAGE'" v-bind:src="modal.content"/>
      <a v-if="modal.type == 'IMAGE'" v-bind:href="modal.content">{{ modal.content }}</a>

      <iframe v-if="modal.type == 'YOUTUBE'" width="800" height="600" v-bind:src="'https://www.youtube.com/embed/' + modal.content"> </iframe>
      <a v-if="modal.type == 'YOUTUBE'" v-bind:href="'https://www.youtube.com/watch?v=' + modal.content">{{ 'https://www.youtube.com/watch?v=' + modal.content }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [ 'modal' ]
}
</script>

<style scoped>
.modal {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.modal-content {
  margin: auto;
  padding: 70px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.3);

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

a {
  text-decoration: none;
  color: rgba(25, 150, 167, 0.5);
  margin-top: 25px;
  font-size: 10px;
  transition: 0.4s;
}
a:hover {
  color: rgba(19, 106, 119, 0.5);
}

pre {
  width: 70%;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  white-space: pre-wrap;
}

h1 {
  padding: 50px;
  margin: 15px;

  font-size: 50px;

  border-style: solid;
  border-width: 10px;
  border-color: #a71961;
}
h2 {
  padding: 40px;
  margin: 15px;

  font-size: 40px;

  border-style: solid;
  border-width: 10px;
  border-color: #7a19a7;
}
h3 {
  padding: 35px;
  margin: 15px;

  font-size: 35px;

  border-style: solid;
  border-width: 10px;
  border-color: #3e19a7;
}
h4 {
  padding: 30px;
  margin: 15px;

  font-size: 30px;

  border-style: solid;
  border-width: 10px;
  border-color: #1941a7;
}
h5 {
  padding: 27px;
  margin: 15px;

  font-size: 27px;

  border-style: solid;
  border-width: 10px;
  border-color: #1963a7;
}
h6 {
  padding: 25px;
  margin: 15px;

  font-size: 25px;

  border-style: solid;
  border-width: 10px;
  border-color: #1996a7;
}

img {
  max-height: 70vh;
  max-width: 70vw;
}
iframe {
  border: none;
}
</style>
