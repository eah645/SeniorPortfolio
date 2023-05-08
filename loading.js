//Defining functions I'm gonna use... I think what I'll do is just fuck around with adding classes with different opacities so I get a makeshift fade in effect if animate.css doesn't work

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
          loadingLogo();
          const my2Timeout = setTimeout(loadingLine, 1300);
          const myTimeout = setTimeout(loadingText, 1500);

          //Inverse functions:
          const timeout2 = setTimeout(inverseLoadingLogo, 3500);
          const timeout3 = setTimeout(inverseLoadingText, 4800);
          const timeout4 = setTimeout(inverseLoadingLine, 5000);

          const timeout5 = setTimeout(loadThePage, 6000);

          //Do a set interval in here
          //So for the set intervel... it looks like it works by calling the function and adding a timer so let's
          //define functions for each thing then call them in with set interval. This has gotta be possible
          //Holy shit I did it- ok so now I just need to reverse each function and it'll work perfectly fine oh my god
          //Alright now how do I... how do I turn off the loading screen- it's gotta be classes
    }
};
function loadingLogo() {
    document.getElementById("loadingLogo").classList.remove("testLoadingLogo")
    document.getElementById("loadingLogo").classList.add("testLoadingLogo-1")
}

function loadingText() {
    document.getElementById("idText").classList.remove("testLoadingText")
    document.getElementById("idText").classList.add("LoadingText")
}

function loadingLine() {
    document.getElementById("introLine").classList.remove("testBreakLine")
    document.getElementById("introLine").classList.add("break-line")
}

function inverseLoadingLogo() {
    document.getElementById("loadingLogo").classList.remove("testLoadingLogo-1")
    document.getElementById("loadingLogo").classList.add("testLoadingLogo")
}

function inverseLoadingText() {
    document.getElementById("idText").classList.add("testLoadingText")
    document.getElementById("idText").classList.remove("LoadingText")
}

function inverseLoadingLine() {
    document.getElementById("introLine").classList.add("testBreakLine")
    document.getElementById("introLine").classList.remove("break-line")
}

function loadThePage() {
    document.getElementById("loading").classList.add("loading-final")
    document.getElementById("loading").classList.remove("loading-initial")
    document.getElementById("not-loading").classList.add("not-loading-final")
    document.getElementById("not-loading").classList.remove("not-loading-initial")
}