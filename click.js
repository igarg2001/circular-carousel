var p = document.querySelectorAll('.inner');
let arr_name=['Event 1','Event 2','Event 3','Event 4','Event 5'];
let arr_desc=['The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 1','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 2','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 3','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 4','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 5'];
function click_event(n){
    let q=n+1;
    document.getElementById('event-pic').innerHTML='<img src="neon'+q+'.jpg" style="height : 50vh; width : 35vw; border-radius : 15px;">';
    document.getElementById('event-name').innerHTML=''
    document.getElementById('event-name').innerHTML=arr_name[n];
    document.getElementById('event-desc').innerHTML='';
    document.getElementById('event-desc').innerHTML=arr_desc[n];
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
    document.getElementById('events').style.opacity = '1';
}
function closeEvents()
{   
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementById('events').style.opacity = '0';
    

}
function openContacts() {
    document.getElementById('contacts').style.opacity = '1';
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
    document.getElementById('events').style.opacity = '0';
    
    
}
function closeContacts()
{
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementById('contacts').style.opacity = '0';   

   
}
