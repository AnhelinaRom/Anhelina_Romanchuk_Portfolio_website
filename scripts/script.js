document.querySelectorAll('.openBox').forEach(box => {
    box.addEventListener('click', function() {
        // Close any other open boxes
        document.querySelectorAll('.openBox').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('active');
            }
        });
        // Toggle the clicked box
        box.classList.toggle('active');
    });
});
