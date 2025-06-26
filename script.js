    let pass = document.getElementById("password");
    let msg = document.getElementById("message");
    let str = document.getElementById("strength");
    let icon = document.getElementById("icon");
   pass.addEventListener("input", () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
         msg.style.display = "none";
    }

      if (pass.value.length < 4 && pass.value.length === 1 ) {
           str.innerHTML = "Weak";
           pass.style.borderColor = "red";
            icon.style.borderColor = "red";
           msg.style.color = "red";

    }
     else if(pass.value.length >=4 && pass.value.length < 8 ){
           str.innerHTML = "Meadium";
           pass.style.borderColor = "orange";
            icon.style.borderColor = "orange";
           msg.style.color = "orange";
    }
    else if ( pass.value.length > 8 ) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "green";
         icon.style.borderColor = "green";
           msg.style.color = "green";
    }
   })