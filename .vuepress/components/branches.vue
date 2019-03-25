<template>
  <div id="branches">
    <div class="search-box">
      <input class="branch-input" type="text">
      <table class="branch-table">
        <thead>
          <tr>
            <th>Setor</th>
            <th>Número</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Setor X</td>
            <td>1010</td>
            <td>Fulano de Tal</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Branches',
  data () {
    return {}
  },
  created () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log("oi")
    }
  }
}
</script>

<style>
table.branch-table {
  width: 100%;
  display: inline-table;
  padding: 0.2rem;
}
table th {}
</style>
