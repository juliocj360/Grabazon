var items = [
  {
    name: "Batboat Harbor Pursuit",
    shortName: "batboat",
    manufacturer: "Lego",
    quantity: 0,
    price: 29.99,
    description: "Accessories include capes for Batman and Robin; fold out the secret radar tower to track Deathstroke; evade the jetboat's flick torpedo missiles!",
    department: "toys",
    image: "http://www.gamerwithkids.com/wp-content/uploads/2016/02/LEGO-Super-Heroes-76034-the-Batboat-Harbor-Pursuit-Building-Kit-0-0.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/919WcsgitZL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81UVHTwEExL._SL1500_.jpg"
  },
  {
    name: "CITY Ferry",
    shortName: "ferry",
    manufacturer: "Lego",
    quantity: 0,
    price: 19.99,
    description: "Features a Ferry with gates that can be raised and lowered and a space above the deck for the captain to pilot the boat",
    department: "toys",
    image: "https://farm6.staticflickr.com/5719/23600766096_8dfeab0e1c_c.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/91fAH9-tzxL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81UkjOz%2B6kL._SL1500_.jpg"
  },
  {
    name: "DUPLO Disney Sofia the First Magical Carriage Building Kit",
    manufacturer: "Lego",
    shortName: "sofia",
    quantity: 0,
    price: 29.99,
    description: "Features a buildable carriage with turning wheels, and a revolving tree",
    department: "toys",
    image: "https://images-na.ssl-images-amazon.com/images/I/81kj%2BDEmIqL._SL1500_.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/91fVTI3UVqL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81-bpXdjdPL._SL1500_.jpg"
  },
  {
    name: "Connect 4 Game",
    shortName: "connect4",
    manufacturer: "Hasbro",
    quantity: 0,
    price: 6.99,
    description: "Classic Connect 4 game is disc-dropping fun. When you get 4 discs in a row you win!",
    department: "toys",
    image: "http://trusca.imageg.net/graphics/product_images/pTRUCA1-16021344enh-z6.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/81r5NKXoxnL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81Vye%2BcEl%2BL._SL1500_.jpg"
  },
  {
    name: "Battleship Game",
    shortName: "battleship",
    manufacturer: "Hasbro",
    quantity: 0,
    price: 9.11,
    description: "Classic Battleship game lets you hold head-to-head naval battles. If you can locate your enemy's ships you can destroy all 5 for the win!",
    department: "toys",
    image: "http://www.ultrabattleship.com/gfx/cover.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/81iQDqzHaFL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81rXDfJMwlL._SL1500_.jpg"
  },
  {
    name: "Uno",
    shortName: "uno",
    manufacturer: "Mattel",
    quantity: 0,
    price: 4.79,
    description: "Four suits of 25 cards each, plus the eight Wild cards Earn points from other players when you go out first. Reach 500 points to win the game!",
    department: "toys",
    image: "http://frenchuno.com/wp-content/uploads/2015/02/uno-cards1.jpg",
    image2: "https://images-na.ssl-images-amazon.com/images/I/8103SR3MSWL._SL1500_.jpg",
    image3: "https://images-na.ssl-images-amazon.com/images/I/81TO6gd03fL._SL1500_.jpg"
  }
];

var aSearch = document.getElementById('search');
var aResult = document.getElementById('result');
var lookUp = document.getElementById('look-up');
var aReview = document.getElementById('review-button');
var costBeforeTaxes = 0;
var fullCost = 0;
var totalCost = 0;
var bagQuantity = 0;
var shippingCost = 0;
var tax = 0;
var taxes = 0;

function eraseText() {
    document.getElementById("look-up").value = "";
}

