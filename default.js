var items = [
  {
    name: "Super Heroes 76034 the Batboat Harbor Pursuit Building Kit",
    manufacturer: "Lego",
    price: 29.99,
    description: "Accessories include capes for Batman and Robin; fold out the secret radar tower to track Deathstroke; evade the jetboat's flick torpedo missiles!",
    department: "toys",
    image: "http://www.gamerwithkids.com/wp-content/uploads/2016/02/LEGO-Super-Heroes-76034-the-Batboat-Harbor-Pursuit-Building-Kit-0-0.jpg"
  },

  {
    name: "CITY Ferry 60119",
    manufacturer: "Lego",
    price: 19.99,
    description: "Features a Ferry with gates that can be raised and lowered and a space above the deck for the captain to pilot the boat",
    department: "toys",
    image: "https://farm6.staticflickr.com/5719/23600766096_8dfeab0e1c_c.jpg"
  },

  {
    name: "DUPLO Disney 10822 Sofia the First Magical Carriage Building Kit",
    manufacturer: "Lego",
    price: 29.99,
    description: "Features a buildable carriage with turning wheels, and a revolving tree",
    department: "toys",
    image: "https://images-na.ssl-images-amazon.com/images/I/81kj%2BDEmIqL._SL1500_.jpg"
  },

  {
    name: "Connect 4 Game",
    manufacturer: "Hasbro",
    price: 6.99,
    description: "Classic Connect 4 game is disc-dropping fun. When you get 4 discs in a row you win!",
    department: "toys",
    image: "https://images-na.ssl-images-amazon.com/images/I/91L30nswRuL._SL1500_.jpg"
  },

  {
    name: "Battleship Game",
    manufacturer: "Hasbro",
    price: 9.11,
    description: "Classic Battleship game lets you hold head-to-head naval battles. If you can locate your enemy's ships you can destroy all 5 for the win!",
    department: "toys",
    image: "https://theboardwalkgamesdotcom.files.wordpress.com/2016/01/battleship-cover-3.jpg"
  },

  {
    name: "Uno",
    manufacturer: "Mattel",
    price: 4.79,
    description: "Four suits of 25 cards each, plus the eight Wild cards Earn points from other players when you go out first. Reach 500 points to win the game!",
    department: "toys",
    image: "http://frenchuno.com/wp-content/uploads/2015/02/uno-cards1.jpg"
  }
];

var aSearch = document.getElementById('search');
var aResult = document.getElementById('result');
var lookUp = document.getElementById('look-up');

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
  var image = document.createElement('img');
  image.className = "picture";
  image.setAttribute('src', items[index].image);
  aResult.appendChild(image);

  var name = document.createElement('h3');
  name.className = 'name';
  name.textContent = items[index].name;
  aResult.appendChild(name);

  var price = document.createElement('h4');
  price.className = 'price';
  price.textContent = "$" + items[index].price;
  aResult.appendChild(price);

  var manufacturer = document.createElement('h5');
  manufacturer.className = 'manufacturer';
  manufacturer.textContent = items[index].manufacturer;
  aResult.appendChild(manufacturer);

  var description = document.createElement('p');
  description.className = 'desc';
  description.textContent = items[index].description;
  aResult.appendChild(description);
}

aSearch.addEventListener('click', function() {
   searchText();
   eraseText();
 });

function eraseText() {
    document.getElementById("look-up").value = "";
}
