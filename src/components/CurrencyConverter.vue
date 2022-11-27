<template>
  <div>
    <h1>Currency Converter</h1>
    <form>
      <label for="from-currency">From</label>
      <select name="" id="from-currency">
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
      </select>
      <label for="to-currency">To</label>
      <select name="" id="to-currency">
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
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
export default {
  name: "CurrencyConverter",
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
input[type="submit"] {
  cursor: pointer;
  background: lightseagreen;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
}
</style>