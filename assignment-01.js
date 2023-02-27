
let countArray=[0,0,0,0,0,0]

function AlterValue(id){
  if(id>0 && id<7){  
    countArray[id-1]--;
    if(countArray[id-1]<0){
      countArray[id-1]=0;
    }
  }
  if(id>6 && id<13){
    countArray[id-7]++;
  } 

  document.getElementById('quant1').innerHTML = countArray[0];
  document.getElementById('quant2').innerHTML = countArray[1];
  document.getElementById('quant3').innerHTML = countArray[2];
  document.getElementById('quant4').innerHTML = countArray[3];
  document.getElementById('quant5').innerHTML = countArray[4];
  document.getElementById('quant6').innerHTML = countArray[5];
}


function handleSubmit() {
  let theDate = new Date(document.getElementById("date-string").value);
 

  let displayDate = document.getElementById("display-date");
  
    let dateFormat = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
    displayDate.innerHTML = theDate.toLocaleDateString('en-gb', dateFormat);
   
}


let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", handleSubmit);




