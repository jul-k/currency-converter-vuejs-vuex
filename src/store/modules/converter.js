import axios from "axios";

const apiKey = "e689d159ede0cd91483193fe54c095aa67accbbd";
const currencyListUrl = "https://api.getgeoapi.com/v2/currency/list";
const currencyConversionUrl = "https://api.getgeoapi.com/v2/currency/convert";

const state = {
    currencies: {},
    result: "",
    fromCurrency: "",
    toCurrency: "",
    amount: "",
};

const getters = {
    allCurrencies: (state) => state.currencies,
    result: (state) => state.result,
    fromCurrency: (state) => state.fromCurrency,
    toCurrency: (state) => state.toCurrency,
    amount: (state) => state.amount,
};

const actions = {
    async fetchCurrencies({ commit }) {
        const response = await axios.get(`${currencyListUrl}?api_key=${apiKey}&format=json`);

        const currencies = response.data.currencies;

        let orderedCurrencies = Object.keys(currencies).sort().reduce(
            (obj, key) => {
                obj[key] = currencies[key];
                return obj;
            },
            {}
            );

        commit("setCurrencies", orderedCurrencies);
        commit("setFromCurrency", Object.keys(orderedCurrencies)[0]);
        commit("setToCurrency", Object.keys(orderedCurrencies)[0]);
    },
    async convertCurrency({ commit, state }) {
        const response = await axios.get(`${currencyConversionUrl}?api_key=${apiKey}&from=${state.fromCurrency}&to=${state.toCurrency}&amount=${state.amount}&format=json`);

        commit("setResult", parseFloat(response.data.rates[state.toCurrency].rate_for_amount).toFixed(2));
    },
};

const mutations = {
    setCurrencies: (state, currencies) => (state.currencies = currencies),
    setResult: (state, result) => (state.result = result),
    setFromCurrency: (state, fromCurrency) => (state.fromCurrency = fromCurrency),
    setToCurrency: (state, toCurrency) => (state.toCurrency = toCurrency),
    setAmount: (state, amount) => (state.amount = amount),
};

export default {
    state,
    getters,
    actions,
    mutations
};