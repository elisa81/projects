$(function () {
    $('#btn1').click(function () {
        console.log("This div container has: " + $('.container').html());
        $('.container').remove();
        console.log("Remove div: " + $('.container').html());
    });

    $('#btn2').click(function () {
        console.log("This div container has: " + $('.container').html());
        $('.container').empty();
        console.log("Empty div: " + $('.container').html());
    });




    $('#btn3').click(function () {
        var color = $('#div1').css("background-color");
        console.log(color);
        $('#result').text("The color is: " + color);
    });

    $('#btn4').click(function () {
        var color2 = $('#div1').css("background-color", 'pink');
        $('#result').text("The color is: " + color2);
    });




})