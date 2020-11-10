function myFunction(input)
{
  if(input=='C')
  {
    document.getElementById("txt").value ="";
    document.getElementById("txt").style.borderColor = "black";
    return;
  }
  else if(input=='=')
  {
    
    try {
      var exp=document.getElementById("txt").value;
      document.getElementById("txt").value =eval(exp);
      document.getElementById("txt").style.borderColor = "black";
      return;
    }
    catch(err) {
      document.getElementById("txt").style.borderColor = "red";

     console.log("error occured")
     return;
    }
    
    
  }
    
  console.log("sdsd");
  
  document.getElementById("txt").value += input;


} 
