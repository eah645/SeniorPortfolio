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
      active: true,
    };
  },
  methods: {
    //Jacob showed me his code apparently this- it looks like exactly what I'm going for which- I'm gonna try and integrate it see what happens
    //Link to it because I doubt I'll have enough time in this class: https://replit.com/@JacobSze/Boredom?v=1#year2018.html
    //Wait oh my god it's not exactly the same the way they did it is putting each image in and giving it an ID so... maybe I can add that to JSON and fuck with it
    //So for some reason no functions are working so let's just- let's write a new function and fuck around until it works
    //I wrote the vue thing wrong the onclick was wrong- this runs when you click on the button so now I need to make it when you click the image the first time... right?
    testFunct() {
      console.log("vue isn't fucking broken");
    },

    //Jacob's function
    //Yeah no I- I like that I know I have a basic function that works now it's a matter of fucking it up so it works for me
    //Wait wait ok do- do I do this with a ton of defining variables for every object? I tried stringify that was being weird... maybe parse would work?
    //What I want to do is in that last part just... make the digitalArt call the entire object that has the id
    //Oh wait filter method... putting an example function below this one
    sameThing() {
      //You you should be the digitalArt ID because that's the only content in that id
      var id = document.getElementById("digitalID");
      console.log(id);
      let image = document.getElementById("json-img");
      image.src = digitalArt[id];
    },

    //Link: https://stackoverflow.com/questions/27263031/calling-specific-object-by-id-from-a-json-file-in-my-js
    //So this... looks like I need to then write out separate functions for each which I don't particuarly want to do but I'm not totally against it- like I could do this with a case/switch but then I'd need to add another function each time I added stuff (Again- not the biggest issue but- y'know)
    //Alright let- let me just make this work if I can then we- ok go work
    getTrivia(id, items) {
      var filtered = items.filter(function (item) {
        return item.id == id;
      });
      return filtered[0];
    },

    //Wait I'm- still a dumbass I- I need to write another function to make only the image appear- oh... ha I- I ignored that
    //Alright none of this works but THIS IS CLOSE IT'S GOTTA BE THE STACK OVERFLOW FUCKING WORKS
    //...I never fucking called this and now it's broken ok fun-
    bindDataSet() {
      var html = "";

      //So this I wanna replace with the title...
      //No I want this to be the image I think ok- how is a for loop gonna work in a vue loop thing
      for (var i = 0; i < digitalArt.length; i++) {
        html +=
          "<li onclick='viewDetail(" +
          digitalArt[i].type +
          ")' class='textLimit form-control' id=" +
          digitalArt[i].type +
          ">" +
          digitalArt[i].type +
          " </li>";
      }
      //WAIT HOLY SHIT THIS WORKED- so I could technically write this function for each section? Right?
      //Or... maybe- no ok why did it only work with the title?
      //Let me actually try rewriting this function lol
      $("#artPopupHeaderID").append(html);
      $("#artDescID").append(html);
      console.log("do I work");
    },
    //I need to use you for the detail list. I need to use this. This is literally it. I'm so close dude
    //...wait was this always working? Like was it always working and I just missed it- you're kidding me
    //Wait no it wasn't it wasn't formatting right ok great let's go
    //Alright let's write a different function...convert data from digitalArt.popupDetails into an HTML list. Got it. This is so fucking doable
    //This function is not working lol ok-
    //Ok good job it did something- nothing is showing up lol is this running-
    //Wait ok- ok let's make this work first
    //Alright I'm done working for today check this out tomorrow or whenever the hell I have this class again https://stackoverflow.com/questions/6692538/generate-unordered-list-from-json-data
    detailsAppear() {
      //Well this might be something?
      /*Returns string in html */
      //return month + " " + dateArray[2] + ", " + dateArray[0];
      console.log("I work");
    },

    //Ok issue for later idk why it started acting weird when I added close form but uh- later
    // closeForm() {
    //   document.getElementById('popupArt').style.display = "none";
    // }
    //Alright before I overthink this let's code the popup for just this section- actually fuck would it be better to code this out of the vue so I can use it for everything-

    //Ok so next function- it'll be like- I might want to do like a case-break statement like if user clicks on the first image then only bring in data from that object in JSON not fucking all of it which it's doing rn- actually just a thought can i do something like set digitalArt[i] = digitalArt then whatever number? idk if thatll work since its not a variable but i is so- fuck it
  },
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



 //Ok here for closing it please https://stackoverflow.com/questions/62820398/close-popup-by-clicking-outside-it-javascript