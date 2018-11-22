$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: !newdevoured
        };

        console.log("id: ", id);
        console.log("newdevoured: ", newdevoured);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newdevoured);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function() {
        event.preventDefault();

        var name = $("#bu").val().trim();
        console.log("name", name);

        var newBurger = {
            burger_name: name,
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });

});