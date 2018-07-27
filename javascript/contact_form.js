/* =================================
  Modal Contact Info.
==================================== */
// Modal //
<link rel="stylesheet" href="../contact_form.js">
var modal = document.getElementById("Modal");

// Button Opens Modal //
var btn = document.getElementById("Btn");

// Closing Modal //
var span = document.getElementsByClassName("close")[0];

// Modal Opens //
btn.onclick = function() {
    modal.style.display = "block";
}

// Modal Closes //
span.onclick = function() {
    modal.style.display = "none";
}
