  /* Created By : Ahsan Bashir
   Date Created : 21 Nov 2023
   Date Modified : 21 Nov 2023
   */
   function calculateLargestNum(){
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
  var num3=Number(document.getElementById("num3").value);

 var result;
 if(num1>num2 && num1>num3)
 {
     result=num1;
 }
 else if(num2>num1 && num2>num3)
 {
     result=num2;
 }
 else
 {
     result=num3;
 }

 var paragraph=document.querySelector(".write");
 paragraph.innerHTML=`Largest Number is : ${result}`;

}


var button=document.querySelector("#submit");
button.addEventListener("click",calculateLargestNum());


