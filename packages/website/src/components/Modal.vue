<template>
  <div class="modal">
    <div class='modal-content'>
      <h1 v-if="type === 'HEADER 1'">{{ content }}</h1>
      <h2 v-if="type === 'HEADER 2'">{{ content }}</h2>
      <h3 v-if="type === 'HEADER 3'">{{ content }}</h3>
      <h4 v-if="type === 'HEADER 4'">{{ content }}</h4>
      <h5 v-if="type === 'HEADER 5'">{{ content }}</h5>
      <h6 v-if="type === 'HEADER 6'">{{ content }}</h6>

      <div v-if="type === 'INFO'" class='modal-content-info'>
        <p v-for="(p, index) in content" :key="index">{{ p }}</p>
      </div>

      <img v-if="type === 'IMAGE'" v-bind:src="content"/>
      <iframe v-if="type === 'VIDEO'" width="800" height="600" v-bind:src="content"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [ 'type', 'content' ]
}
</script>

<style scoped>
.modal {
  z-index: 20;
  position: fixed;
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

.modal-content-info {
  width: 70%;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}

img {
  max-height: 70vh;
  max-width: 70vw;
}
iframe {
  border: none;
}
</style>
