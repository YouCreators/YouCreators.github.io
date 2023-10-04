export function loading() {
  const e = document.getElementById("loading");
  e.classList.add("l");
  setTimeout(() => {
    e.remove();
  }, 1000);
}
