<script>
export default {
  computed: {
    models() {
      return this.$store.state.modelsIds;
    },
  },
};
</script>

<template>
  <p>NavBar</p>
  <ul>
    <router-link
      v-for="modelId in models"
      :key="modelId"
      :to="{ name: 'model', params: { id: modelId }}"
    >{{modelId}}</router-link>
  </ul>
</template>
