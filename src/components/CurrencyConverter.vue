<template>
  <div>
    <h1 @click="fetchCurrencies">Currency Converter</h1>
    <form>
      <label for="from-currency">From</label>
      <select name="" id="from-currency">
        <option
          v-for="(value, key, index) in allCurrencies"
          :key="index"
          :value="key"
        >
          {{ `${value} (${key})` }}
        </option>
      </select>
      <label for="to-currency">To</label>
      <select name="" id="to-currency">
        <option
          v-for="(value, key, index) in allCurrencies"
          :key="index"
          :value="key"
        >
          {{ `${value} (${key})` }}
        </option>
      </select>
      <input type="number" min="0" name="" id="" placeholder="Amount..." />
      <input type="submit" value="Convert" />
    </form>
    <div class="result">
      <p>Result: your result</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CurrencyConverter",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchCurrencies"]),
  },
  computed: {
    ...mapGetters(["allCurrencies"]),
  },
  created() {
    // this.fetchCurrencies();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: darkcyan;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 20px;
}
select,
input {
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
  background: #d3d3d33d;
  border: none;
  color: #000;
  font-size: 18px;
  border-radius: 10px;
}
select:focus,
input:focus {
  outline: none;
}
input[type="submit"] {
  cursor: pointer;
  background: lightseagreen;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
}
</style>