function searchText() {
  clear(aResult);
  for (var i = 0; i < items.length; i++) {
    var itemText = items[i].name + items[i].manufacturer + items[i].price + items[i].description + items[i].department;
    if (itemText.toLowerCase().indexOf(lookUp.value.toLowerCase()) > -1) {
      showResult(i);
    }
  }
}

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function showResult(index) {
  var resultBox = document.createElement('div');
  resultBox.className = "resultBox";
  resultBox.setAttribute('id', items[index].shortName);
  aResult.appendChild(resultBox);

  var image = document.createElement('img');
  image.className = "picture";
  image.setAttribute('src', items[index].image);
  resultBox.appendChild(image);

  var name = document.createElement('h3');
  name.className = 'name';
  name.textContent = items[index].name;
  resultBox.appendChild(name);

  var price = document.createElement('h4');
  price.className = 'price';
  price.textContent = "$" + items[index].price;
  resultBox.appendChild(price);

  var manufacturer = document.createElement('h5');
  manufacturer.className = 'manufacturer';
  manufacturer.textContent = items[index].manufacturer;
  resultBox.appendChild(manufacturer);

  var description = document.createElement('p');
  description.className = 'desc';
  description.textContent = items[index].description;
  resultBox.appendChild(description);

  getDetails(index);
  }

function getDetails(index) {
  var aDetails = document.getElementById(items[index].shortName);
  aDetails.addEventListener('click', function () {
    itemDetail(index);
  }, true)
}

function itemDetail(index) {
  event.preventDefault();
  clear(aResult);

  var detailBox = document.createElement('div');
  detailBox.className = "detailBox";
  aResult.appendChild(detailBox);

  var runner = document.createElement('div');
  runner.className = "runner";
  detailBox.appendChild(runner);

  var grabForm = document.createElement('form');
  grabForm.setAttribute('id', 'toGrab');
  grabForm.setAttribute('name', items[index].shortName)
  runner.appendChild(grabForm);

  var quantity = document.createElement('input');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('max', 10);
  quantity.setAttribute('min', 1);
  quantity.setAttribute('id', 'qty');
  quantity.setAttribute('value', 1);
  grabForm.appendChild(quantity);

  var grabber = document.createElement('button');
  grabber.setAttribute('id', 'grabber');
  grabber.setAttribute('type', 'button');
  grabber.textContent = 'Grab Item!';
  grabForm.appendChild(grabber);

  var imagesBox = document.createElement('div');
  imagesBox.className = "imagesBox";
  detailBox.appendChild(imagesBox);

  var image = document.createElement('img');
  image.className = "mainPicture";
  image.setAttribute('src', items[index].image);
  imagesBox.appendChild(image);

  var image1 = document.createElement('img');
  image1.className = "picture1";
  image1.setAttribute('src', items[index].image);
  imagesBox.appendChild(image1);

  var image2 = document.createElement('img');
  image2.className = "picture2";
  image2.setAttribute('src', items[index].image2);
  imagesBox.appendChild(image2);

  var image3 = document.createElement('img');
  image3.className = "picture3";
  image3.setAttribute('src', items[index].image3);
  imagesBox.appendChild(image3);

  var name = document.createElement('h3');
  name.className = 'name';
  name.textContent = items[index].name;
  detailBox.appendChild(name);

  var price = document.createElement('h4');
  price.className = 'price';
  price.textContent = "$" + items[index].price;
  detailBox.appendChild(price);

  var manufacturer = document.createElement('h5');
  manufacturer.className = 'manufacturer';
  manufacturer.textContent = items[index].manufacturer;
  detailBox.appendChild(manufacturer);

  var description = document.createElement('p');
  description.className = 'desc';
  description.textContent = items[index].description;
  detailBox.appendChild(description);

  grabItems(index);
}

function grabItems(index) {
  var qtyGrabbed = document.getElementById('qty');
  var grabbed = document.getElementById('grabber');
  grabbed.addEventListener('click', function () {
    qtyAdder(index, qtyGrabbed.value);
  }, true)
  }

function qtyAdder(index, qty) {
  items[index].quantity += parseInt(qty, 10);
  bagQtyUpdater();
  bagCostUpdater();
}

function bagQtyUpdater() {
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    sum += items[i].quantity;
  }
  bagQuantity = sum;
  var bagQty = document.getElementById('qty-total');
  bagQty.textContent = "Total Items: " + bagQuantity;
}

function bagCostUpdater() {
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    var price = items[i].price;
    var quantity = items[i].quantity;
    sum += price * quantity;
  }
  var fixedSum = sum.toFixed(2);
  var fixedShipping = parseFloat(shippingCost);
  costBeforeTaxes = Number(fixedSum);
  tax = costBeforeTaxes * 0.09;
  taxes = tax.toFixed(2);
  fullCost = costBeforeTaxes + Number(tax.toFixed(2));
  totalCost = (Number(fullCost) + Number(fixedShipping)).toFixed(2);
  var bagCost = document.getElementById('cost-total');
  bagCost.textContent = "Total Cost: $" + totalCost;
}

