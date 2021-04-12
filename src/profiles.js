const createCard = require('./createCard');

// take in team array and loop through each member to make a profile card

const createAllCards = teamArr => {
    const cardArr = [];
    for(let i=0; i < teamArr.length; i++) {
        const currentEmployee = teamArr[i];
        const cardHTML = createCard(currentEmployee);
        cardArr.push(cardHTML)
    }
    return `
        ${cardArr.join('')}
    `
}

module.exports = createAllCards;