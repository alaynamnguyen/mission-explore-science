function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

//   function openTab(evt) { // switches tab
//     console("HEHEHEH");
//     var i, tablinks;
//     tablinks = document.getElementsByClassName("tab");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     evt.currentTarget.className += " active";
//     console.log(evt.currentTarget.className);
// }

// var tabContainer = document.getElementById("nav-links");

// // Get all buttons with class="btn" inside the container
// var tabs = tabContainer.getElementsByClassName("tab");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   tabs[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("tabactive");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     console.log("CLICKKEEED");
//   });
// }



