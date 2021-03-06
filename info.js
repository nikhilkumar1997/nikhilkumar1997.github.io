let inputs = document.getElementsByClassName('input-name');
let phone = document.getElementById('phno');
let email = document.getElementById('mail');
let zipcode = document.getElementById('zip');
let selectItem = document.getElementsByClassName('select');



for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 15) {
            e.target.nextElementSibling.innerHTML = "Minimun of 3-15 characters are required";
            return false;
        } else if (e.target.value.length > 3 || e.target.value.length <= 15) {
            e.target.nextElementSibling.innerHTML = "";
            return true;
        }
    })
}

phone.addEventListener('input', (e) => {
    if (e.target.value == "") {
        e.target.nextElementSibling.innerHTML = "Please enter your phone number";
        return false;
    } else if (e.target.value != "") {
        var phoneno = /^[0-9]{10}$/;
        if (!phoneno.test(e.target.value)) {
            e.target.nextElementSibling.innerHTML = "Please enter a valid phone number";
            return false;
        } else {
            e.target.nextElementSibling.innerHTML = "";
            return true;
        }
    }

})
email.addEventListener('input', (e) => {
    if (e.target.value == "") {
        e.target.nextElementSibling.innerHTML = "Please enter a valid e-mail address.";
        return false;
    } else if (email.value != "") {
        var emailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (!emailformat.test(e.target.value)) {
            e.target.nextElementSibling.innerHTML = "Please enter a valid email address";
            return false;
        } else {
            e.target.nextElementSibling.innerHTML = "";
            return true;
        }
    }
})
zipcode.addEventListener('input', (e) => {
    if (e.target.value == "") {
        e.target.nextElementSibling.innerHTML = "Please enter your zipcode";
        return false;
    } else if (e.target.value != "") {
        var zip = /^[0-9]{6}$/;
        if (!zip.test(e.target.value)) {
            e.target.nextElementSibling.innerHTML = "Please enter a valid zipcode";
            return false;
        } else {
            e.target.nextElementSibling.innerHTML = "";
            return true;
        }
    }
})

for (var i = 0; i < selectItem.length; i++) {
    selectItem[i].addEventListener('click', (e) => {
        if (e.target.value == "") {
            e.target.nextElementSibling.innerHTML = "Please select an option";
            return false;
        } else {
            e.target.nextElementSibling.innerHTML = "";
            return true;
        }
    })
}