function bagReview() {
  event.preventDefault();
  clear(aResult);

  var reviewBox = document.createElement('div');
  reviewBox.className = "reviewBox";
  aResult.appendChild(reviewBox);

  var runner = document.createElement('div');
  runner.className = "runner";
  runner.setAttribute('id', 'checkoutRunner');
  reviewBox.appendChild(runner);

  var checkoutButton = document.createElement('button');
  checkoutButton.setAttribute('id', 'checkoutButton');
  checkoutButton.setAttribute('type', 'button');
  checkoutButton.textContent = 'Proceed to Checkout';
  runner.appendChild(checkoutButton);

  var reviewHeader = document.createElement('div');
  reviewHeader.className = "reviewHeader";
  reviewBox.appendChild(reviewHeader);

  var innerRunner = document.createElement('div');
  innerRunner.className = 'innerRunner';
  innerRunner.setAttribute('id', 'headRunner');
  reviewHeader.appendChild(innerRunner);

  var itemQuantity = document.createElement('div');
  itemQuantity.className = 'itemQuantity';
  itemQuantity.textContent = "Quantity";
  itemQuantity.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "Item Cost";
  itemCost.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "Total";
  itemTotal.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemTotal);

  var reviewTitle = document.createElement('h3');
  reviewTitle.textContent = "Grab Bag Contents..."
  reviewHeader.appendChild(reviewTitle);

  var bagItemsBox = document.createElement('div');
  bagItemsBox.setAttribute('id', 'bagItemsBox');
  reviewBox.appendChild(bagItemsBox);

  var register = document.createElement('div');
  register.setAttribute('id', 'registerBox');
  reviewBox.appendChild(register);

  var subTotal = document.createElement('div');
  subTotal.className = 'subTotal';
  register.appendChild(subTotal);

  var subTotalText = document.createElement('div');
  subTotalText.className = 'subTotalText';
  subTotalText.setAttribute('id', 'runnerItem');
  subTotalText.textContent = "Subtotal: ";
  subTotal.appendChild(subTotalText);

  var subTotalAmount = document.createElement('div');
  subTotalAmount.className = 'subTotalAmount';
  subTotalAmount.setAttribute('id', 'runnerItem');
  subTotalAmount.textContent = "$" + costBeforeTaxes;
  subTotal.appendChild(subTotalAmount);

  var registerTax = document.createElement('div');
  registerTax.className = 'registerTax';
  register.appendChild(registerTax);

  var registerTaxText = document.createElement('div');
  registerTaxText.className = 'registerTaxText';
  registerTaxText.setAttribute('id', 'runnerItem');
  registerTaxText.textContent = "Taxes: ";
  registerTax.appendChild(registerTaxText);

  var registerTaxAmount = document.createElement('div');
  registerTaxAmount.className = 'registerTaxAmount';
  registerTaxAmount.setAttribute('id', 'runnerItem');
  registerTaxAmount.textContent = "$" + taxes;
  registerTax.appendChild(registerTaxAmount);

  var registerShipping = document.createElement('div');
  registerShipping.className = 'registerShipping';
  register.appendChild(registerShipping);

  var registerShippingText = document.createElement('div');
  registerShippingText.className = 'registerShippingText';
  registerShippingText.setAttribute('id', 'runnerItem');
  registerShippingText.textContent = "Shipping: ";
  registerShipping.appendChild(registerShippingText);

  var registerShippingAmount = document.createElement('div');
  registerShippingAmount.className = 'registerShippingAmount';
  registerShippingAmount.setAttribute('id', 'runnerItem');
  registerShippingAmount.textContent = "$" + shippingCost;
  registerShipping.appendChild(registerShippingAmount);

  var registerTotal = document.createElement('div');
  registerTotal.className = 'registerTotal';
  register.appendChild(registerTotal);

  var registerTotalText = document.createElement('div');
  registerTotalText.className = 'registerTotalText';
  registerTotalText.setAttribute('id', 'runnerItemTotal');
  registerTotalText.textContent = "Total: ";
  registerTotal.appendChild(registerTotalText);

  var registerTotalAmount = document.createElement('div');
  registerTotalAmount.className = 'registerTotalAmount';
  registerTotalAmount.setAttribute('id', 'runnerItemTotal');
  registerTotalAmount.textContent = "$" + totalCost;
  registerTotal.appendChild(registerTotalAmount);

  bagCheck();
  checkoutListener(checkoutButton);
}

