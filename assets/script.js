// First, tell us your name
let yourName = "Xavier Chico" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total Cookie

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    gb++;
    document.getElementById('qty-gb').textContent = gb;
    total++;
    document.getElementById('qty-total').textContent = total;
  })
document.getElementById('minus-gb').addEventListener('click', function() {
    gb--;
    document.getElementById('qty-gb').textContent= gb;
    total--;
    document.getElementById('qty-total').textContent = total;
})




document.getElementById('add-cc').addEventListener('click', function(){
  cc++;
  document.getElementById('qty-cc').textContent = cc;
  total++;
  document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function(){
  cc--;
  document.getElementById('qty-cc').textContent = cc;
  total--;
  document.getElementById('qty-total').textContent= total;
})





document.getElementById('add-sugar').addEventListener('click', function() {
  sugar++;
  document.getElementById('qty-sugar').textContent = sugar;
  total++;
  document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
  sugar--;
  document.getElementById('qty-sugar').textContent = sugar;
  total--;
  document.getElementById('qty-total').textContent = total;
  })
