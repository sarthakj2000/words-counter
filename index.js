const countwords=()=>{
  let noc=document.getElementById("words").value.length;
  let now=document.getElementById("words").value;
  now=now.match( /\w+/g ).length;
  document.getElementById("showdata").innerHTML="Number of characters:" +noc;
 document.getElementById("showwords").innerHTML="Number of words:" +now;
}
