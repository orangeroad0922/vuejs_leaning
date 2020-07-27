Vue.component("fruits-list", {
  template: `
    <div>
      <fruits-list-title></fruits-list-title>
      <fruits-list-description></fruits-list-description>
      <fruits-list-table></fruits-list-table>
    </div>
    `,
});

Vue.component("fruits-list-title", {
  template: "<h1>フルーツ一覧</h1>",
});

Vue.component("fruits-list-description", {
  template:
    "<p>季節の代表的なフルーツの一覧です。当該コンポーネントのdataより:{{ fruits }}</p>",
  data: function () {
    return {
      fruits: "なし",
    };
  },
});

Vue.component("fruits-list-table", {
  template: `
    <table>
      <tr>
        <th>季節</th>
        <th>フルーツ</th>
      </tr>
      <tr>
        <td>春</td>
        <td>いちご</td>
      </tr>
      <tr>
        <td>夏</td>
        <td>すいか</td>
      </tr>
      <tr>
        <td>秋</td>
        <td>ぶどう</td>
      </tr>
      <tr>
        <td>冬</td>
        <td>みかん</td>
      </tr>
    </table>
  `,
});

Vue.component("input-date-with-today", {
  render: function (createElement) {
    return createElement("input", {
      attrs: {
        type: "date",
        value: new Date().toISOString().substring(0, 10),
      },
    });
  },
});

var vm = new Vue({
  el: "#fruits-list",
  data: {
    fruits: "りんご",
  },
});

window.vm = vm;
