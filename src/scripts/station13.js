alert("お試し");

const text = document.getElementById("text");

function changeBackgroundColor(e) {
  if (check.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "initial"; // デフォルトの背景色に戻す
  }
}
