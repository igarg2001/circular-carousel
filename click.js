var p = document.querySelectorAll('.inner');
let arr_name=['Event 1','Event 2','Event 3','Event 4','Event 5'];
let arr_desc=['The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 1','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 2','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 3','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 4','The phrase "Lorem ipsum dolor sit amet consectetuer" appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom. Actually, it is nonsense. <br> Event 5'];
let event_flag=true;
function click_event(n){
    let q=n+1;
    if(event_flag==true){
        if(window.innerWidth>1000){
            document.getElementById('event-pic').innerHTML='<img src="neon'+q+'.jpg" style="height : 50vh; width : 35vw; border-radius : 15px;">';
        }
        else if(window.innerWidth>600&&window.innerWidth<800){
            document.getElementById('event-pic').innerHTML='<img src="neon'+q+'.jpg" style="height : 30vw; width : 30vw; border-radius : 50%;">';
            document.getElementById('heading').style.display='none'
            document.getElementById('heading-m').style.display='none'
            document.getElementById('logo').style.marginBottom='20vh'
            document.getElementById('contact-us').style.display='none'
            document.getElementById('nav').style.height='0px'
        }

        else {
            document.getElementById('event-pic').innerHTML='<img src="neon'+q+'.jpg" style="height: 50vw; width : 50vw; border-radius : 50%;">';
            document.getElementById('heading').style.display='none'
            document.getElementById('heading-m').style.display='none'
            document.getElementById('logo').style.marginBottom='20vh'
            document.getElementById('contact-us').style.display='none'
            document.getElementById('nav').style.height='0px'
        }
        document.getElementById('event-name').innerHTML=''
        document.getElementById('event-name').innerHTML=arr_name[n];
        document.getElementById('event-desc').innerHTML='';
        document.getElementById('event-desc').innerHTML=arr_desc[n];
        document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
        document.getElementById('events').style.opacity = '1';
        document.getElementById('events').style.zIndex = '1000'; //Wadhwa's contri ;-)
        document.body.style.backdropFilter = 'blur(5px)';
        document.body.style.MozBackdropFilter = 'blur(5px)';
        event_flag=false;
        
    }
}
function closeEvents()
{   
        document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
        document.getElementById('events').style.opacity = '0';
        document.getElementById('events').style.zIndex = '0'; 
        document.body.style.backdropFilter = 'blur(0px)';
        event_flag=true;
        console.log('event-closed');
        document.getElementById('heading').style.display=''
        document.getElementById('heading-m').style.display=''
        document.getElementById('logo').style.marginBottom=''
        document.getElementById('contact-us').style.display=''
        document.getElementById('nav').style.height=''
    

}
function openContacts() {
    if(window.innerWidth>700){
        event_flag=false;
        document.getElementById('contacts').style.opacity = '1';
        document.getElementById('contacts').style.zIndex = '1000';
        document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
        document.getElementById('events').style.opacity = '0';
        document.body.style.backdropFilter = 'blur(5px)';
        document.getElementById('heading').style.display='none'
        document.getElementById('heading-m').style.display='none'
        document.getElementById('logo').style.display='none'
        document.getElementById('contact-us').style.display='none'
        document.getElementById('nav').style.height='0px'
    }
    else{
         event_flag=false;
        document.getElementById('contacts').style.opacity = '1';
        document.getElementById('contacts').style.zIndex = '1000';
        document.getElementsByClassName('rotating-slider')[0].style.opacity = '0';
        document.getElementById('events').style.opacity = '0';
        document.body.style.backdropFilter = 'blur(5px)';
        document.getElementById('heading').style.display='none'
        document.getElementById('heading-m').style.display='none'
        document.getElementById('logo').style.display='none'
        document.getElementById('contact-us').style.display='none'
        document.getElementById('nav').style.height='0px'
        document.getElementsByClassName('contact-2')[0].style.height='0px'
        document.getElementsByClassName('contact-4')[0].style.height='0px'
        document.getElementsByClassName('contact-6')[0].style.height='0px'
    }
    
}
function closeContacts()
{
    event_flag=true;
    document.getElementsByClassName('rotating-slider')[0].style.opacity = '1';
    document.getElementById('contacts').style.opacity = '0'; 
    document.getElementById('contacts').style.zIndex = '0';  
    document.body.style.backdropFilter = 'blur(0px)';
    console.log('working');
    document.getElementById('heading').style.display='';
    document.getElementById('heading-m').style.display='';
    document.getElementById('logo').style.display=''
    document.getElementById('contact-us').style.display=''
    document.getElementById('nav').style.height='';
    document.getElementsByClassName('contact-2')[0].style.height=''
    document.getElementsByClassName('contact-4')[0].style.height=''
    document.getElementsByClassName('contact-6')[0].style.height=''
   
}
console.log(window.innerWidth);