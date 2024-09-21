function toggleSeat(seat) {
    if (!seat.classList.contains('occupied')) {
        seat.classList.toggle('selected');
        updateSelectedSeats();
    }
}

function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    document.getElementById('selected-seats').innerText = selectedSeats.length;
}

document.getElementById('book-button').addEventListener('click', function() {
    const selectedCount = document.querySelectorAll('.seat.selected').length;
    if (selectedCount > 0) {
        alert('Seats booked successfully!');
        // Optional: You could clear selections after booking
        // document.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));
        updateSelectedSeats(); // Update the count
    } else {
        alert('Please select at least one seat to book.');
    }
});
