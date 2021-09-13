<script>
export default {
  methods: {
    submit: function() {
      alert("Submitted" + this.$store.getters.getModelName(this.id));
    },
  },
  props: ['id'],
  computed: {
    name() {
      return this.$store.getters.getModelName(this.id);
    },
    formScheme(){
      return this.$store.getters.getModelFormScheme(this.id);
    }
  }
};
</script>

<template>
  <div>
    <h2> {{ this.name }} </h2>
    <form>
  <div class="form-group" v-for="(v, field) in formScheme" :key="field">
    <label for="field">{{ field }}</label>
    <input class="form-control" :id="field" :placeholder="'Enter ' + field">
  </div>
  <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>

</template>
