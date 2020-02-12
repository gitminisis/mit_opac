export function isLogged() {
  let user = document.getElementById("userid").innerHTML;
  if (user === "") {
    return false;
  }
  return true;
}
