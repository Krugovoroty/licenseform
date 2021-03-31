const recalcPriceFn = () => {
  const priceEl = document.querySelector('div.license-item.checked span.price');
  const price = parseInt(priceEl.textContent);
  const numberOfLic = parseInt(document.querySelector('select.licenses').value);
  const finalPrice = price * numberOfLic;
  document.querySelector('.total').innerHTML = String(finalPrice);
  };
const init = () => {
  document.querySelectorAll('input[name="license"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      document.querySelector('div.license-item.checked').classList.remove('checked');
      event.target.parentNode.parentNode.classList.add('checked');
      recalcPriceFn();
      selectedLic();
    });
  });
  document.querySelector('.licenses').addEventListener('change', recalcPriceFn);
};

const selectedLic = () => {
  const currentSelectedLic = document.querySelector('div.license-item.checked span.name-lic');
  document.querySelector('.current-license').innerHTML = currentSelectedLic.textContent;
}


document.addEventListener("DOMContentLoaded", () => {
  init();
  recalcPriceFn();
  selectedLic();
});