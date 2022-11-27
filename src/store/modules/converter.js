import axios from "axios";

const apiKey = "e689d159ede0cd91483193fe54c095aa67accbbd";
const currencyListUrl = "https://api.getgeoapi.com/v2/currency/list";
// const currencyConversionUrl = "https://api.getgeoapi.com/v2/currency/convert";

const state = {
    currencies: {}
};

const getters = {
    allCurrencies: (state) => state.currencies
};

const actions = {
    async fetchCurrencies({ commit }) {
        const response = await axios.get(`${currencyListUrl}?api_key=${apiKey}&format=json`);
        console.log(response.data.currencies);

        commit("setCurrencies", response.data.currencies);
    },
};

const mutations = {
    setCurrencies: (state, currencies) => (state.currencies = currencies),
};

export default {
    state,
    getters,
    actions,
    mutations
};