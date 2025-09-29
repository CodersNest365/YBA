function openPin(el) {
  let img = el.querySelector("img").src;
  let title = el.getAttribute("data-title");
  let desc = el.getAttribute("data-desc");

  document.getElementById("modalImg").src = img;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;

  document.getElementById("pinModal").style.display = "flex";
}

function closePin() {
  document.getElementById("pinModal").style.display = "none";
}

// Close on background click
window.addEventListener("click", (e) => {
  if (e.target.id === "pinModal") {
    closePin();
  }
});
