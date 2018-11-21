$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newdevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed sleep to", newdevoured);

                location.reload();
            }
        );
    });





});