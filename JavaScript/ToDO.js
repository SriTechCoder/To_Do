var myNodelist=document.getElementsByTagName('li');
var i;
for(i=0; i< myNodelist.length;i++)
{
    var span=document.createElement('span');
    var closeBtn=document.createTextNode('\u00D7');
    span.className='close';
    span.append('closeBtn');
    myNodelist[i].appendChild(span);

}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
document.addEventListener("DOMContentLoaded",function(){
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {       
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
})





function newElement(){

    var listValue=document.createElement('li');
    var inputValue= document.getElementById('myInput').value;
    var t= document.createTextNode(inputValue);
    listValue.appendChild(t);
    if(inputValue ==""){
        alert("Enter Some Tasks!");

    }else {
        document.getElementById("myLis").appendChild(listValue);
    }
    document.getElementById("myInput").value="";  
    
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listValue.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
   }
}