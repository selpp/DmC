<template>
  <!-- &nbsp; -->
  <div class="code">
    <pre v-highlightjs>
      <code v-bind:class="language">
        {{ code }}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Code',
  props: [ 'code', 'language' ]
}
</script>

<style scoped>
.code {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  margin: auto;
  width: 70%;
  padding: 25px;
}
code {
  padding: 15px;
  background-color:  #282b32;
  font-size: 20px;
}
</style>
