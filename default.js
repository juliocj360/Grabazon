var items = [
  {
    name: "Super Heroes 76034 the Batboat Harbor Pursuit Building Kit",
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
    name: "CITY Ferry 60119",
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
    name: "DUPLO Disney 10822 Sofia the First Magical Carriage Building Kit",
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
  items[index].quantity += parseInt(qty, 10); //+ itemQty;
  bagQtyUpdater();
  bagCostUpdater();
}

function bagQtyUpdater() {
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    sum += items[i].quantity;
  }
  var bagQty = document.getElementById('qty-total');
  bagQty.textContent = "Total Items: " + sum;
}

function bagCostUpdater() {
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    sum += (items[i].quantity * items[i].price);
  }
  var bagCost = document.getElementById('cost-total');
  bagCost.textContent = "Total Items: " + sum;
}

aSearch.addEventListener('click', function() {
   event.preventDefault();
   searchText();
   eraseText();
 });
