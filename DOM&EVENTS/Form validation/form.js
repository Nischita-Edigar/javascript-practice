function validate() {
    let name=document.getElementById('ename').value
    if (name == "" && name.length<=4) {
        document.getElementById('ename_message').innerHTML="please Enter minimum 5 characters"     
    
    }   
    

    let mail=document.getElementById('eemail').value
    if (mail ==""  ) {
        document.getElementById('eemail_message').innerHTML="please Enter valid Email id"
        
    }
    let num=document.getElementById('ephone').value
    if(num=="" && num.length<10) {
        document.getElementById('enum_message').innerHTML="please Enter Valid 10-digit Mobile Number"
        
    }
    return false
   
     
}