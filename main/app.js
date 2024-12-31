
document.addEventListener("DOMContentLoaded", function (){

    const favorites = document.querySelector(".favorites");
    const favoritesButton = document.querySelector(".header__like-button");
    const favoritesEmptySpace = document.querySelector(".favorites__empty-space")
    const favoritesContainer = document.createElement('div');
    const catalogButton = document.querySelector(".button-catalog")


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
                <img class="favorites__item-image" src="/images/candle-1.png" alt="candle">
                <div class="favorites__item-text">
                    <p class="favorites__candle-name">Ароматическая свеча "Blackberry & Pine"</p>
                    <p class="favorites__candle-price">1200 руб.</p>
                </div>
                <button class="favorites__basket-button">
                    <img class="favorites__basket-button-image" src="/images/favorites-basket.png" alt="basket">
                </button>
                <button class="favorites__cancel-item-button">
                    <img src="/images/favorites-close.png" alt="cancel">
                </button>
            </div>
        </div>
            `
        favoritesContainer.classList.add('favorites__container');
        favorites.appendChild(favoritesContainer);

        const favoritesClosedButton = favorites.querySelector('.favorites__closed-button');

        favoritesClosedButton.addEventListener("click", () => {
            favoritesContainer.classList.toggle('no-active')
        })
    }


    favoritesButton.addEventListener("click", () => {
        favorites.classList.remove('no-active')
        favoritesContainer.classList.remove('no-active')
        createFavoritesList();
    })

    favoritesEmptySpace.addEventListener("click", () => {
        favoritesContainer.classList.add('no-active');
    })
})