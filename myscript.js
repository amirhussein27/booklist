let myinp1=document.getElementById("myinp1")
let myinp2=document.getElementById("myinp2")
let myinp3=document.getElementById("myinp3")
let mytable=document.getElementById("mytable")
let mytr=document.getElementById("mytr")

let mybtn=document.getElementById("mybtn")
mybtn.addEventListener('click',function(){
  localStorage.setItem("name1", myinp1.value);
  localStorage.setItem("name2", myinp2.value);
  localStorage.setItem("name3", myinp3.value);

  console.log(localStorage.getItem("name2"));
  console.log(myinp1.value);

let newtr=document.createElement("tr")
let newtd1=document.createElement("td")
newtd1.innerText=myinp1.value
newtr.appendChild(newtd1)
let newtd2=document.createElement("td")
newtd2.innerText=myinp2.value
newtr.appendChild(newtd2)
let newtd3=document.createElement("td")
newtd3.innerText=myinp3.value
newtr.appendChild(newtd3)
mytable.appendChild(newtr)

})
let newtr=document.createElement("tr")
let newtd1=document.createElement("td")
newtd1.innerText=localStorage.getItem("name1")
newtr.appendChild(newtd1)
let newtd2=document.createElement("td")
newtd2.innerText=localStorage.getItem("name2")
newtr.appendChild(newtd2)
let newtd3=document.createElement("td")
newtd3.innerText=localStorage.getItem("name3")
newtr.appendChild(newtd3)
mytable.appendChild(newtr)

