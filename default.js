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
    name: "DUPLO Disney Sofia the First",
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

var aSearch = document.getElementById('search-box');
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
  resultBox.className = "result-box";
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
  detailBox.className = "detail-box";
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
  quantity.setAttribute('id', 'quantity');
  quantity.setAttribute('value', 1);
  grabForm.appendChild(quantity);

  var grabber = document.createElement('button');
  grabber.setAttribute('id', 'grabber');
  grabber.setAttribute('type', 'button');
  grabber.textContent = 'Grab Item!';
  grabForm.appendChild(grabber);

  var imagesBox = document.createElement('div');
  imagesBox.className = "images-box";
  detailBox.appendChild(imagesBox);

  var image = document.createElement('img');
  image.className = "main-picture";
  image.setAttribute('src', items[index].image);
  image.setAttribute('id', 'mainImage');
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
  focusImage(image1);
  focusImage(image2);
  focusImage(image3);
}

function focusImage(image) {
  var newImage = image.getAttribute('src');
  var mainImage = document.getElementById('mainImage');
  image.addEventListener('mouseover', function() {
    mainImage.setAttribute('src', newImage);
  });
}

function grabItems(index) {
  var quantityGrabbed = document.getElementById('quantity');
  var grabbed = document.getElementById('grabber');
  grabbed.addEventListener('click', function () {
    quantityAdder(index, quantityGrabbed.value);
  }, true)
  }

function quantityAdder(index, quantity) {
  items[index].quantity += parseInt(quantity, 10);
  bagQuantityUpdater();
  bagCostUpdater();
}

function bagQuantityUpdater() {
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    sum += items[i].quantity;
  }
  bagQuantity = sum;
  var bagCount = document.getElementById('quantity-total');
  bagCount.textContent = "Total Items: " + bagQuantity;
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
  clear(aResult);

  var reviewBox = document.createElement('div');
  reviewBox.className = "review-box";
  aResult.appendChild(reviewBox);

  var runner = document.createElement('div');
  runner.className = "runner";
  runner.setAttribute('id', 'checkoutRunner');
  reviewBox.appendChild(runner);

  var checkoutButton = document.createElement('button');
  checkoutButton.setAttribute('id', 'checkout-button');
  checkoutButton.setAttribute('type', 'button');
  checkoutButton.textContent = 'Proceed to Checkout';
  runner.appendChild(checkoutButton);

  var reviewHeader = document.createElement('div');
  reviewHeader.className = "review-header";
  reviewBox.appendChild(reviewHeader);

  var innerRunner = document.createElement('div');
  innerRunner.className = 'inner-runner';
  innerRunner.setAttribute('id', 'headRunner');
  reviewHeader.appendChild(innerRunner);

  var itemQuantity = document.createElement('div');
  itemQuantity.className = 'itemQuantity';
  itemQuantity.textContent = "Quantity";
  itemQuantity.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "Item Cost";
  itemCost.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "Total";
  itemTotal.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemTotal);

  var reviewTitle = document.createElement('h3');
  reviewTitle.textContent = "Grab Bag Contents..."
  reviewHeader.appendChild(reviewTitle);

  var bagItemsBox = document.createElement('div');
  bagItemsBox.setAttribute('id', 'bagItemsBox');
  reviewBox.appendChild(bagItemsBox);

  var register = document.createElement('div');
  register.setAttribute('id', 'register-box');
  reviewBox.appendChild(register);

  registerLoader(register);
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
  var register = document.getElementById('register-box');
  register.setAttribute('hidden', 'hidden');

  var checkoutRunner = document.getElementById('checkoutRunner');
  checkoutRunner.setAttribute('hidden', 'hidden');

  var headRunner = document.getElementById('headRunner');
  headRunner.setAttribute('hidden', 'hidden');
}

