// Get input elements
const diameterInput = document.getElementById('diameter');
const priceInput = document.getElementById('price');
const sqInPerDollarOutput = document.getElementById('sqInPerDollar');

// Add event listeners for input changes
diameterInput.addEventListener('input', updateSqInPerDollar);
priceInput.addEventListener('input', updateSqInPerDollar);

function updateSqInPerDollar() {
  // Get input values
  const diameter = parseFloat(diameterInput.value);
  const price = parseFloat(priceInput.value);

  // Calculate square inches per dollar
  let sqInPerDollar = 0;
  if (diameter > 0 && price > 0) {
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    sqInPerDollar = area / price;
  }

  // Update square inches per dollar output
  sqInPerDollarOutput.textContent = sqInPerDollar.toFixed(2);
}

function addPizza() {
  // Get input values
  const diameter = parseFloat(diameterInput.value);
  const price = parseFloat(priceInput.value);

  // Create a new table row with input values and square inches per dollar
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${diameter}</td>
    <td>${price}</td>
    <td id="sqInPerDollar">${sqInPerDollarOutput.textContent}</td>
    <td><i class="material-icons delete-icon" onclick="deletePizza(this)">delete</i></td>
  `;

  // Append the row to the table body
  document.getElementById('pizza-list').appendChild(row);

  // Reset input values
  diameterInput.value = '';
  priceInput.value = '';
  sqInPerDollarOutput.textContent = '0';
}

function deletePizza(icon) {
  // Delete the row from the table
  icon.closest('tr').remove();
}
