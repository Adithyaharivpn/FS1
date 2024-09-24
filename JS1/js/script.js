var head = document.getElementById("head1");
console.log(head);
head.style.color="pink";
head.textContent="Text content changed";
head.innerHTML="<h6>h1 tag changed to h6</h6>";

var list=document.getElementsByClassName("list");
console.log(list);
for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor="pink";
    
}

var t=document.getElementsByTagName("li");
t[0].style.color="red";

let val=document.querySelector("input");
val.value="name";
val.style.backgroundColor="pink";

var save=document.querySelector("#btn");
save.style.backgroundColor="pink";


