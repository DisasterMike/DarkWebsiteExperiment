const darkBox = document.querySelectorAll(".box");

let previousBox = null;

darkBox.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (previousBox != null) previousBox.style.pointerEvents = "all";

    // darkBox.forEach((box) => {
    //   if (box !== element) box.style.pointerEvents = "all";
    // });
    // for (let i = 0; i < darkBox.length; i++) {
    //   if (darkBox[i] !== element) darkBox[i].style.pointerEvents = "all";
    // }
    previousBox = element;
    element.style.backgroundColor = "rgba(0,0,0,0)";
    element.style.pointerEvents = "none";
    // if (element.style.backgroundColor !== "rgba(0,0,0,1)") {
    //   element.style.pointerEvents = "none";
    // }
    // element.style.transition = "0.1s";
    // first = document.querySelector(".first");
    // first.style.pointerEvents = "all";
    // element.style.zIndex = "-1";
    // console.log(element.style.zIndex);
  });
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "black";
    element.style.pointerEvents = "all";
  });
});
