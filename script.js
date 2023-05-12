function myfunc(event){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var startingplace=document.getElementById("starting-place").value;
    var destination=document.getElementById("destination").value;
    var numberoftickets=document.getElementById("number-of-tickets").value;
    var hotelnecessity=document.getElementById("hotel-necessity").value;
    var numberofdays=document.getElementById("number-of-days").value;
    var paymentoptions=document.getElementById("payment-options").value;
    var email=document.getElementById("email").value;
    var phonenumber=document.getElementById("phone-number").value;

    localStorage.setItem('ls_name',name);
    localStorage.setItem('ls_starting-place',startingplace);
    localStorage.setItem('ls_destination',destination);
    localStorage.setItem('ls_number-of-tickets',numberoftickets);
    localStorage.setItem('ls_hotel-necessity',hotelnecessity);
    localStorage.setItem('ls_number-of-days',numberofdays);
    localStorage.setItem('ls_payment-options',paymentoptions);
    localStorage.setItem('ls_email',email);
    localStorage.setItem('ls_phone-number',phonenumber);
}