var vm = new Vue({
  el: "#app",
  data: function () {
    return {
      count: 0,
      timerId: null,
    };
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
      }, 0);
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.1);
    },
    canBuy: function () {
      return this.totalPrice >= 1000;
    },
  },
  created: function () {
    console.log("created");
    var that = this;
    console.log(this.count);
    console.log(this.$el);
    this.timerId = setInterval(function () {
      that.count += 1;
    }, 1000);
  },
  mounted: function () {
    console.log("mounted");
    console.log(this.$el);
  },
  beforeDestroy: function () {
    console.log("beforeDestroy");
    clearInterval(this.timerId);
  },
});

window.vm = vm;
