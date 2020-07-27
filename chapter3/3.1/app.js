Vue.component("list-item", {
  template: "<li>foo {{ contents }}</li>",
  data: function () {
    return { contents: "bar" };
  },
});

var vm = new Vue({
  el: "#example",
});

window.vm = vm;
