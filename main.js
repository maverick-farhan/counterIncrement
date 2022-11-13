const counter = document.querySelectorAll(".number");
counter.forEach((elems) => {
  elems.innerHTML = 0;

  const updateCounter = () => {
    debugger;
    const target = +elems.getAttribute("data-target");
    const startingCount = +elems.innerHTML;
    const increment = target / 100;

    if (startingCount < target) {
      elems.innerHTML = `${Math.round(startingCount + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      elems.innerHTML = target;
    }
  };

  updateCounter();
});
