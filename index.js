document.getElementById('tab-home').addEventListener('click', () =>showTab('Home'))
document.getElementById('tab-blog').addEventListener('click', ()=>showTab('Blogs'))
document.getElementById('tab-share').addEventListener('click', ()=>showTab('Share'))
document.getElementById('tab-about').addEventListener('click', ()=>showTab('About-Us'))

function showTab(activeTabId)
{
    const tabs =document.getElementsByClassName("tab-content");
    for(const tab of tabs)
    {
        tab.style.display="none";
    }
    document.getElementById('submit-form').style.display="none";
    document.getElementById(activeTabId).style.display="contents";
    document.getElementById('game-Id').style.display="none";
   // document.getElementById('submit-form').style.display="none";
}
document.getElementById('game').addEventListener('click', ()=>show('numbergame'))

function show(activeTabId)
{
    document.getElementById('game-Id').style.display="none";
    document.getElementById(activeTabId).style.display="contents";
}
document.getElementById('start').addEventListener('click', ()=>start())
//document.getElementById('pause').addEventListener('click', ()=>pause())
//document.getElementById('resume').addEventListener('click', ()=>resume())
document.getElementById('stop').addEventListener('click', ()=>stop())
let num=1;
let count;

function start()
{   
    document.getElementById('start').enabled=true;
     document.getElementById('count').innerHTML=num;
     num++;
    count=setTimeout(start,1000);
    document.getElementById('start').disabled=true;
}
/*function pause()
{
   clearTimeout(count);
}
function resume()
{
   start(); 
}*/
 function stop()
 {  

    clearTimeout(count);
    document.getElementById('start').disabled=false;
    num=0;
    document.getElementById('count').innerHTML=num;
    document.getElementById('game-Id').style.display="contents";
    document.getElementById('numbergame').style.display="none";
 }

 document.getElementById('form-id').addEventListener('submit', (e)=> {e.preventDefault(); print(e)});

 function print(event)
 {  
   document.getElementById('game-Id').style.display="none";
    let submitDetails="<h2>Submitted Details</h2>";
    const name=document.getElementById('name').value;
    const gender=document.getElementById('gender').value;
    const email=document.getElementById('email').value;
    const phoneNumber=document.getElementById('number').value;
   const dob=document.getElementById('birthdate').value;
    const address=document.getElementById('address').value;
    const language=document.getElementById('Language').value;
    const blog=document.getElementById('blog').value;
    submitDetails+= `
       <h3><p>Name: ${name}</p>
       <p>Gender: ${gender}</p>
       <p>Email: ${email}</p>
       <p>Phone Number: ${phoneNumber}</p>
       <p>Date of Birth: ${dob}</p>
       <p>Address: ${address}</p>
        <p>Language: ${language}</p>
       <p>Blog: ${blog}</p></h3>
    `;   
   document.getElementById('submit-form').innerHTML=submitDetails;
   document.getElementById('submit-form').style.display="contents";

 }
 