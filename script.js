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

//Scroll things into view on workExp when you click them from navbar
//WHY CANT I MAKE STUFF SMOOTH IT JUST JUMPS WHEN YOU CLICK


//Workexp function that might actually work-
//Write the function so it adds a class that keeps the altered color while clicked onto and removes it once clicked off
function workButtonRider() {
  document.getElementById("riderGameBtn").classList.add("workBtn-active");
  document.getElementById("riderUni").classList.remove("hide-work");
  document.getElementById("eastmontID").classList.add("hide-work");
  document.getElementById("orchardsBtn").classList.remove("workBtn-active");
}

function workButtonEastmont() {
  document.getElementById("orchardsBtn").classList.add("workBtn-active");
  document.getElementById("eastmontID").classList.remove("hide-work");
  document.getElementById("riderUni").classList.add("hide-work");
  document.getElementById("riderGameBtn").classList.remove("workBtn-active");
}

//WorkExp navbar
//WAIT NO LOL THIS WORKS BUT IT'S REMOVING THE WRONG ACTIVE CLASS- OK DO A NEW CLASS THAT'LL FIX IT IDK THIS WAS FUNNY TO ME
//This all works let's fucking go
//Credit: https://www.youtube.com/watch?v=qARueNQFk04&t=479s
const navLi = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLi.forEach(a => {
    //Ok no what the fuck WHAT CLASS ARE YOU REMOVING- YOU WORK ON WORKEXP ONLY AFTER USING THIS FUNCTION
    a.classList.remove('workNav-active')
    document.querySelector('a[href*= ' + current + ']').classList.add('workNav-active');
  });
});