function listItems(index) {
  var bagBox = document.getElementById('bagItemsBox');

  var itemBox = document.createElement('div');
  itemBox.className = "review-item-box";
  bagBox.appendChild(itemBox);

  var image = document.createElement('img');
  image.className = "review-picture";
  image.setAttribute('src', items[index].image);
  itemBox.appendChild(image);

  var innerRunner = document.createElement('div');
  innerRunner.className = 'inner-runner';
  itemBox.appendChild(innerRunner);

  var itemQuantity = document.createElement('div');
  itemQuantity.className = 'itemQuantity';
  itemQuantity.textContent = items[index].quantity;
  itemQuantity.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "$" + items[index].price;
  itemCost.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "$" + (items[index].quantity * items[index].price).toFixed(2);
  itemTotal.setAttribute('id', 'runner-item');
  innerRunner.appendChild(itemTotal);

  var incrementer = document.createElement('div');
  incrementer.className = 'incrementer';
  incrementer.setAttribute('id', 'incrementer');
  innerRunner.appendChild(incrementer);

  var incrementerUp = document.createElement('i');
  incrementerUp.className = 'fa fa-plus-circle';
  incrementerUp.setAttribute('id', 'incrementer-up');
  incrementer.appendChild(incrementerUp);

  var incrementerDown = document.createElement('i');
  incrementerDown.className = 'fa fa-minus-circle';
  incrementerDown.setAttribute('id', 'incrementer-down');
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
    quantityAdder(index, 1);
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
    quantityAdder(index, -1);
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
  quantityAdder(index,0);
  bagReview();
}

