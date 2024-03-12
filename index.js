document.getElementById('tab-home').addEventListener('click', () =>showTab('Home'))
document.getElementById('tab-blog').addEventListener('click', ()=>showTab('Blogs'))
document.getElementById('tab-share').addEventListener('click', ()=>showTab('Share'))
document.getElementById('tab-about').addEventListener('click', ()=>showTab('About-Us'))
document.getElementById('tab-list').addEventListener('click', ()=>showTab('table-div'))
document.getElementById('tab-object').addEventListener('click', ()=>showTab('object-div'))

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

var list=["Anjani","HTML","CSS","JS","Webpage"];

function renderTable()
{  const heading=document.createElement("h1");
    heading.textContent="Rendering list of items Task";
   var table=document.getElementById("table");
   table.innerHTML="<tr><th>Name</th><th>Deletion Operation</th></tr>";
    list.forEach(function(item, index){
      var row=table.insertRow();
      var c1=row.insertCell(0);
      var c2=row.insertCell(1);
      c1.textContent=item;
      console.log("hello");
      var del=document.createElement("button");
      del.textContent="Delete";
     del.onclick=function()
     {
        deleteItem(index);
     };
     c2.appendChild(del);
    });
}

function deleteItem(index)
{
   list.splice(index,1);
   renderTable();
}
function addItem()
{
   var newItem=document.getElementById("newitem").value;
   if(newItem.trim()==="")
   {
      alert("enter any name");
      return;
   }
   list.push(newItem);
   renderTable();
   document.getElementById("newitem").value=" ";

}
renderTable();

function person(name,email)
{
   const obj={};
   obj.name=name;
   obj.email=email;
   return obj;
}
const persons=[
new person("anjani","anjani@gmail.com"),
new person("anjali","anjali@gmail.com"),
new person("anoosha","anoosha@gmai.com"),
new person("anusha","anusha@gmail.com"),
new person("keerthana","keerthana@gmail.com"),
new person("mamatha","mamatha@gmail.com"),
new person("nagusha","nagusha@gmail.com"),
new person("nikitha","nikitha@gmail.com"),
new person("rekha","rekha@gmail.com"),
new person("shailaja","shailaja@gmail.com"),
new person("sreeja","sreeja@gmail.com"),
new person("usha sri","ushasri@gmail.com"),
new person("varun","varun@gmail.com"),
new person("vinay sai","vinaysai@gmail.com")
];

function renderTable_interns()
{  
   const div2=document.createElement("div");
   document.body.appendChild(div2);
   div2.className="tab-content";
   div2.id="object-div";
   const heading=document.createElement("h1");
   heading.textContent="Object Task";
   div2.appendChild(heading);
   const table1=document.createElement("table");
   table1.innerHTML="<tr><th>Name</th><th>Email</th></tr>";
   persons.forEach(p =>
   {
      var row=table1.insertRow();
      var c1=row.insertCell(0);
      var c2=row.insertCell(1);
      c1.textContent=p.name;
      c2.textContent=p.email;
   });
   div2.appendChild(table1);

}
renderTable_interns();

function toggleNavbar(){
   var navbar= document.querySelector('.header');
   navbar.classList.toggle('active');
 }