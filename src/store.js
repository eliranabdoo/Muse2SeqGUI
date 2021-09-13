import { createStore } from "vuex";

const store = createStore({
  state: {
    modelsIds: ["1", "2"],
    models: {
      "1": {
        name: "First",
        formScheme: {
          "input": String,
          "genre": String,
          "level": Number,
        },
      },
      "2": {
        name: "Second",
        formScheme: {
          "input": String,
          "genre": String,
          "level": Number,
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
    },
    getModelFormScheme(state) {
      return (modelId) => {
        if (state.modelsIds.includes(modelId)) {
          return state.models[modelId].formScheme;
        }
        return null;
      };
    }
  },
});
export default store;
