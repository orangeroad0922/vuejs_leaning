var items = [
  {
    name: "鉛筆",
    price: 300,
    quantity: 0,
  },
  {
    name: "ノート",
    price: 400,
    quantity: 0,
  },
  {
    name: "消しゴム",
    price: 500,
    quantity: 0,
  },
];

var vm = new Vue({
  el: "#app",
  data: {
    items: items,
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return "0";
      }
      return value.toLocaleString();
    },
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
    canbuy: function () {
      return this.totalPrice >= 1000;
    },
    errMsgStyle: function () {
      return {
        border: this.canbuy ? "" : "1px solid red",
        color: this.canbuy ? "" : "red",
      };
    },
  },
});

window.vm = vm;
