let xhr = new XMLHttpRequest()
let docHTML = document.getElementById('teste')
xhr.open("GET", "/dataset.xml", true )
xhr.send()
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        render ()
  }
  
  
}

render = ()=> {
x = xhr.responseXML.getElementsByTagName("dog")[2]
y = x.getElementsByTagName("raca")[0].textContent
img = x.getElementsByTagName ("foto")[0].textContent
docHTML.innerHTML = `<p> ${y} </p>
<img src="${img}">
`



console.log(x)
}