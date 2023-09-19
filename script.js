function volume_sphere() {
    // Write your code here
    let r = document.getElementById("radius");
    let vol = document.getElementById("volume");
    let ra = r.value;
    let v = (4 * 22 / 7 * ra * ra * ra) / 3;
    vol.value = v;
}

// Ensure the form exists with the correct ID and attach the event listener
window.onload = function () {
    let form = document.getElementById('MyForm');
    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault(); // Prevent the default form submission
            volume_sphere(); // Call the volume_sphere function
        };
    }
};
