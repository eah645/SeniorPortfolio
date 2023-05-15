//Alright fuck it time to try making this work- so what I wanna do: Make a card with two buttons that bring in the data- let's do just from the first JSON object

//I commented everything so go to history to get it or just uncomment it idk- right now I just need this to work

//Function to make web design visible
//...what the function is working but- it won't remove the class ok
//...I had a capital C instead of lowercase... ok good to know that matters-
//Variables outside because I need to call them in both
var websiteContent = document.getElementById("webStuff");
var drawContent = document.getElementById("artStuff");
var webButton = document.getElementById("btn");
var artButton = document.getElementById("artBtn");

//Let's fucking go both of these work- all I need to do now is basically finish up the art section which... requires me to download files
function showWeb() {
  websiteContent.classList.remove("webContent");
  drawContent.classList.add("artContent");
  webButton.classList.add("portfolio-active");
  artButton.classList.remove("portfolio-active");
}

//I think replit's breaking when I highlight it it says artisticContent isn't defined but I deleted that already?
//...capital and lowercase fucked me up again but it works alright great
function showArt() {
  drawContent.classList.remove("artContent");
  websiteContent.classList.add("webContent");
  artButton.classList.add("portfolio-active");
  webButton.classList.remove("portfolio-active");
}

//function to make the back to top button work

//ok broke it go into history and fix all i added was the button tried to write a function and fucked it up-

//Ok no it's working fine on pc what-
function backToTop() {
  document.getElementById("top").scrollIntoView({
    behavior: "smooth"
  });
}

//Building another one for feature pages...
//Holy shit wait can you not have two vue files- inside each other I mean-
//Fuck... fuck ok for now we'll just code it without vue.. fuck
// const vue_app1 = Vue.createApp({
//   created() {
//     fetch("JSON/featureWeb.json")
//       .then((response) => response.json())
//       .then((json) => {
//         this.featureWebsites = json;
//       });
//   },
//   data() {
//     return {
//       featureWebsites: [],
//     };
//   }
// });

// vue_app1.mount("#vue_app1");



//Alright so this is working with vue- this created does nothing-
//So this vue is for all projects that-that's it
const vue_app = Vue.createApp({
  created() {
    fetch("JSON/Web.json")
      .then((response) => response.json())
      .then((json) => {
        this.websites = json;
      });
    // web1(i) {
    //   if (websites[i].year == 1) {
    //     return websites1.values();
    //   }
    // };
  },
  data() {
    return {
      websites: [],
      title: "All Projects",
    };
  },
  methods: {
    //It's defined now :) ...no the function still doesn't work it's only showing up as false so there's an issue with the condition in the if statement?
    //THIS WORKS!!!!! LETS FUCKING GO!!!!! (...yes I yelled it out loud and that was satisfying as hell)
    //Holy shit it actually does work I just need to make the columns respond to this... how
    makeNewRow(i) {
      if ((i + 1) % 4 == 0) {
        console.log("true");
        $("#content").append("</div><div class='row'>");
      } else {
        console.log("false");
      }
    },
    //https://stackoverflow.com/questions/45724291/using-bootstrap-and-java-script-how-do-i-insert-several-columns-in-a-row-using-f
    //Slightly off topic but I want to have like- could I use case / break thing to call different objects based on year using .filter() ? This might just be an art thing since it might actually be cooler in web to just do them all together so you can see how it evolved
    //I think for now I'm gonna... uh... here I'll make it in separate json files for now and see if I can transition it in because idk how to use filter
  },
});

vue_app.mount("#vue_app");


//Code for the css animation... idk how this'll go but it could look really cool if I can pull it off
//Ok for some reason writing this function breaks everything what the fuck-
//Wait ok just for my own idea- just add the class "animate__fadeInDown" that's- literally all I need holy shit
//Apparently it's a parallax thing so we'll do it later
// function scrollView() {
//   //Alright that's not working... am I calling it wrong or...
//   //Ok no so- the function is working it just... I can't find the write call thing
//   //Wait- add a fucking eventlistener apparently that's a thing I need-
//   var animate1 = document.getElementById("ScrollOpenAnimation");
//   animate1.classList.add("animate__fadeInDown")
// }

