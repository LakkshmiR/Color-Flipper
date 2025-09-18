const colors = ["red", "green", "blue", "purple", "orange", "rebeccapurple"];
//for anything random in js Math.random() 0-1

const handleChange = () => {
  const random = Math.floor(Math.random() * colors.length);
  console.log(random);
  const selectedColor = colors[random];
  console.log(selectedColor);
  document.documentElement.style.setProperty("--bg-color", selectedColor);
};
