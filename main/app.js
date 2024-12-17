
document.addEventListener("DOMContentLoaded", function (){



    const favorites = document.querySelector(".favorites");
    const question = document.querySelector('.questions__item')
    const answer = document.querySelector('.questions__answer')
    const favoritesButton = document.querySelector(".header__like-button");
    const favoritesEmptySpace = document.querySelector(".favorites__empty-space")
    const favoritesContainer = document.createElement('div');


    question.addEventListener("click", () => {
      answer.classList.toggle('active')
      question.classList.toggle('active')
    })



    const createFavoritesList = () => {
        favoritesContainer.innerHTML = `
        <div class="favorites__head">
            <p class="favorites__title small-text">Избранное</p>
            <button class="favorites__closed-button">
                <img class="favorites__closed" src="/images/close.png" alt="close">
            </button>
        </div>
        <div class="favorites__goods">
            <div class="favorites__item">
                <img src="/images/candle-1.png" alt="candle">
                <div class="favorites__item-text">
                    <p class="favorites__candle-name">Ароматическая свеча "Blackberry & Pine"</p>
                    <p class="favorites__candle-collection">MIZUWORLD</p>
                </div>
                <p class="favorites__candle-price">1200 руб.</p>
                <button class="favorites__cancel-button">
                    <img src="/images/cancel.png" alt="cancel">
                </button>
            </div>
        </div>
            `
        favoritesContainer.classList.add('favorites__container');
        favorites.appendChild(favoritesContainer);

        // if(favorites.classList.contains('no-active')) {
        //     favoritesContainer.innerHTML = ``
        // }
    }


    const favoritesClosedButton = favorites.querySelector('.favorites__closed-button');



    favoritesButton.addEventListener("click", () => {
        favorites.classList.remove('no-active')
        favoritesContainer.classList.remove('no-active')
        createFavoritesList();
    })

    favoritesEmptySpace.addEventListener("click", () => {

     favoritesContainer.classList.add('no-active');
     // favoritesContainer.innerHTML = ``
        // favorites.classList.add('no-active');
    })
    console.log('loh')
    // favoritesClosedButton.addEventListener("click", () => {
    //
    //     favorites.classList.add('no-active')
    // })



})