var usernamePassword = [];
fetch("authentification/authentification.txt")
  .then((response) => response.text())
  .then((data) => {
    usernamePassword = data.split(",");
  });

document.querySelector("button").onclick = () => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  if (username !== usernamePassword[0] || password !== usernamePassword[1]) {
    return;
  }

  let lien = document.createElement("a");
  lien.href = "main.html";
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
};

// document.addEventListener(
//   "keydown",
//   function (event) {
//     if (event.keyCode == 123) {
//       alert("Cette fonction a été désactivée !");
//       return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//       alert("Cette fonction a été désactivée !");
//       return false;
//     } else if (event.ctrlKey && event.keyCode == 85) {
//       alert("Cette fonction a été désactivée !");
//       return false;
//     }
//   },
//   false
// );

// if (document.addEventListener) {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       alert("Cette fonction a été désactivée !");
//       e.preventDefault();
//     },
//     false
//   );
// } else {
//   document.attachEvent("oncontextmenu", function () {
//     alert("Cette fonction a été désactivée !");
//     window.event.returnValue = false;
//   });
// }
