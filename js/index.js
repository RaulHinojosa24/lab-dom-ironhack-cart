// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  let globalSubtotal = 0;

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => globalSubtotal += updateSubtotal(product));

  // ITERATION 3
  document.querySelector('#total-value span').textContent = globalSubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target.parentNode.parentNode;
  target.remove();
}

// ITERATION 5

function createProduct() {
  const createInputs = document.querySelector('.create-product');
  const productName = createInputs.querySelector('#create-name');
  const productPrice = createInputs.querySelector('#create-price');

  const productHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName.value.trim()}</span>
      </td>
      <td class="price">$<span>${productPrice.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;

  let template = document.createElement('template');

  template.innerHTML = productHTML.trim();

  template.content.firstChild.querySelector('.btn-remove').addEventListener('click', removeProduct);

  document.querySelector('#cart tbody').appendChild(template.content.firstChild);

  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(btn => btn.addEventListener('click', removeProduct))

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
