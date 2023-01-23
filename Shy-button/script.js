var shy = document.getElementById("shy");

shy.onmouseover = () => {
  console.log("hi");
  shy.style.left = Math.floor(Math.random() * 1200) + "px";
  shy.style.top = Math.floor(Math.random() * 670) + "px";
};
