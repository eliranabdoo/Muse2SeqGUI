<script>
export default {
  computed: {
    models() {
      return this.$store.state.modelsIds;
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <p>NavBar</p>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Models</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="modelId in models" :key="modelId">
          <a class="nav-link"
            ><router-link :to="{ name: 'model', params: { id: modelId } }">
              {{ this.$store.getters.getModelName(modelId) }}
            </router-link></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
