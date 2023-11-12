
var api="https://jsonplaceholder.typicode.com/users";
var output=" ";
fetch(api)
.then(res=>res.json())
.then(res=>{ 
            for(let i=0;i<res.length;i++)
            {
              
                output=output+`<tr>`
                output=output+`<td>${res[i]["id"]}</td>`
                output=output+`<td>${res[i]["name"]}</td>`
                output=output+`<td>${res[i]["username"]}</td>`
                output=output+`<td>${res[i]["email"]}</td>`
                output=output+`<td>${res[i]["phone"]}</td>`
                output=output+`<td>
                              <button id="btn1">Edit</button>&nbsp
                              <button id="btn2">Delete</button></td>`
                output=output+`</td>`
            
            }
            document.getElementById("body").innerHTML=output
                  
           }
     )