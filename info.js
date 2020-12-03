function validation() {
    var res = document.getElementById("fname").value
    if (res.length == "") {
        document.getElementById("message").innerHTML = "First name must be filled";
        return false;
    } else if (res.lenght <= 3 || res.length >= 15) {
        document.getElementById("message").innerHTML = "First name must contain 3-15 characters";
        return false;

    }
    var res1 = document.getElementById("lname").value;
    if (res1.length == "") {
        document.getElementById("message1").innerHTML = "Last name must be filled";
        return false;
    } else if (res1.lenght <= 3 || res.lenght >= 15) {
        document.getElementById("message1").innerHTML = "last name must contain 3-15 characters";
        return false;
    }
    var res2 = document.getElementById("phno").value;
    if (res2.length == "" || isNaN(res2)) {
        document.getElementById("message2").innerHTML = "Phone number must be within 0-9";
        return false;

    }
    var res3 = document.getElementById("mail");
    var filter = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!filter.test(res3.value)) {
        document.getElementById("message3").innerHTML = "Please provide valid email address";
        return false;
    }
    var res4 = document.getElementById("zip").value;
    if (res4.length == "" || isNaN(res4)) {
        document.getElementById("message4").innerHTML = "Zip code must contain numbers";
        return false;
    }


}
