let tmp;

function clickText() {
  if (tmp === undefined) {
    tmp = document.getElementById(event.path[0].id);
    tmp.style.backgroundColor = "orange";
  } else if (tmp !== undefined) {
    tmp.style.backgroundColor = "";
    tmp = document.getElementById(event.path[0].id);
    tmp.style.backgroundColor = "orange";
  }
}