function checkoutListener(checkoutButton) {
  checkoutButton.addEventListener('click', function() {
    checkOutLoader();
  })
}

function bagCheck() {
  if (bagQuantity < 1) {
    var bagBox = document.getElementById('bagItemsBox');
    bagBox.textContent = "Your bag is empty!";
    hideBagger();
    shippingCost = 0;
    bagCostUpdater();
  }
  else {
    bagRun();
  }
}

function bagRun() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].quantity > 0) {
    listItems(i);
    }
  }
}

function hideBagger() {
  var register = document.getElementById('registerBox');
  register.setAttribute('hidden', 'hidden');

  var checkoutRunner = document.getElementById('checkoutRunner');
  checkoutRunner.setAttribute('hidden', 'hidden');

  var headRunner = document.getElementById('headRunner');
  headRunner.setAttribute('hidden', 'hidden');
}

function listItems(index) {
  var bagBox = document.getElementById('bagItemsBox');

  var itemBox = document.createElement('div');
  itemBox.className = "reviewItemBox";
  bagBox.appendChild(itemBox);

  var image = document.createElement('img');
  image.className = "reviewPicture";
  image.setAttribute('src', items[index].image);
  itemBox.appendChild(image);

  var innerRunner = document.createElement('div');
  innerRunner.className = 'innerRunner';
  itemBox.appendChild(innerRunner);

  var itemQuantity = document.createElement('div');
  itemQuantity.className = 'itemQuantity';
  itemQuantity.textContent = items[index].quantity;
  itemQuantity.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "$" + items[index].price;
  itemCost.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "$" + (items[index].quantity * items[index].price).toFixed(2);
  itemTotal.setAttribute('id', 'runnerItem');
  innerRunner.appendChild(itemTotal);

  var incrementer = document.createElement('div');
  incrementer.className = 'incrementer';
  incrementer.setAttribute('id', 'incrementer');
  innerRunner.appendChild(incrementer);

  var incrementerUp = document.createElement('div');
  incrementerUp.className = 'incrementer';
  incrementerUp.textContent = "+";
  incrementerUp.setAttribute('id', 'incrementerUp');
  incrementer.appendChild(incrementerUp);

  var incrementerDown = document.createElement('div');
  incrementerDown.className = 'incrementer';
  incrementerDown.textContent = "-";
  incrementerDown.setAttribute('id', 'incrementerDown');
  incrementer.appendChild(incrementerDown);

  var name = document.createElement('h3');
  name.className = 'name';
  name.textContent = items[index].name;
  itemBox.appendChild(name);

  var maker = document.createElement('h4');
  maker.className = 'maker';
  maker.textContent = items[index].manufacturer;
  itemBox.appendChild(maker);

  var remover = document.createElement('div');
  remover.setAttribute('id', 'remover');
  remover.textContent = "Remove item from bag";
  itemBox.appendChild(remover);

  aRemover(index, remover);
  incrementUp(index, incrementerUp);
  incrementDown(index, incrementerDown);
}


function incrementUp(index, incrementerUp) {
  incrementerUp.addEventListener('click', function () {
    qtyAdder(index, 1);
    bagReview();
  });
}

function incrementDown(index, incrementerDown) {
  incrementerDown.addEventListener('click', function() {
    minusOne(index);
  });
}

function minusOne(index) {
  if (items[index].quantity > 0) {
    qtyAdder(index, -1);
    bagReview();
  }
}

function aRemover(index, remover) {
  remover.addEventListener('click', function () {
    itemRemover(index);
  });
}

function itemRemover(index) {
  items[index].quantity = 0;
  qtyAdder(index,0);
  bagReview();
}

