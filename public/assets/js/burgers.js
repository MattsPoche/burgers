$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newdevoured
        };

        console.log("id: ", id);
        console.log("newdevoured: ", newdevoured);

        // Send the PUT request.
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newdevoured);

                location.reload();
            }
        );
    });





});