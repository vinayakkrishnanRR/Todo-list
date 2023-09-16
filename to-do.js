var list = document.getElementById("list");
var logout = document.getElementById("logout");
var tbody = document.getElementById("tbody");
var box = document.getElementById("box");

var count = 0;

list.onclick = function collect(){
    console.log('request');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
           var jsnfile = this.responseText;
           test(jsnfile);
           console.log('call display')
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos","true");
    xhttp.send();
}

function test(data){
    var jsonlist = JSON.parse(data);
    for(var n=0;n<jsonlist.length;n++){
        if(jsonlist[n].completed == true){
            tbody.innerHTML += `<tr> <th scope= "row"> ${jsonlist[n].id}</th> <td>${jsonlist[n].title}</td><td><input class="form-check-input me-1" type="checkbox" checked="true" disabled = "true"></input></td></tr>`
        }
        else{
            tbody.innerHTML += `<tr> <th scope= "row"> ${jsonlist[n].id}</th> <td>${jsonlist[n].title}</td><td><input class="form-check-input me-1" type="checkbox" onclick="val(this)" id="box"></input></td></tr>`
        }
    }
}

function val(c){
    if(c.checked){
        count++;
        console.log(count);
        alertmsg();
    }
    else{
        count--;
        console.log(count);
    }
}



function alertmsg(){
    let mypromise = new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    mypromise.then(function(i){
        alert(i);
    })
}

logout.onclick = function(){
    window.location.href = "./index.html";
}