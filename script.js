function remove(element) {
  element.remove();
}

function logout(element) {
  if (element.innerText == "login") {
    element.innerText = "logout";
  } else element.innerText = "login";
}
