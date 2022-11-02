var username = document.querySelector('.username')
var removeusertwo = document.querySelector('.two')
var removeuserone = document.querySelector('.one')
var req = document.querySelector('.req')
var conn = document.querySelector('.conn')
var connnumber=parseInt(conn.innerText)
var count = req.innerText
console.log(connnumber)


function ChangeName(){
    username.innerText = 'Khaled';
}

function remove(){
    removeuserone.remove();
    req.innerText=count-1;
    count--;
}

function add(){
    remove();
    conn.innerText=connnumber + (1);
    connnumber++;
}

function remove1(){
    removeusertwo.remove();
    req.innerText=count-1;
    count--;
}
function add1(){
    remove1();
    conn.innerText=connnumber+1;
    connnumber++;
}