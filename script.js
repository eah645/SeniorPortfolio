//Nav function (Idk why this- idk what this does)
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //Alright that work experience thing... I need to make a thing where when you reach a specific point it adds / removes a class I guess?
  //Yeah the html and current class not the span ones
  function educationAnimation() {
    $(".school-lists").inViewport(
      function () {
        $(this).addClass("html");
        $(this).addClass("current");
      },
      function () {
        $(this).removeClass("html");
        $(this).removeClass("current");
      }
    );
  }