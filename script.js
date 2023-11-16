ScrollReveal({
      reset:true,
      distance: '80px',
      duration:2500,
      delay:400
  
});



ScrollReveal().reveal('#internalcontainer1',{delay:300,origin:'bottom'})
ScrollReveal().reveal('#objective-content h2',{delay:200,origin:'left'})
ScrollReveal().reveal('.typing',{delay:300,origin:'right'})
ScrollReveal().reveal('#story h1',{delay:300,origin:'right'})
ScrollReveal().reveal('#p1',{delay:300,origin:'bottom'})
ScrollReveal().reveal('#p2',{delay:300,origin:'right'})


//for blogs

  ScrollReveal().reveal('.blog-1',{delay:200,origin:'left'})
  setTimeout(400);
  ScrollReveal().reveal('.blog-2',{delay:200,origin:'left'})
  setTimeout(400);
  ScrollReveal().reveal('.blog-3',{delay:200,origin:'left'})
  setTimeout(400);


/*// Typing animation
const textElement = document.querySelector('.text');
const text = "Your typing text goes here.";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50); // Adjust the typing speed here
  }
}

// Call the type function when the container is revealed
document.querySelector('.container').addEventListener('animationend', type);*/