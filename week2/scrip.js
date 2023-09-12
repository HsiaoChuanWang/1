//Request 1:
const clickwelcome=document.getElementsByTagName('h2');

clickwelcome[0].addEventListener('click',(event)=>{
    event.target.textContent="Have a Good Time!";
})

//Request 2:
const icons=document.querySelector('.icons');
const closeButton=document.querySelector('.closebutton');
const showList=document.querySelector('.showlist');

icons.addEventListener('click',()=>{
    showList.style.display='block';    
})

closeButton.addEventListener('click',()=>{
    if(showList.style.display==='block'){
        showList.style.display='none';
    }
    else{
        showList.style.display='block';
    }
})

//Request 3:
const clickAction=document.querySelector('.call');
const boxes2=document.querySelector('.boxes2');

clickAction.addEventListener('click',()=>{
    boxes2.style.display="flex";
})