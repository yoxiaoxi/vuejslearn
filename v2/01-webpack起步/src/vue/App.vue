<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: 'vue'
    }
  },
  methods: {
    btnClick() {
      console.log('aaa');
    }
  }
}
</script>

<style scoped>
.title {
  color: deeppink;
}
</style>