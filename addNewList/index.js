$(function () {
    // $("#btn").click(function(){
    //     $("ul").after('<li>cherry</li>' +"<li>watermelon</li>" + "<li>peach</li>").addClass('cool');
    // })

    // $("#btn").click(function () {
    //     $('ul').append('<li>cherry</li>' + "<li>watermelon</li>" + "<li>peach</li>").addClass('cool');
    // })

    $("#btn").click(function () {
        var newFruits = ["cherry", "peach", "watermelon", "orange"];

        $("#lists").each(function () {

            // for (i = 0; i < newFruits.length; i++) {
            //     $("ul").append("<li class='hot'>" + newFruits[i] + "</li>")
            // }

            for (i = 0; i < newFruits.length; i++) {
                $("#lists").prepend("<li class='cool'>" + newFruits[i] + "</li>")
            }
        });
    });


});