// // we want to create two instances of the counter function. this counter function has two parameters being the element(either the first counter or the second counter), and then a starting value for each of the counters.
// we also want to have a function that gets our elements and returns them if they exist and throws and error otherwise.
// so here we create a function that returns our element if that unique class exists(first-counter, second-counter) and if it does not, we will throw a specific error that will help our user to know exactly what is wrong. when we are done creating this function we are going to call it on our unique classes.
function getElement(selection) {
  const element = document.querySelector(selection);
  console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`check "${selection}",selector does not exist  `);
}
// above we have created two instances independent of each other

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDom = element.querySelector(".value");
    this.valueDom.textContent = value;
    //   next we select our buttons add an event listener, listening for a click event and using our already created functions on the prototype of our constructor function which has taken rot in all instances.
    // recall however that when we use this in our call back function for our buttons, trying to reference our created functions on the prototype that it will point to the button and not to the constructor function prototype so to fix that you use the bind method and invoke it on "this", which then points to the constructor function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    // event listeners on the buttons
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
    this.valueDom.style.color = 'green'
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
    this.valueDom.style.color = 'red'
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
    this.valueDom.style.color = "orange";
  }
}

const counterOne = new Counter(getElement(`.first-counter`), 50);
const counterTwo = new Counter(getElement(`.second-counter`), 100);
