$(function () {
    $(".DevourButton").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = {
            devoured: true
        }
        console.log("======================================");
        console.log("burgers.js ID = " + id);
        console.log("======================================");
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(
            function () {
                console.log("Set devoured to true for id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $("#AddButton").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("======================================");
        console.log("Add Button Triggered");
        console.log("======================================");
        event.preventDefault();
        var newBurger = {
            name: $("#BurgerNameInput").val().trim()
        };
        console.log("======================================");
        console.log("burgers.js newBurger.name = " + newBurger.name);
        console.log("======================================");
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
