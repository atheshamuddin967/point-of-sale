// login section function 


$(document).ready (function(){
    $('#reg').click(function () {
        $(this).hide();
        $('#login').fadeIn();
    });
    $('#close-btn').click(function () {
        $('#login').fadeOut();
        $('#reg').show();
    });
    
})

//  js for scroll-animation 
 AOS.init({
        offset: 120,
        duration: 2000,
    });





    // counter animation js 
var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});
// counter js end 

// owl carosule for testimonial 

$(document).ready(function () {

    var three = $("#owl-1")
    three.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // item: 3,


        responsiveClass: true,
        responsive: {
            300: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            800: {
                items: 3,
                nav: true,
                loop: true,
            },

            1000: {
                items: 3,
                nav: true,
                loop: true,
            }
        }



    });
    var three = $("#owl-2")
    three.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // item: 3,


        responsiveClass: true,
        responsive: {
            300: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: true
            },
            
            500: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },

            700: {
                items: 3,
                nav: true,
                loop: true,
            },
            800: {
                items: 4,
                nav: true,
                loop: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            }
        }



    });
});


// owl carosule secion end 

// Faq section start 
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



// form validation 


$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='myform2']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
        
          
          email2: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          },
  
          password:{
              required:true,
             
          }
          
        },
        // Specify validation error messages
        messages: {
         password:"enter your password",
         
          email2: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
      });
    $("form[name='myform']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name:{
            required:true,
            minlength:4,

        } ,
        
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },

        number:{
            required:true,
            digits:true
        }
        
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name",
        number:'enter your number',
       
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });