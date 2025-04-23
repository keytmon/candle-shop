


class Candle {

    constructor(id, name, image, brand, price, aroma, volume) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.brand = brand;
        this.price = price;
        this.aroma = aroma;
        this.volume = volume;
    }

    createGoods = (candles) => candles.map((item) => {
        const itemsContainer = document.querySelector('.goods');
        const itemCatalog = document.createElement('div');
        itemCatalog.classList.add('candle-card');
        itemCatalog.id = this.id;
        itemCatalog.innerHTML = `
        <div class="popular-goods__card-img card-img">
                    <a href="http://localhost:63342/candle-shop/catalog/candle-card/index.html"><p>
                        <img src="${this.image}" alt="candle">
                    </p></a>
                </div>
                <a href="http://localhost:63342/candle-shop/catalog/candle-card/index.html">
                    <p class="popular-goods__card-name-center small-text">${this.name}</p></a>
                <div class="popular-goods__card-bottom-info catalog-card-bottom-info">
                    <div class="popular-goods__price-and-weight">
                        <span class="popular-goods__card-price catalog-card-price">${this.price}</span>
                        <span class="popular-goods__candle-weight card-weight">${this.volume}</span>
                    </div>
                    <div class="popular-goods__card-buttons">
                        <button class="popular-goods__button-like catalog-like-button">
                            <img class="popular-goods__icon-like catalog-icon" src="../images/like.png" alt="heart">
                        </button>
                        <button class="popular-goods__button-basket catalog-basket-button">
                            <img class="popular-goods__icon-basket catalog-icon" src="../images/basket.png" alt="basket">
                        </button>
                    </div>
        `

        itemsContainer.appendChild(itemCatalog);
        return itemCatalog;
        // console.log(itemCatalog);
    });

}


let candles = [];

for (let i = 0; i <= 8; i++) {
    candles[i] = new Candle(
        goods[i].id,
        goods[i].name,
        goods[i].image,
        goods[i].brand,
        goods[i].price,
        goods[i].aroma,
        goods[i].volume,
    )

    candles[i].createGoods(candles)
    console.log(candles[i])
}



