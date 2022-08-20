
<<<<<<< HEAD
window.onload = function () {
=======

window.onload = function (){
>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
<<<<<<< HEAD
=======

  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .navbar a');

>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
  window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

<<<<<<< HEAD
=======
    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };

    });

>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
  }

  document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }

  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }

<<<<<<< HEAD
=======
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 3000);
  }

  window.onload = fadeOut;


// Remove Items From Cart
  $('a.remove').click(function(){
    event.preventDefault();
    $( this ).parent().parent().parent().hide( 400 );

  })

// Just for testing, show all items
  $('a.btn.continue').click(function(){
    $('li.items').show(400);
  })
<<<<<<< HEAD


  $('.mdb-select').materialSelect();

}


=======
}

>>>>>>> 6a1ef365f3b594669236503d4571b44f4cbf86b8
