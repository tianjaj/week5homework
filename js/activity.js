
$(document).ready(function() {
    // Get all the cells that are selectable
    var selectableCells = $("tbody td:not(.not-selectable)");

    // Add click event handler to each selectable cell
    selectableCells.click(function() {
        // Toggle the 'selected' class on click
        $(this).toggleClass("selected");
    });
});