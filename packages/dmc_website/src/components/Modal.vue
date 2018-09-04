<template>
  <div id="modal">
    <div id="modal-content">
      <h1 v-if="modal.type == 'H1'">{{ modal.content }}</h1>
      <h2 v-if="modal.type == 'H2'">{{ modal.content }}</h2>
      <h3 v-if="modal.type == 'H3'">{{ modal.content }}</h3>
      <h4 v-if="modal.type == 'H4'">{{ modal.content }}</h4>
      <h5 v-if="modal.type == 'H5'">{{ modal.content }}</h5>
      <h6 v-if="modal.type == 'H6'">{{ modal.content }}</h6>

      <pre v-if="modal.type == 'INFO'">{{ '\n' + modal.content }}</pre>
      <div id="qrcode" v-if="modal.type == 'QRCODE'" v-html="modal.content.qrcode"></div>
      <iframe v-if="modal.type == 'YOUTUBE'" width="960" height="540"
      v-bind:src="'https://www.youtube.com/embed/' + modal.content + '?autoplay=1&showinfo=0&controls=0'">
      </iframe>
      <img v-if="modal.type == 'IMAGE'" v-bind:src="modal.content"/>

      <a v-if="modal.type == 'QRCODE'" v-bind:href="modal.content.url">{{ modal.content.url }}</a>
      <a v-if="modal.type == 'IMAGE'" v-bind:href="modal.content">{{ modal.content }}</a>
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
#modal {
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#modal-content {
  margin: auto;
  width: 100%;
  padding: 70px 0px;
  position: absolute;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: rgba(25, 150, 167, 0.5);
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  transition: 0.4s;
}
a:hover {
  color: rgba(19, 106, 119, 0.5);
}

pre {
  width: auto;
  max-width: 80%;
  padding: 0px;
  margin: 0px auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  white-space: pre-wrap;
}

img {
  max-height: 60vh;
  max-width: 70vw;
}
iframe {
  border: none;
}
#qrcode {
  max-height: 70vh;
  max-width: 70vw;
  width: 500px;
  height: 500px;
  fill: #1a1e26;
  background-color: #dadee7;
}

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

</style>
