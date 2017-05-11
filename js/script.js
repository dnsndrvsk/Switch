var left = document.querySelector('.move-left');
var right = document.querySelector('.move-right');
var reviews_list = document.querySelector('.reviews-list');
var reviews = document.querySelectorAll('#testimonials .list-item');

var max_val = reviews.length * 484;


left.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (reviews_list.style.left == 0 ||
      reviews_list.style.left == '0px') return;
  
  var current = parseInt(reviews_list.style.left) || 0;
  var new_val;
  
  new_val = current + 484;
  
  reviews_list.style.left = new_val + "px";
});


right.addEventListener('click', function(e) {
  e.preventDefault();
  
  var current = parseInt(reviews_list.style.left) || 0;
  var new_val;
  new_val = Math.abs(current) + 484;
  
  if (Math.abs(new_val) >= Math.abs(max_val)) return;
  
  reviews_list.style.left = "-" + new_val + "px";
});