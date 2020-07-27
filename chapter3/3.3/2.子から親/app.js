var counterButton = Vue.extend({
  template:
    '<span>{{ counter }}個<button v-on:click="addToCart">追加</button></span>',
  data: function () {
    return {
      counter: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.counter += 1;
      this.$emit("increment"); // incrementという名前のトリガ(親のv-onで監視)
    },
  },
});

var vm = new Vue({
  el: "#fruits-counter",
  components: {
    "counter-button": counterButton,
  },
  data: {
    total: 0,
    fruits: [{ name: "ナシ" }, { name: "イチゴ" }],
  },
  methods: {
    incrementCartStatus: function () {
      this.total += 1;
    },
  },
});
