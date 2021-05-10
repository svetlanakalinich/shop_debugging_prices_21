const cartCounterLabel = document.querySelector('#cart-counter');
const buttonsContainer = document.querySelector('#content-container');

let cartCounter = 0;
let priceCounter = 0;

let btnClickHandler = (e) => {
  const target = e.target;
  let restoreHtML;



  if (target && target.matches('.item-actions__cart')) {
    cartCounterLabel.innerHTML = `${++cartCounter}`;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target
      .parentElement
      .previousElementSibling
      .innerHTML
      .replace(/\$(\d+)\s\D+(\d+).*$/, '$1.$2');

    priceCounter = Math.round((priceCounter + mockData) * 100) / 100;

    restoreHtML = target.innerHTML;
    target.innerHTML = `Added ${priceCounter.toFixed(2)}`;
    target.disabled = true;
    buttonsContainer.removeEventListener('click', btnClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHtML;
      target.disabled = false;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 2000);
  }
};




buttonsContainer.addEventListener('click', btnClickHandler);