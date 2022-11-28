<template>
  <div id="app">
    <CurrencyConverter />
  </div>
</template>

<script>
import CurrencyConverter from "./components/CurrencyConverter";

export default {
  name: "App",
  components: {
    CurrencyConverter,
  },
};
</script>

<style>
@font-face {
  font-family: "Short Stack Regular";
  src: url("./assets/fonts/ShortStack-Regular.ttf");
  font-display: swap;
}
body {
  font-family: "Short Stack Regular", "Franklin Gothic Medium", "Arial Narrow",
    Arial, sans-serif;
  width: 600px;
  margin: auto;
  letter-spacing: 1px;
}
@media (max-width: 700px) {
  body {
    width: 500px;
  }
}
@media (max-width: 500px) {
  body {
    width: 95vw;
  }
}
</style>
