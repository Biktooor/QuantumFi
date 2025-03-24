document.getElementById('How').addEventListener('click', function() {
    // Slide out "How" text
    document.getElementById('How').classList.add('slide-out');
    
    // Slide out logo
    document.getElementById('logo').classList.add('slide-out'); // Add the slide-out effect for logo

    // After the slide-out animation (0.5s), replace "How" with "Buy"
    setTimeout(function() {
        // Hide "How" and show "Buy"
        document.getElementById('How').style.display = 'none';
        document.getElementById('Buy').style.display = 'block'; // Make Buy visible

        // Trigger the slide-in transition for "Buy"
        document.getElementById('Buy').classList.add('slide-in');
    }, 500); // Delay matches the duration of the "How" slide-out animation
});
