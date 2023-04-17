let box = document.querySelector("main");

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`FizzBuzz`);
        box.innerHTML += `<div class="m-2 p-5 text-center bg-danger col-1">FizzBuzz</div>`
    } else if (i % 3 == 0) {
        console.log(`Fizz`);
        box.innerHTML += `<div class="m-2 p-5 text-center bg-success col-1">Fizz</div>`
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
        box.innerHTML += `<div class="m-2 p-5 text-center bg-warning col-1">Buzz</div>`
    } else {
        console.log(`Valore i: ${i}`);
        box.innerHTML += `<div class="m-2 p-5 text-center bg-primary col-1">${i}</div>`
    }

}