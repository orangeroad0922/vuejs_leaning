Vue.component("fruits-item-name", {
  props: {
    fruitsItem: {
      type: Object,
      required: true,
    },
  },
  template: "<li>{{ fruitsItem.name }}</li>",
});

var vm = new Vue({
  el: "#fruits-component",
  data: {
    fruitsItems: [{ name: "ナシ" }, { name: "イチゴ" }],
  },
});
