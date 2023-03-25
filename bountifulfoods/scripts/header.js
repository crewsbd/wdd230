const header = document.querySelector("header");

function changeStuck(entries, observer) {
    header.classList.add("stuck");
}

var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  var observer = new IntersectionObserver(changeStuck, options);
  
  var target = document.querySelector('header');
  observer.observe(target);