function checkOutLoader() {
  event.preventDefault();
  clear(aResult);

  var checkoutBox = document.createElement('div');
  checkoutBox.className = "checkout-box";
  aResult.appendChild(checkoutBox);

  var runner = document.createElement('div');
  runner.className = "runner";
  runner.setAttribute('id', 'checkoutRunner');
  checkoutBox.appendChild(runner);

  var formHolder = document.createElement('div');
  formHolder.className = "form-holder";
  checkoutBox.appendChild(formHolder);

  var shippingBox = document.createElement('div');
  shippingBox.className = "shipping-box";
  formHolder.appendChild(shippingBox);

  var shippingBoxTitle = document.createElement('div');
  shippingBoxTitle.className = 'box-title';
  shippingBoxTitle.textContent = "Shipping Information";
  shippingBox.appendChild(shippingBoxTitle);

  var shippingColumnBox = document.createElement('div');
  shippingColumnBox.className = 'column-box';
  shippingBox.appendChild(shippingColumnBox);

  var shippingColumn1 = document.createElement('div');
  shippingColumn1.className = "shipping-column1";
  shippingColumnBox.appendChild(shippingColumn1);

  var shipFirstName = document.createElement('input');
  shipFirstName.className = 'detail-input';
  shipFirstName.setAttribute('type', 'text');
  shipFirstName.setAttribute('placeholder', 'First Name');
  shipFirstName.setAttribute('id', 'firstName');
  shippingColumn1.appendChild(shipFirstName);

  var shipAddress = document.createElement('input');
  shipAddress.className = 'detail-input';
  shipAddress.setAttribute('type', 'text');
  shipAddress.setAttribute('placeholder', 'Address')
  shippingColumn1.appendChild(shipAddress);

  var shipCity = document.createElement('input');
  shipCity.className = 'detail-input';
  shipCity.setAttribute('type', 'text');
  shipCity.setAttribute('placeholder', 'City')
  shippingColumn1.appendChild(shipCity);

  var shippingColumn2 = document.createElement('div');
  shippingColumn2.className = "shipping-column2";
  shippingColumnBox.appendChild(shippingColumn2);

  var shipLastName = document.createElement('input');
  shipLastName.className = 'detail-input';
  shipLastName.setAttribute('type', 'text');
  shipLastName.setAttribute('placeholder', 'Last Name')
  shippingColumn2.appendChild(shipLastName);

  var shipState = document.createElement('input');
  shipState.className = 'detail-input';
  shipState.setAttribute('type', 'text');
  shipState.setAttribute('placeholder', 'State')
  shippingColumn2.appendChild(shipState);

  var shipZip = document.createElement('input');
  shipZip.className = 'detail-input';
  shipZip.setAttribute('type', 'text');
  shipZip.setAttribute('placeholder', 'Zip Code')
  shippingColumn2.appendChild(shipZip);

  var paymentBox = document.createElement('div');
  paymentBox.className = "payment-box";
  formHolder.appendChild(paymentBox);

  var paymentBoxTitle = document.createElement('div');
  paymentBoxTitle.className = 'box-title';
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
  checkboxText.className = 'checkbox-text';
  checkboxText.textContent = "Billing address same as shipping address.";
  checkboxHolder.appendChild(checkboxText);

  var paymentAddressBox = document.createElement('div');
  paymentAddressBox.className = 'column-box';
  paymentAddressBox.setAttribute('id', 'paymentAddressBox');
  paymentBox.appendChild(paymentAddressBox);

  var paymentColumn1 = document.createElement('div');
  paymentColumn1.className = "payment-column1";
  paymentAddressBox.appendChild(paymentColumn1);

  var payFirstName = document.createElement('input');
  payFirstName.className = 'detail-input';
  payFirstName.setAttribute('type', 'text');
  payFirstName.setAttribute('placeholder', 'First Name')
  paymentColumn1.appendChild(payFirstName);

  var payAddress = document.createElement('input');
  payAddress.className = 'detail-input';
  payAddress.setAttribute('type', 'text');
  payAddress.setAttribute('placeholder', 'Address')
  paymentColumn1.appendChild(payAddress);

  var payCity = document.createElement('input');
  payCity.className = 'detail-input';
  payCity.setAttribute('type', 'text');
  payCity.setAttribute('placeholder', 'City')
  paymentColumn1.appendChild(payCity);

  var paymentColumn2 = document.createElement('div');
  paymentColumn2.className = "payment-column2";
  paymentAddressBox.appendChild(paymentColumn2);

  var payLastName = document.createElement('input');
  payLastName.className = 'detail-input';
  payLastName.setAttribute('type', 'text');
  payLastName.setAttribute('placeholder', 'Last Name')
  paymentColumn2.appendChild(payLastName);

  var payState = document.createElement('input');
  payState.className = 'detail-input';
  payState.setAttribute('type', 'text');
  payState.setAttribute('placeholder', 'State')
  paymentColumn2.appendChild(payState);

  var payZip = document.createElement('input');
  payZip.className = 'detail-input';
  payZip.setAttribute('type', 'text');
  payZip.setAttribute('placeholder', 'Zip Code')
  paymentColumn2.appendChild(payZip);

  var cardDetailBox = document.createElement('div');
  cardDetailBox.className = 'card-detail-box';
  paymentBox.appendChild(cardDetailBox);

  var cardColumn1 = document.createElement('div');
  cardColumn1.className = "card-column1";
  cardDetailBox.appendChild(cardColumn1);

  var cardType = document.createElement('input');
  cardType.className = 'detail-input';
  cardType.setAttribute('type', 'text');
  cardType.setAttribute('placeholder', 'Card Type')
  cardColumn1.appendChild(cardType);

  var cardNumber = document.createElement('input');
  cardNumber.className = 'detail-input';
  cardNumber.setAttribute('placeholder', 'Card Number')
  cardColumn1.appendChild(cardNumber);

  var cardColumn2 = document.createElement('div');
  cardColumn2.className = "card-column2";
  cardDetailBox.appendChild(cardColumn2);

  var cardExpire = document.createElement('input');
  cardExpire.className = 'detail-input';
  cardExpire.setAttribute('type', 'text');
  cardExpire.setAttribute('placeholder', 'Expiration Date')
  cardColumn2.appendChild(cardExpire);

  var reviewDeliveryBox = document.createElement('div');
  reviewDeliveryBox.className = "reviewDeliveryBox";
  formHolder.appendChild(reviewDeliveryBox);

  var reviewDeliveryBoxTitle = document.createElement('div');
  reviewDeliveryBoxTitle.className = 'box-title';
  reviewDeliveryBoxTitle.textContent = "Review items and delivery information";
  reviewDeliveryBox.appendChild(reviewDeliveryBoxTitle);

  var reviewDeliveryColumnBox = document.createElement('div');
  reviewDeliveryColumnBox.className = 'column-box';
  reviewDeliveryBox.appendChild(reviewDeliveryColumnBox);

  var reviewListBox = document.createElement('div');
  reviewListBox.className = 'review-column1';
  reviewListBox.setAttribute('id', 'reviewListBox');
  reviewDeliveryColumnBox.appendChild(reviewListBox);

  var title = document.createElement('div');
  title.setAttribute('id', 'sub-title');
  title.textContent = "Items";
  reviewListBox.appendChild(title);

  var reviewShipping = document.createElement('div');
  reviewShipping.className = 'review-column2';
  reviewDeliveryColumnBox.appendChild(reviewShipping);

  var deliveryText = document.createElement('div');
  deliveryText.className = 'delivery-text';
  deliveryText.textContent = "Choose delivery option";
  reviewShipping.appendChild(deliveryText);

  var deliveryOptions = document.createElement('form');
  deliveryOptions.setAttribute('id', 'delivery-options');
  reviewShipping.appendChild(deliveryOptions);

  var standardShipContainer = document.createElement('div');
  standardShipContainer.setAttribute('id', 'ship-container');
  deliveryOptions.appendChild(standardShipContainer);

  var standardShip = document.createElement('input');
  standardShip.setAttribute('type', 'radio');
  standardShip.setAttribute('name', "shipping");
  standardShip.setAttribute('id', 'radioButton1');
  standardShip.setAttribute('checked', 'checked');
  standardShip.setAttribute('value', 0);
  standardShipContainer.appendChild(standardShip);

  var standardShipText = document.createElement('span');
  standardShipText.setAttribute('id', 'ship-text');
  standardShipText.textContent = "Ground: $FREE!";
  standardShipContainer.appendChild(standardShipText);

  var twoDayShipContainer = document.createElement('div');
  twoDayShipContainer.setAttribute('id', 'ship-container');
  deliveryOptions.appendChild(twoDayShipContainer);

  var twoDayShip = document.createElement('input');
  twoDayShip.setAttribute('type', 'radio');
  twoDayShip.setAttribute('name', "shipping");
  twoDayShip.setAttribute('id', 'radioButton2');
  twoDayShip.setAttribute('value', 9.99);
  twoDayShipContainer.appendChild(twoDayShip);

  var twoDayText = document.createElement('span');
  twoDayText.setAttribute('id', 'ship-text');
  twoDayText.textContent = "Two Day Air: $9.99";
  twoDayShipContainer.appendChild(twoDayText);

  var nextDayShipContainer = document.createElement('div');
  nextDayShipContainer.setAttribute('id', 'ship-container');
  deliveryOptions.appendChild(nextDayShipContainer);

  var nextDayAir = document.createElement('input');
  nextDayAir.setAttribute('type', 'radio');
  nextDayAir.setAttribute('name', "shipping");
  nextDayAir.setAttribute('id', 'radioButton3');
  nextDayAir.setAttribute('value', 19.99);
  nextDayShipContainer.appendChild(nextDayAir);

  var nextDayText = document.createElement('span');
  nextDayText.setAttribute('id', 'ship-text');
  nextDayText.textContent = "Next Day Air: $19.99";
  nextDayShipContainer.appendChild(nextDayText);

  var register = document.createElement('div');
  register.setAttribute('id', 'register-box');
  runner.appendChild(register);

  var submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = "Submit Order";
  runner.appendChild(submitButton);

  checkboxer(addressCheckbox);
  registerLoader(register);
  shipper(deliveryOptions);
  miniListRun();
  submitter(submitButton, shipFirstName);
}

