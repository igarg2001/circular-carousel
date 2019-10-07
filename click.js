var p = document.querySelectorAll('.inner');
let arr_name=['Event 1','Event 2','Event 3','Event 4'];
let arr_desc=['This is the description for Event 1','This is the description for Event 2','This is the description for Event 3','This is the description for Event 4'];
function click_event(n){
    this.textContent = '';
    document.getElementById('event-pic').innerHTML ='<img src="neon8.jpg" style="height : 50px; width : 50px">';
    document.getElementById('event-name').innerHTML=''
    document.getElementById('event-name').innerHTML=arr_name[n];
    document.getElementById('event-info').innerHTML='';
    document.getElementById('event-info').innerHTML=arr_desc[n];
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
}
function closeContacts()
{
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementsByClassName('contacts')[0].style.opacity = '0';   
}