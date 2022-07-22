function fine(){
    var name=document.getElementById("bye1").value;
    var email=document.getElementById("bye2").value;
    var subject=document.getElementById("bye3").value;
    var msg=document.getElementById("bye4").value;

    if(name && email && subject && msg){
        alert("Thank you for your feedback")
    }
    else{
        alert("Pleace Fill The Fill")
}};