function submitter(submitButton, shipFirstName){
  submitButton.addEventListener('click', function() {
    nameChecker(shipFirstName);
  })
}

function nameChecker(shipFirstName) {
  var nameLength = shipFirstName.value.length;
  if (nameLength < 1) {
    alert("Please enter first name");
  }
  else {
    shipRunner(0);
    debagger(shipFirstName);
  }
}

function debagger(shipFirstName) {
  for (var i = 0; i < items.length; i++) {
    items[i].quantity = 0;
    bagQuantityUpdater();
    bagCostUpdater();
    submitPageLoader(shipFirstName);
  }
}

function submitPageLoader(shipFirstName) {
  var Name = shipFirstName.value;
  clear(aResult);
  var outBox = document.createElement('div');
  outBox.className = "out-box";
  outBox.textContent = "Much Appreciated " + Name + "! Your order is on it's way.";
  aResult.appendChild(outBox);
}

function checkboxer(addressCheckbox) {
  addressCheckbox.addEventListener('change', function() {
    var paymentAddressBox = document.getElementById('paymentAddressBox');
    if (!addressCheckbox.checked) {
      return paymentAddressBox.removeAttribute('hidden');
    }
    paymentAddressBox.setAttribute('hidden', 'hidden');
  });
}

function registerLoader(location) {
  clear(location);
  var subTotal = document.createElement('div');
  subTotal.className = 'subTotal';
  location.appendChild(subTotal);

  var subTotalText = document.createElement('div');
  subTotalText.className = 'register-left';
  subTotalText.setAttribute('id', 'register-item');
  subTotalText.textContent = "Subtotal: ";
  subTotal.appendChild(subTotalText);

  var subTotalAmount = document.createElement('div');
  subTotalAmount.className = 'register-right';
  subTotalAmount.setAttribute('id', 'register-item');
  subTotalAmount.textContent = "$" + costBeforeTaxes;
  subTotal.appendChild(subTotalAmount);

  var registerTax = document.createElement('div');
  registerTax.className = 'registerTax';
  location.appendChild(registerTax);

  var registerTaxText = document.createElement('div');
  registerTaxText.className = 'register-left';
  registerTaxText.setAttribute('id', 'register-item');
  registerTaxText.textContent = "Taxes: ";
  registerTax.appendChild(registerTaxText);

  var registerTaxAmount = document.createElement('div');
  registerTaxAmount.className = 'register-right';
  registerTaxAmount.setAttribute('id', 'register-item');
  registerTaxAmount.textContent = "$" + taxes;
  registerTax.appendChild(registerTaxAmount);

  var registerShipping = document.createElement('div');
  registerShipping.className = 'registerShipping';
  location.appendChild(registerShipping);

  var registerShippingText = document.createElement('div');
  registerShippingText.className = 'register-left';
  registerShippingText.setAttribute('id', 'register-item');
  registerShippingText.textContent = "Shipping: ";
  registerShipping.appendChild(registerShippingText);

  var registerShippingAmount = document.createElement('div');
  registerShippingAmount.className = 'register-right';
  registerShippingAmount.setAttribute('id', 'register-item');
  registerShippingAmount.textContent = "$" + shippingCost;
  registerShipping.appendChild(registerShippingAmount);

  var registerTotal = document.createElement('div');
  registerTotal.className = 'registerTotal';
  location.appendChild(registerTotal);

  var registerTotalText = document.createElement('div');
  registerTotalText.className = 'register-left';
  registerTotalText.setAttribute('id', 'runner-item-total');
  registerTotalText.textContent = "Total: ";
  registerTotal.appendChild(registerTotalText);

  var registerTotalAmount = document.createElement('div');
  registerTotalAmount.className = 'register-right';
  registerTotalAmount.setAttribute('id', 'runner-item-total');
  registerTotalAmount.textContent = "$" + totalCost;
  registerTotal.appendChild(registerTotalAmount);
}

