const seats = document.getElementsByClassName("seats");
const availabelSeats = document.getElementById("availabeSeat");
let aSeats = 8;

for (let seat of seats) {
  seat.addEventListener("click", (e) => {
    e.target.classList.add("btn-success");
    aSeats--;
    avalable
  });
}
