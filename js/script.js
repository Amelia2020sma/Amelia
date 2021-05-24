let configuration = {
    totalPrice: 0,
    products: {
        product1: { price: 60, isSelected: false },
        product2: { price: 80, isSelected: false },
        product3: { price: 50, isSelected: false },
        product4: { price: 30, isSelected: false },
        product5: { price: 10, isSelected: false },
        product6: { price: 70, isSelected: false },
        product7: { price: 40, isSelected: false },
        product8: { price: 20, isSelected: false },
    },
};

const updateTotal = () => {
    document.getElementById("totalPrice").innerHTML = configuration.totalPrice;
};

const init = () => {
    updateTotal();
    for(const property in configuration.products) {
        document.getElementById(`${property}Price`).innerHTML = configuration.products[property].price;
    }
};

const onProductClick = (product) => {
    const price = configuration.products[product].price;
    const isSelected = configuration.products[product].isSelected;

    const svgBasketDOM = document.getElementById('basket-img');

    isSelected
        ? svgBasketDOM.getElementById(`${product}Layer`).style.display = 'none'
        : svgBasketDOM.getElementById(`${product}Layer`).style.display = 'inline';

    configuration.totalPrice = isSelected
      ? configuration.totalPrice - price
      : configuration.totalPrice + price;

    configuration.products[product].isSelected = !isSelected;

    updateTotal();
};

// const getPrivatBankUrl = () => {
//     const totalPrise = configuration.totalPrice;
//     const cardNumber = '4149499122650920';
//     return `https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%22${cardNumber}%22%2C%22amt%22%3A%22${totalPrise}%22%2C%22ccy%22%3A%22UAH%22%7D`;
// };

const getPrivatBankUrl = () => {
    const totalPrise = 100;
    const cardNumber = '4149499122650920';
    return `https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%22${cardNumber}%22%2C%22amt%22%3A%22${totalPrise}%22%2C%22ccy%22%3A%22UAH%22%7D`;
};

const onDonateClick = () => {
    const url = getPrivatBankUrl();
    window.location.href = url;
};

init();
