const words = require("./data.json");

const getAllQuranWords = () => {
    return words;
}

const getWordsByPage = (page) => {
    return words[page-1];
}

module.exports = {
    getAllQuranWords,
    getWordsByPage
};
