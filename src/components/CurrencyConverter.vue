<template>
  <div>
    <h1>Currency Converter</h1>
    <form @submit="convert">
      <label for="from-currency">From:</label>
      <select
        @change="updateFromCurrency"
        :value="fromCurrency"
        id="from-currency"
      >
        <option
          v-for="(value, key, index) in allCurrencies"
          :key="index"
          :value="key"
        >
          {{ `${key} - ${value}` }}
        </option>
      </select>
      <label for="to-currency">To:</label>
      <select @change="updateToCurrency" :value="toCurrency" id="to-currency">
        <option
          v-for="(value, key, index) in allCurrencies"
          :key="index"
          :value="key"
        >
          {{ `${key} - ${value}` }}
        </option>
      </select>
      <input
        :value="amount"
        @input="updateAmount"
        type="number"
        min="0"
        placeholder="Amount..."
      />
      <input type="submit" value="Convert" />
    </form>
    <div class="result">
      <p>
        {{ result }} <span v-if="result">{{ toCurrency }}</span>
      </p>
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
    ...mapActions(["fetchCurrencies", "convertCurrency"]),
    convert(e) {
      e.preventDefault();
      this.convertCurrency();
    },
    updateAmount(e) {
      this.$store.commit("setAmount", e.target.value);
    },
    updateFromCurrency(e) {
      this.$store.commit("setFromCurrency", e.target.value);
    },
    updateToCurrency(e) {
      this.$store.commit("setToCurrency", e.target.value);
    },
  },
  computed: {
    ...mapGetters([
      "allCurrencies",
      "result",
      "fromCurrency",
      "toCurrency",
      "amount",
    ]),
  },
  created() {
    this.fetchCurrencies();
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
.result p {
  font-size: 25px;
  text-align: center;
  overflow: scroll;
}
</style>