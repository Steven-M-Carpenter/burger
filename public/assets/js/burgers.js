//=================================================================
// Process all events for the application user interface
//=================================================================
$(function () {
    //=================================================================
    // Detect when the user chooses to devour a burger
    //=================================================================
    $(".DevourButton").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = {
            devoured: true
        }
        //=================================================================
        // Make the PUT request to update the burger status
        //=================================================================
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(
            function () {
                //=================================================================
                // Reload the page to get the updated list
                //=================================================================
                location.reload();
            }
        );
    });


    //=================================================================
    // Detect when the user chooses to add another a burger
    //=================================================================
    $("#AddButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#BurgerNameInput").val().trim()
        };
        //=================================================================
        // Make the POST request to add the burger
        //=================================================================
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                //=================================================================
                // Reload the page to get the updated list
                //=================================================================
                location.reload();
            }
        );
    });
});
