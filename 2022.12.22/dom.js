function colorSecond() {
    // var second = document.getElementById('second');
    var second = document.documentElement.childNodes[2].childNodes[3];
    second.style.backgroundColor = '#45b69c';
    second.style.textAlign = "center";
}
colorSecond();
function colorLi() {
    var li = document.documentElement.childNodes[2].getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#ffe757';
        li[i].style.textAlign = 'center';
    }
}
colorLi();
function colorOnlyThisLi() {
    var li = document.documentElement.childNodes[2].childNodes[7].getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#45b69c';
        li[i].style.textTransform = 'uppercase';
    }
}
colorOnlyThisLi();
function colorActive() {
    // var li = document.getElementsByClassName('active');
    // console.log(li);
    // li.style.backgroundColor = '#55b8fe';
    var li = document.documentElement.childNodes[2].childNodes[11].childNodes[1].firstElementChild;
    li.style.backgroundColor = '#55b8fe';
}
colorActive();
function alertLi() {
    var al = document.documentElement.childNodes[2].childNodes[17].childNodes[3].innerHTML;
    alert(al);
}
alertLi();
function changeText(string) {
    var text = document.documentElement.childNodes[2].childNodes[17].childNodes[7];
    text.textContent = string;
}
changeText("You have to contact us!");
function createDropDown(arr, string) {
    var x = document.getElementById(string);
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.text = arr[i];
        x.add(option);
    }
}
createDropDown(["basketball", "voleyball", "handball", "football"], "mySelect");
createDropDown(["mercedes", "audi", "vw", "bmw"], 'last');  
//nisam odradio prvi div zato što mislim da će da se poremeti struktura u DOM-u,
//moja je greška što sam radio sve zadatke u jednom fajlu. Ako treba odradiću
//sve posebno..

// Nema potrebe da radis posebno. Malo stranica poludi, ali ne brinem za tebe kao sto rekoh :) 

function validate() {
//     var fname = document.getElementById('fname');
//    if (!fname.hasAttributes()) {
//     fname.style.borderColor = '#55b8fe';
//    }
// var fname = document.forms["form"]["fname"].value;
// if (fname == "") {
//     alert("The firstname must be filled in!")
// }
// var lname = document.forms["form"]["lname"].value;
// if (lname == "") {
//     alert("The lastname must be filled in!")
// }
// var address = document.forms["form"]["address"].value;
// if (address == "") {
//     alert("The address must be filled in!")
// }
// var city = document.forms["form"]["city"].value;
// if (city == "") {
//     alert("The city name must be filled in!")
// }
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var address = document.getElementById('address');
var city = document.getElementById('city');
if (!fname.hasAttribute(/[a-z]/)) {
    // alert("The firstname must be filled in!");
    fname.style.borderColor = 'red';
}
if (!lname.hasAttribute(/[a-z]/)) {
    // alert("The firstname must be filled in!");
    lname.style.borderColor = 'red';
}
if (!address.hasAttribute(/[a-z]/)) {
    alert("The address must be filled in!");
}
if (!city.hasAttribute(/[a-z]/)) {
    alert("The city must be filled in!");
}
}
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders
