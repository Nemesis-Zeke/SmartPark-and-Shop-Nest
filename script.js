const ratePerHour = 50;

function bookSlot(slot, slotNumber) {

    if (slot.classList.contains("booked")) {
        return;
    }

    const name = document.getElementById("name").value;
    const vehicle = document.getElementById("vehicle").value;
    const hours = document.getElementById("hours").value;

    if (!name || !vehicle || !hours) {
        document.getElementById("message").innerText =
            "⚠️ Please enter all booking details.";
        return;
    }

    let timeLeft = hours * 3600;
    const totalCost = hours * ratePerHour;

    slot.classList.remove("available");
    slot.classList.add("booked");

    document.getElementById("message").innerText =
        `✅ Slot ${slotNumber} booked by ${name} (${vehicle}) | ₹${totalCost}`;

    const timer = setInterval(() => {
        let hrs = Math.floor(timeLeft / 3600);
        let mins = Math.floor((timeLeft % 3600) / 60);
        let secs = timeLeft % 60;

        slot.innerHTML = `
            Slot ${slotNumber}
            <small>${hrs}h ${mins}m ${secs}s</small>
        `;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            slot.classList.remove("booked");
            slot.classList.add("available");
            slot.innerText = `Slot ${slotNumber}`;
        }
    }, 1000);
}
