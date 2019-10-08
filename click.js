var p = document.querySelectorAll('.inner');
let arr_name=['Event 1','Event 2','Event 3','Event 4','Event 5'];
let arr_desc=['This is the description for Event 1','This is the description for Event 2','This is the description for Event 3','This is the description for Event 4','This is the description for Event 5'];
function click_event(n){
    let q=n+1
  
    document.getElementById('event-pic').style.backgroundImage ="url('neon'"+q+"'.jpg')";
    document.getElementById('event-name').innerHTML=''
    document.getElementById('event-name').innerHTML=arr_name[n];
    document.getElementById('event-desc').innerHTML='';
    document.getElementById('event-desc').innerHTML=arr_desc[n];
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
    document.getElementsByClassName('events')[0].style.opacity = '1';
}
function closeEvents()
{
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementsByClassName('events')[0].style.opacity = '0';   
}
function openContacts() {
    document.querySelectorAll('.contacts')[0].style.opacity = '1';
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
    document.querySelectorAll('.contacts')[0].style.transition = '0.5s ease-in';
    document.getElementsByClassName('events')[0].style.opacity = '0';  
}
function closeContacts()
{
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementsByClassName('contacts')[0].style.opacity = '0';   
    document.querySelectorAll('.contacts')[0].style.transition = '0.5s ease-out';
}