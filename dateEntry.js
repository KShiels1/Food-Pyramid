
  

  
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

