function validation() {
    var res = document.getElementById("fname").value
    if (res.length == "") {
        alert("First name must be filled");
        return false;
    } else if (res.lenght <= 3 || res.length >= 15) {
        alert("First name must contain 3-15 characters");
        return false;

    }
    var res1 = document.getElementById("lname").value;
    if (res1.length == "") {
        alert("last name must be filled");
        return false;
    } else if (res1.lenght <= 3 || res.lenght >= 15) {
        alert("last name must contain 3-15 characters");
        return false;
    }
    var res2 = document.getElementById("phno").value;
    if (res2.length == "" || isNaN(res2)) {
        alert("Phone number must be within 0-9");
        return false;

    }
    var res3 = document.getElementById("mail");
    var filter = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!filter.test(res3.value)) {
        alert("Please provide valid email address");
        return false;
    }
    var res4 = document.getElementById("zip").value;
    if (res4.length == "" || isNaN(res4)) {
        alert("Zip code must contain numbers");
        return false;
    }


}