function shipper(deliveryOptions) {
  deliveryOptions.addEventListener('click', function() {
    shipUpdater();
  }, true);
}

function shipUpdater() {
  var buttons = document.forms["delivery-options"].elements["shipping"];
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      shipRunner(this.value);
    }
  }
}

function shipRunner(value) {
  shippingCost = value;
  bagCostUpdater();
  var register = document.getElementById('register-box');
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

  var itemBox = document.createElement('div');
  itemBox.className = "review-item-box";
  reviewListBox.appendChild(itemBox);

  var image = document.createElement('img');
  image.className = "mini-review-picture";
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
  itemQuantity.setAttribute('id', 'runner-item');
  itemBox.appendChild(itemQuantity);

  var itemCost = document.createElement('div');
  itemCost.className = 'itemCost';
  itemCost.textContent = "$" + items[index].price;
  itemCost.setAttribute('id', 'runner-item');
  itemBox.appendChild(itemCost);

  var itemTotal = document.createElement('div');
  itemTotal.className = 'itemTotal';
  itemTotal.textContent = "$" + (items[index].quantity * items[index].price).toFixed(2);
  itemTotal.setAttribute('id', 'runner-item');
  itemBox.appendChild(itemTotal);
}

aSearch.addEventListener('submit', function() {
   event.preventDefault();
   searchText();
   eraseText();
 });

 aReview.addEventListener('click', function(){
   bagReview();
 });
