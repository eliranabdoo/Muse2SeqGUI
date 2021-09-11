import { createStore } from "vuex";

const store = createStore({
  state: {
    modelsIds: ["1", "2"],
    models: {
      "1": {
        name: "A",
        form: {
          input: String,
          genre: String,
          level: Number,
        },
      },
      "2": {
        name: "B",
        form: {
          input: String,
          genre: String,
          level: Number,
        },
      },
    },
  },
  getters: {
    getModelName(state) {
      return (modelId) => {
        if (state.modelsIds.includes(modelId)) {
          return state.models[modelId].name;
        }
        return null;
      };
    }
  },
});
export default store;
