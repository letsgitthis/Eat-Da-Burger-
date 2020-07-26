$(function() {
    $(".submit").on("click", function(event) {
        event.preventDefault();

        var name = {
            name: $('#burgers').val().trim(),
        };

        $.ajax("/burgers", {
            type: "POST",
            data: name
        }).then(
            function() {
                console.log("Burger Added!");
                location.reload();
            }
        );
    });

    $('.eatMe').click(function() {
        let id = $(this).data('id');

        let devourState = {
            devoured: true
        }

        $.ajax(`/burgers/${id}`, {
            method: 'PUT',
            data: devourState
        }).then(function(data) {
            console.log("Burger was Eaten!")
            location.reload();
        })
    })
});