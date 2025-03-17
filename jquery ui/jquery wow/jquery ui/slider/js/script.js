$(document).ready(function() {



    // var handle = $("#custom-handle");
    // $("#slider").slider({
    //     create: function() {
    //         handle.text($(this).slider("value"));
    //     },
    //     slide: function(event, ui) {
    //         handle.text(ui.value);
    //     }
    // });



    $("#slider").slider({
        value: 20,
        min: 0,
        max: 500,
        step: 20,

    })

})