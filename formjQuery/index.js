$(document).ready(function () {

    // $(":checkbox").each(function () {
    //     console.log($(this).val());
    // });

    // console.log($("input[name='fruits']").length);
    // console.log($("#myForm2").children("input[name='gender']").length);

    // console.log($("select#hobby option:selected").val());

    $("#myForm3").submit(function () {
        checkForm();

        //NAME CHECK ---------------------------------------
        function checkForm() {
            var name = $('#name');
            var expression = /^[a-xA-Z()]+$/;
            var nLength = name.val().length;
            if (name.val().match(expression)) {
                if (nLength >= 1 && nLength <= 20 && name.val().match(expression)) {
                    console.log('name ok');
                    if (!checkGender()) {
                        return false;
                    }
                    if (!checkFlavor()) {
                        return false;
                    }
                    var email = $('#email');
                    var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
                    // if (isValidEmail(email.value)) {
                    if (email.val().match(regExp)) {
                        // email.style.borderBottomColor = "green";
                        console.log('ok email');

                        //PHONE NUM CHECK ----------------------------------------------
                        var tel = $('#phone');
                        if (phone.val().match(/^[0-9-]+$/) && (phone.val().length >= 8)) {
                            // phone.style.borderBottomColor = "green";
                            console.log('tel ok');

                            // ID CHECK ----------------------------------------------------
                            var userID = $('#username');
                            if (userID.val() != "" && userID.val().length >= 6 && userID.val().length <= 8) {
                                console.log("ID ok");
                                console.log(userID.val().length);

                                //PASSWORD CHECK -----------------------------------------------
                                var userPass1 = $('#pass1');
                                var userPass2 = $('#pass2');
                                if ((userPass1.val().length = "") || (userPass1.val().length >= 5 && userPass1.val().length <= 10 && ((userPass1.val() ===
                                        userPass2.val())))) {
                                    console.log('password matches!');

                                    //TERMS CHECKBOX CHECK -------------------------------------------    
                                    var checkbox = $('#check');
                                    if (checkbox.checked == true) {
                                        console.log('Terms agreed!');
                                        document.write("<div id='reg'><h3>Hello " + $('#name')
                                            .val() +
                                            "!</h3><br>");
                                        document.write("<p>OK!</p><br>");

                                        //RETURN FALSES ----------------------------------------------------
                                    } else {
                                        $('#check').focus();
                                        alert('Agree to Terms & Conditions');
                                        console.log('Terms not agreed');
                                        return false;
                                    }
                                } else {
                                    console.log("does NOT match");
                                    userPass1.style.borderBottomColor = "red";
                                    userPass2.style.borderBottomColor = "red";
                                    return false;
                                }
                            } else {
                                console.log('ID not good');
                                userID.style.borderBottomColor = "red";
                                return false;
                            }
                        } else {
                            alert("try phone number again");
                            phone.style.borderBottomColor = "red";
                            return false;
                        }
                    } else {
                        alert('invalid email');
                        console.log('wrong email');
                        email.style.borderBottomColor = "red";
                        return false;
                    }
                } else if (name.val() == "" || name.val() == "null") {
                    alert("fill in name");
                    name.style.borderColor = "red";
                    return false;
                } else {
                    alert('4~8 characters');
                    name.style.borderBottomColor = "red";
                    return false;
                }
            } else {
                alert('alphabet only');
                name.style.borderBottomColor = "red";
                return false;
            }
            // return true;
        }

        //GENDER CHECK -----------------------------------------------
        function checkGender() {
            var radio = 0;
            for (var i = 0; i < myForm3.gender.length; i++) {
                if (myForm3.gender[i].checked == true) {
                    radio++;
                }
            }
            if (radio == 0) {
                alert('check gender');
                return false;
            } else {
                return true;
            }
        }

        //FLAVOR SELECT ---------------------------------------------------
        function checkFlavor() {
            if ($('#iceCream').selectedIndex == '') {
                alert("Please choose one");
                return false;
            } else {
                console.log($('#iceCream').val())
                return true;
            }
        }
        return true;
    });

});