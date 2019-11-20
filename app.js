const persons = new Array("Hasna", "Quentin", "Rihab", "Pierre", "Tony", "Laura", "Maxime H", "Maxime L", "Dylan", "Yannick", "Tristan", "David")

persons.sort(() => Math.random() - 0.5)

persons.forEach((value, key) => {
  setTimeout(() => {
    document.querySelector(`[data-place="${key}"]`).textContent = value;
  }, key * 1000)
})