function checkOutLoader() {
  event.preventDefault();
  clear(aResult);

  var checkoutBox = document.createElement('div');
  checkoutBox.className = "checkoutBox";
  aResult.appendChild(checkoutBox);

  var runner = document.createElement('div');
  runner.className = "runner";
  runner.setAttribute('id', 'checkoutRunner');
  checkoutBox.appendChild(runner);

  var formHolder = document.createElement('div');
  formHolder.className = "formHolder";
  checkoutBox.appendChild(formHolder);

  var shippingBox = document.createElement('div');
  shippingBox.className = "shippingBox";
  formHolder.appendChild(shippingBox);

  var shippingBoxTitle = document.createElement('div');
  shippingBoxTitle.className = 'boxTitle';
  shippingBoxTitle.textContent = "Shipping Information";
  shippingBox.appendChild(shippingBoxTitle);

  var shippingColumnBox = document.createElement('div');
  shippingColumnBox.className = 'columnBox';
  shippingBox.appendChild(shippingColumnBox);

  var shippingColumn1 = document.createElement('div');
  shippingColumn1.className = "shippingColumn1";
  shippingColumnBox.appendChild(shippingColumn1);

  var shipFirstName = document.createElement('input');
  shipFirstName.className = 'detailInput';
  shipFirstName.setAttribute('type', 'text');
  shipFirstName.setAttribute('placeholder', 'First Name');
  shipFirstName.setAttribute('id', 'firstName');
  shippingColumn1.appendChild(shipFirstName);

  var shipAddress = document.createElement('input');
  shipAddress.className = 'detailInput';
  shipAddress.setAttribute('type', 'text');
  shipAddress.setAttribute('placeholder', 'Address')
  shippingColumn1.appendChild(shipAddress);

  var shipCity = document.createElement('input');
  shipCity.className = 'detailInput';
  shipCity.setAttribute('type', 'text');
  shipCity.setAttribute('placeholder', 'City')
  shippingColumn1.appendChild(shipCity);

  var shippingColumn2 = document.createElement('div');
  shippingColumn2.className = "shippingColumn2";
  shippingColumnBox.appendChild(shippingColumn2);

  var shipLastName = document.createElement('input');
  shipLastName.className = 'detailInput';
  shipLastName.setAttribute('type', 'text');
  shipLastName.setAttribute('placeholder', 'Last Name')
  shippingColumn2.appendChild(shipLastName);

  var shipState = document.createElement('input');
  shipState.className = 'detailInput';
  shipState.setAttribute('type', 'text');
  shipState.setAttribute('placeholder', 'State')
  shippingColumn2.appendChild(shipState);

  var shipZip = document.createElement('input');
  shipZip.className = 'detailInput';
  shipZip.setAttribute('type', 'text');
  shipZip.setAttribute('placeholder', 'Zip Code')
  shippingColumn2.appendChild(shipZip);

  var paymentBox = document.createElement('div');
  paymentBox.className = "paymentBox";
  formHolder.appendChild(paymentBox);

  var paymentBoxTitle = document.createElement('div');
  paymentBoxTitle.className = 'boxTitle';
  paymentBoxTitle.textContent = "Payment Information";
  paymentBox.appendChild(paymentBoxTitle);

  var checkboxHolder = document.createElement('div');
  checkboxHolder.className = 'checkboxHolder';
  paymentBox.appendChild(checkboxHolder);

  var addressCheckbox = document.createElement('input');
  addressCheckbox.setAttribute('type', 'checkbox');
  addressCheckbox.setAttribute('id', 'addressCheckbox');
  checkboxHolder.appendChild(addressCheckbox);

  var checkboxText = document.createElement('div');
  checkboxText.className = 'checkboxText';
  checkboxText.textContent = "Billing address same as shipping address.";
  checkboxHolder.appendChild(checkboxText);

  var paymentAddressBox = document.createElement('div');
  paymentAddressBox.className = 'columnBox';
  paymentAddressBox.setAttribute('id', 'paymentAddressBox');
  paymentBox.appendChild(paymentAddressBox);

  var paymentColumn1 = document.createElement('div');
  paymentColumn1.className = "paymentColumn1";
  paymentAddressBox.appendChild(paymentColumn1);

  var payFirstName = document.createElement('input');
  payFirstName.className = 'detailInput';
  payFirstName.setAttribute('type', 'text');
  payFirstName.setAttribute('placeholder', 'First Name')
  paymentColumn1.appendChild(payFirstName);

  var payAddress = document.createElement('input');
  payAddress.className = 'detailInput';
  payAddress.setAttribute('type', 'text');
  payAddress.setAttribute('placeholder', 'Address')
  paymentColumn1.appendChild(payAddress);

  var payCity = document.createElement('input');
  payCity.className = 'detailInput';
  payCity.setAttribute('type', 'text');
  payCity.setAttribute('placeholder', 'City')
  paymentColumn1.appendChild(payCity);

  var paymentColumn2 = document.createElement('div');
  paymentColumn2.className = "paymentColumn2";
  paymentAddressBox.appendChild(paymentColumn2);

  var payLastName = document.createElement('input');
  payLastName.className = 'detailInput';
  payLastName.setAttribute('type', 'text');
  payLastName.setAttribute('placeholder', 'Last Name')
  paymentColumn2.appendChild(payLastName);

  var payState = document.createElement('input');
  payState.className = 'detailInput';
  payState.setAttribute('type', 'text');
  payState.setAttribute('placeholder', 'State')
  paymentColumn2.appendChild(payState);

  var payZip = document.createElement('input');
  payZip.className = 'detailInput';
  payZip.setAttribute('type', 'text');
  payZip.setAttribute('placeholder', 'Zip Code')
  paymentColumn2.appendChild(payZip);

  var cardDetailBox = document.createElement('div');
  cardDetailBox.className = 'cardDetailBox';
  paymentBox.appendChild(cardDetailBox);

  var cardColumn1 = document.createElement('div');
  cardColumn1.className = "cardColumn1";
  cardDetailBox.appendChild(cardColumn1);

  var cardType = document.createElement('input');
  cardType.className = 'detailInput';
  cardType.setAttribute('type', 'text');
  cardType.setAttribute('placeholder', 'Card Type')
  cardColumn1.appendChild(cardType);

  var cardNumber = document.createElement('input');
  cardNumber.className = 'detailInput';
//  cardNumber.setAttribute('type', 'hidden');
  cardNumber.setAttribute('placeholder', 'Card Number')
  cardColumn1.appendChild(cardNumber);

  var cardColumn2 = document.createElement('div');
  cardColumn2.className = "cardColumn2";
  cardDetailBox.appendChild(cardColumn2);

  var cardExpire = document.createElement('input');
  cardExpire.className = 'detailInput';
  cardExpire.setAttribute('type', 'text');
  cardExpire.setAttribute('placeholder', 'Expiration Date')
  cardColumn2.appendChild(cardExpire);

  var reviewDeliveryBox = document.createElement('div');
  reviewDeliveryBox.className = "reviewDeliveryBox";
  formHolder.appendChild(reviewDeliveryBox);

  var reviewDeliveryBoxTitle = document.createElement('div');
  reviewDeliveryBoxTitle.className = 'boxTitle';
  reviewDeliveryBoxTitle.textContent = "Review items and delivery information";
  reviewDeliveryBox.appendChild(reviewDeliveryBoxTitle);

  var reviewDeliveryColumnBox = document.createElement('div');
  reviewDeliveryColumnBox.className = 'columnBox';
  reviewDeliveryBox.appendChild(reviewDeliveryColumnBox);

  var reviewListBox = document.createElement('div');
  reviewListBox.className = 'reviewColumn1';
  reviewListBox.setAttribute('id', 'reviewListBox');
  reviewDeliveryColumnBox.appendChild(reviewListBox);

  var reviewShipping = document.createElement('div');
  reviewShipping.className = 'reviewColumn2';
  reviewDeliveryColumnBox.appendChild(reviewShipping);

  var deliveryText = document.createElement('div');
  deliveryText.className = 'deliveryText';
  deliveryText.textContent = "Choose delivery option";
  reviewShipping.appendChild(deliveryText);

  var deliveryOptions = document.createElement('form');
  deliveryOptions.setAttribute('id', 'deliveryOptions');
  reviewShipping.appendChild(deliveryOptions);

  var standardShipContainer = document.createElement('div');
  standardShipContainer.setAttribute('id', 'ShipContainer');
  deliveryOptions.appendChild(standardShipContainer);

  var standardShip = document.createElement('input');
  standardShip.setAttribute('type', 'radio');
  standardShip.setAttribute('name', "shipping");
  standardShip.setAttribute('id', 'radioButton');
  standardShip.setAttribute('value', 0);
  standardShip.setAttribute('checked', 'checked');
  standardShipContainer.appendChild(standardShip);

  var standardShipText = document.createElement('span');
  standardShipText.setAttribute('id', 'shipText');
  standardShipText.textContent = "Ground: $FREE!";
  standardShipContainer.appendChild(standardShipText);

  var twoDayShipContainer = document.createElement('div');
  twoDayShipContainer.setAttribute('id', 'ShipContainer');
  deliveryOptions.appendChild(twoDayShipContainer);

  var twoDayShip = document.createElement('input');
  twoDayShip.setAttribute('type', 'radio');
  twoDayShip.setAttribute('name', "shipping");
  twoDayShip.setAttribute('id', 'radioButton');
  twoDayShip.setAttribute('value', 9.99);
  twoDayShipContainer.appendChild(twoDayShip);

  var twoDayText = document.createElement('span');
  twoDayText.setAttribute('id', 'shipText');
  twoDayText.textContent = "Two Day Air: $9.99";
  twoDayShipContainer.appendChild(twoDayText);

  var nextDayShipContainer = document.createElement('div');
  nextDayShipContainer.setAttribute('id', 'ShipContainer');
  deliveryOptions.appendChild(nextDayShipContainer);

  var nextDayAir = document.createElement('input');
  nextDayAir.setAttribute('type', 'radio');
  nextDayAir.setAttribute('name', "shipping");
  nextDayAir.setAttribute('id', 'radioButton');
  nextDayAir.setAttribute('value', 19.99);
  nextDayShipContainer.appendChild(nextDayAir);

  var nextDayText = document.createElement('span');
  nextDayText.setAttribute('id', 'shipText');
  nextDayText.textContent = "Next Day Air: $19.99";
  nextDayShipContainer.appendChild(nextDayText);

  var submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submitButton');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = 'Submit Order';
  runner.appendChild(submitButton);

  var register = document.createElement('div');
  register.setAttribute('id', 'registerBox');
  runner.appendChild(register);

  checkboxer(addressCheckbox);
  registerLoader(register);
  shipper(deliveryOptions);
  miniListRun();
  submitter(submitButton);
}

