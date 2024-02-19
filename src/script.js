const seats = document.getElementsByClassName("seats");
const availableSeats = document.getElementById("availabeSeat");
const bookedSeats = document.getElementById("bookedSeats");
const seatChart = document.getElementById("sChart");
const tPrice = document.getElementById("tPrice");
const gPrice = document.getElementById("gPrice");
let aSeats = 8;
let bSeats = 0;

function addingSeat(seatName) {
  const newRow = seatChart.insertRow(); // Create a new row

  // Add cells (columns) to the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  // Create input fields for data entry
  cell1.innerHTML = seatName;
  cell2.innerHTML = "Economy";
  cell3.innerHTML = "550";
}
for (let seat of seats) {
  seat.addEventListener("click", (e) => {
    e.target.classList.add("btn-success");
    bSeats++;
    aSeats--;
    addingSeat(e.target.innerText);
    availableSeats.innerText = aSeats;
    bookedSeats.innerText = bSeats;
    tPrice.innerText = bSeats * 550;
    gPrice.innerText = bSeats * 550;
  });
}

const cBtn = document.getElementById("cBtn");
const cIn = document.getElementById("cIn");
const cupon = document.getElementById("cupon");

cBtn.addEventListener("click", (e) => {
  if (cIn.value === "NEW15") {
    gPrice.innerText = bSeats * 550 - (bSeats * 550 * 15) / 100;
    cupon.classList.add("hidden");
  } else if (cIn.value === "Couple 20") {
    gPrice.innerText = bSeats * 550 - (bSeats * 550 * 20) / 100;
    cupon.classList.add("hidden");
  }
});
