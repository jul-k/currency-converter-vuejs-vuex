import axios from "axios";

const apiKey = "e689d159ede0cd91483193fe54c095aa67accbbd";
const currencyListUrl = "https://api.getgeoapi.com/v2/currency/list";
const currencyConversionUrl = "https://api.getgeoapi.com/v2/currency/convert";

const state = {
    currencies: {},
    result: "",
    fromCurrency: "",
    toCurrency: "",
    amount: 0,
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
        console.log(response.data.currencies);

        const currencies = response.data.currencies;

        let orderedCurrencies = Object.keys(currencies).sort().reduce(
            (obj, key) => {
                obj[key] = currencies[key];
                return obj;
            },
            {}
            );

        console.log(Object.keys(orderedCurrencies)[0]);

        commit("setCurrencies", orderedCurrencies);
        commit("setFromCurrency", Object.keys(orderedCurrencies)[0]);
        commit("setToCurrency", Object.keys(orderedCurrencies)[0]);
    },
    updateFromCurrency() {},
    updateToCurrency() {},
    async convertCurrency({ commit }, fromCurrency, toCurrency, amount ) {
        const response = await axios.get(`${currencyConversionUrl}?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}&format=json`);
        console.log(response.data.rate_for_amount);
        console.log(response.data);

        commit("setResult", response.data.rate_for_amount);
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