function submitter(submitButton){
  submitButton.addEventListener('click', function() {
    shipRunner(0)
    debagger();
  })
}

function debagger() {
  for (var i = 0; i < items.length; i++) {
    items[i].quantity = 0;
    bagQtyUpdater();
    bagCostUpdater();
    submitPageLoader();
  }
}

function submitPageLoader() {
  clear(aResult);

  var outBox = document.createElement('div');
  outBox.className = "outBox";
  outBox.textContent = "Much Appreciated! Your order is on it's way.";
  aResult.appendChild(outBox);
}


function checkboxer(addressCheckbox) {
  addressCheckbox.addEventListener('change', function() {
    var paymentAddressBox = document.getElementById('paymentAddressBox');
    if (addressCheckbox.checked) {
      paymentAddressBox.setAttribute('hidden', 'hidden');
    }
    else {
      paymentAddressBox.removeAttribute('hidden');
    }
  });
}


function registerLoader(location) {
  clear(location);
  var subTotal = document.createElement('div');
  subTotal.className = 'subTotal';
  location.appendChild(subTotal);

  var subTotalText = document.createElement('div');
  subTotalText.className = 'subTotalText';
  subTotalText.setAttribute('id', 'runnerItem');
  subTotalText.textContent = "Subtotal: ";
  subTotal.appendChild(subTotalText);

  var subTotalAmount = document.createElement('div');
  subTotalAmount.className = 'subTotalAmount';
  subTotalAmount.setAttribute('id', 'runnerItem');
  subTotalAmount.textContent = "$" + costBeforeTaxes;
  subTotal.appendChild(subTotalAmount);

  var registerTax = document.createElement('div');
  registerTax.className = 'registerTax';
  location.appendChild(registerTax);

  var registerTaxText = document.createElement('div');
  registerTaxText.className = 'registerTaxText';
  registerTaxText.setAttribute('id', 'runnerItem');
  registerTaxText.textContent = "Taxes: ";
  registerTax.appendChild(registerTaxText);

  var registerTaxAmount = document.createElement('div');
  registerTaxAmount.className = 'registerTaxAmount';
  registerTaxAmount.setAttribute('id', 'runnerItem');
  registerTaxAmount.textContent = "$" + taxes;
  registerTax.appendChild(registerTaxAmount);

  var registerShipping = document.createElement('div');
  registerShipping.className = 'registerShipping';
  location.appendChild(registerShipping);

  var registerShippingText = document.createElement('div');
  registerShippingText.className = 'registerShippingText';
  registerShippingText.setAttribute('id', 'runnerItem');
  registerShippingText.textContent = "Shipping: ";
  registerShipping.appendChild(registerShippingText);

  var registerShippingAmount = document.createElement('div');
  registerShippingAmount.className = 'registerShippingAmount';
  registerShippingAmount.setAttribute('id', 'runnerItem');
  registerShippingAmount.textContent = "$" + shippingCost;
  registerShipping.appendChild(registerShippingAmount);

  var registerTotal = document.createElement('div');
  registerTotal.className = 'registerTotal';
  location.appendChild(registerTotal);

  var registerTotalText = document.createElement('div');
  registerTotalText.className = 'registerTotalText';
  registerTotalText.setAttribute('id', 'runnerItemTotal');
  registerTotalText.textContent = "Total: ";
  registerTotal.appendChild(registerTotalText);

  var registerTotalAmount = document.createElement('div');
  registerTotalAmount.className = 'registerTotalAmount';
  registerTotalAmount.setAttribute('id', 'runnerItemTotal');
  registerTotalAmount.textContent = "$" + totalCost;
  registerTotal.appendChild(registerTotalAmount);
}


