<script>
import { transformAll } from "@demvsystems/yup-ast";
export default {
  methods: {
    submit: function() {
      const form = {};
      for(const key in this.$refs){
        form[key] = this.$refs[key].value;
      }
      alert(form);
      this.validateForm(form);
      alert(`Submitted to model: ${this.$store.getters.getModelName(this.id)}`);
    },
    validateForm: function(form) {
      alert("Validating Form");
      for (const key in form) {
        if (
          !transformAll(this.formScheme[key]["validation"]).isValidSync(
            form[key]
          )
        ) {
          throw new TypeError(this.formScheme[key]["error"]);
        }
      }
    },
  },
  props: ["id"],
  computed: {
    name() {
      return this.$store.getters.getModelName(this.id);
    },
    formScheme() {
      return this.$store.getters.getModelFormScheme(this.id);
    },
  }
};
</script>

<template>
  <div>
    <h2>{{ this.name }}</h2>
    <form>
      <div class="form-group" v-for="(v, field) in formScheme" :key="field">
        <label for="field">{{ field }}</label>
        <input
          class="form-control"
          :id="field"
          :placeholder="'Enter ' + field"
          :type="v.type"
          :ref="field"
        />
      </div>
      <button @click="submit" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>