// console.log(animate1);

//Do a whole separate vue instance for the next part of it- this stuff should be entirely separate from the first Vue so we should be all good to do both at the same time
//Yeah no looks like that's good- the main thing I'll need to do is be careful about the order I put the art in so it formats well which... might be hard but that should just be trial / error
//https://bootcamp.uxdesign.cc/ui-ux-development-master-the-vue-instance-18aa5e708abd

//So this'll be the digital art one / first one on the page... let's go get an example I definitely have one-
const vue_app2 = Vue.createApp({
  created() {
    fetch("JSON/digitalArt.json")
      .then((response) => response.json())
      .then((json) => {
        //Ok so... this can't be lowercase because it says then the variable is undefined?
        //Called the wrong thing it- it works now
        this.digitalArt = json;
      });
  },
  data() {
    return {
      digitalArt: [],
      //Ok what the fuck- this is defined please show up
      //Wait ok this works- it's gotta be an issue with how I wrote the popup then? Also fuck it doesn't because it affects all of them not just one but that'll hopefully be something to just fix at the end?
      //...I can't check it works until I can fucking separate all of them- shit
      //This works this works perfectly fine I'm just a dumbass- I forgot to remove the display: none so it wasn't showing up- ok. Things I need to fix... actually no literally the only thing is make just one show up at a time. The only thing I can think of is write some type of function that depending on the number it only takes that one.
      //Ok no so- they all load in I had to delete the center align shit so I'll leave it commented let's- just try to figure this part out
      active: true
    }
  },
  methods: {
    //Check this let's try using vue: https://codesandbox.io/s/invisible-class-forked-n9d9wg?file=/src/App.vue
    //Also this lol https://dmitripavlutin.com/vue-show-hide-elements/#:~:text=Vue%20gives%20you%20a%20bunch,that%20hides%20the%20element%20completely.
    //https://vuejs.org/guide/essentials/conditional.html
    //Ok that- great I came back to this and it's broken- it won't work on the replit side thing and I can't check console.log without that- fuck
    //I guess let's spend time working on probably broken code-
    openForm2() {
      if (i == 0) {
        console.log('working 1');
      }
      //Wait so- I need to save these as a variable... that makes sense- do I need like 5 different variables-
    }
    //Ok issue for later idk why it started acting weird when I added close form but uh- later
    // closeForm() {
    //   document.getElementById('popupArt').style.display = "none";
    // }
    //Alright before I overthink this let's code the popup for just this section- actually fuck would it be better to code this out of the vue so I can use it for everything-

    //Ok so next function- it'll be like- I might want to do like a case-break statement like if user clicks on the first image then only bring in data from that object in JSON not fucking all of it which it's doing rn- actually just a thought can i do something like set digitalArt[i] = digitalArt then whatever number? idk if thatll work since its not a variable but i is so- fuck it
  }
});
vue_app2.mount("#vue_app2")

//Alright use this popup please https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html
//It's pretty much all CSS and javascript right?

//This has the side nav I wanna add for filtering which is a whole nother challenge but besides that scroll to the end and full screen maybe scroll up a bit its on the right: https://simpleparallax.com/

//Cool links:
//https://scrollmagic.io/examples/
//https://simpleparallax.com/
//https://atroposjs.com/docs
//https://rolly.maj.digital/

//https://stackoverflow.com/questions/50119816/how-to-make-vue-and-bootstrap-4-show-3-cards-per-row

//Code from Isacc (sophomore) 
//Idk how this part of it works- just the entry part idk the console.log isn't running- do I need to call this wait-
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if (entry.isIntersecting && entry.target.classList.contains('overlay__bar')) {
      entry.target.classList.add('show')
    }
    if (entry.isIntersecting && entry.target.classList.contains('overlay__dot')) {
      entry.target.classList.add('dot__show')
    } else {
      entry.target.classList.remove('dot__show')
    }

    if (entry.isIntersecting && entry.target.classList.contains('website__card')) {
      entry.target.classList.add('website__card--show')
    } else {
      entry.target.classList.remove('website__card--show')
    }
  })
});


//Back to Top button portfolio
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}