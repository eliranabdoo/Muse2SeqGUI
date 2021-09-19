import { createStore } from "vuex";
import * as yup from "yup";

let formFormat = yup.array().of(
  yup.object().shape({
    type: yup
      .string()
      .oneOf([
        "text",
        "number",
        "email",
        "password",
        "search",
        "url",
        "tel",
        "date",
        "time",
        "range",
        "color",
      ])
      .required(),
    validation: yup.array().of(yup.array()),
  })
);
let validateFormScheme = (formScheme) => {
  return formFormat.validateSync(Object.values(formScheme)) != null;
};

const store = createStore({
  state: {
    modelsIds: ["1", "2"],
    models: {
      "1": {
        name: "First",
        formScheme: {
          input: {
            type: "text",
            validation: [["yup.string"], ["yup.required"]],
          },
          genre: {
            type: "text",
            validation: [["yup.string"], ["yup.required"]],
          },
          level: {
            type: "number",
            validation: [["yup.number"], ["yup.required"]],
          },
        },
      },
      "2": {
        name: "Second",
        formScheme: {
          input: {
            type: "text",
            validation: [["yup.string"], ["yup.required"]],
          },
          level: { type: "number", validation: [["yup.number"]] },
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
          var formScheme = state.models[modelId].formScheme;
          if (validateFormScheme(formScheme)) {
            return formScheme;
          }
        }
        return null;
      };
    },
  },
});
export default store;