function shipper(deliveryOptions) {
  deliveryOptions.addEventListener('click', function() {
    shipUpdater();
  }, true);
}

function shipUpdater() {
  var buttons = document.forms["deliveryOptions"].elements["shipping"];
  for(var i = 0, max = buttons.length; i < max; i++) {
    buttons[i].onclick = function() {
        shipRunner(this.value);
    }
}
}

function shipRunner(value) {
  shippingCost = value;
  bagCostUpdater();
  var register = document.getElementById('registerBox');
  registerLoader(register);
}

function miniListRun() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].quantity > 0) {
    listMiniItems(i);
    }
  }
}


function listMiniItems(index) {
  var reviewListBox = document.getElementById('reviewListBox');

  var title = document.createElement('div');
  title.setAttribute('id', 'subTitle');
  title.textContent = "Items";
  reviewListBox.appendChild(title);

  var itemBox = document.createElement('div');
  itemBox.className = "reviewItemBox";
  reviewListBox.appendChild(itemBox);

  var image = document.createElement('img');
  image.className = "miniReviewPicture";
  image.setAttribute('src', items[index].image);
  itemBox.appendChild(image);


  var name = document.createElement('h3');
  name.className = 'name';
  name.textContent = items[index].name;
  itemBox.appendChild(name);

  var maker = document.createElement('h4');
  maker.className = 'maker';
  maker.textContent = items[index].manufacturer;
  itemBox.appendChild(maker);

  var itemQuantity = document.createElement('div');
  itemQuantity.className = 'itemQuantity';
  itemQuantity.textContent = items[index].quantity;
  itemQuantity.setAttribute('id', 'runnerItem');
  itemBox.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "$" + items[index].price;
  itemCost.setAttribute('id', 'runnerItem');
  itemBox.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "$" + (items[index].quantity * items[index].price).toFixed(2);
  itemTotal.setAttribute('id', 'runnerItem');
  itemBox.appendChild(itemTotal);
}

aSearch.addEventListener('click', function() {
   event.preventDefault();
   searchText();
   eraseText();
 });

 aReview.addEventListener('click', function(){
   bagReview();
 });
