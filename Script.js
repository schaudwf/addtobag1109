const unitRadios = document.querySelectorAll('input[name="unit"]');

unitRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedValue = parseInt(radio.value);

 
    document.getElementById('selectors1').style.display = 'none';
    document.getElementById('selectors2').style.display = 'none';
    document.getElementById('selectors3').style.display = 'none';

   
    document.getElementById('selectors1').innerHTML = '';
    document.getElementById('selectors2').innerHTML = '';
    document.getElementById('selectors3').innerHTML = '';

   
    if (selectedValue === 1) {
      updateSelectors(1, 'selectors1');
      document.getElementById('selectors1').style.display = 'block';
      updatePrice(10);
    } else if (selectedValue === 2) {
      updateSelectors(2, 'selectors2');
      document.getElementById('selectors2').style.display = 'block';
      updatePrice(18);
    } else if (selectedValue === 3) {
      updateSelectors(3, 'selectors3');
      document.getElementById('selectors3').style.display = 'block';
      updatePrice(24);
    }
  });
});

function updateSelectors(unitCount, selectorId) {
  const container = document.getElementById(selectorId);

  for (let i = 1; i <= unitCount; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'selector-item';

    const sizeSelect = document.createElement('select');
    const colorSelect = document.createElement('select');

    sizeSelect.innerHTML = `
      <option value="">Size</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    `;

    colorSelect.innerHTML = `
      <option value="">Colour</option>
      <option value="Black">Black</option>
      <option value="Gray">Gray</option>
      <option value="Blue">Blue</option>
      <option value="White">White</option>
    `;

    wrapper.appendChild(sizeSelect);
    wrapper.appendChild(colorSelect);

    container.appendChild(wrapper);
  }
}

function updatePrice(price) {
  document.getElementById('totalPrice').innerText = `$${price.toFixed(2)} USD`;
}


unitRadios[0].checked = true;
unitRadios[0].dispatchEvent(new Event('change'));
