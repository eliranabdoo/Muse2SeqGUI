<script>
export default {
  methods: {
    submit: function() {
      alert("Submitted" + this.$store.getters.getModelName(this.id));
    },
  },
  props: ['id']
};
</script>

<template>
  <div>
    <a> {{ this.name }} </a>
    <form></form>
    <button @click="submit">Submit</button>
  </div>
</template>
