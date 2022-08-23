function validate() {
    let name=document.getElementById('ename').value
    if (name == "" ) {
        document.getElementById('ename_message').innerHTML=" **please Enter valid Name"  
        return false   
    }   
    if (name.length <=4 || name.length>=15 ) {
        document.getElementById('ename_message').innerHTML="**please Enter minimum 5 characters"  
        return false   
    }   
    

    let mail=document.getElementById('eemail').value
    if (mail ==""  ) {
        document.getElementById('eemail_message').innerHTML="**please Enter valid Email id"    
        return false
    }
    /*if (mail.indexOf('@')<=0 ) {
        document.getElementById('eemail_message').innerHTML="**Invalid Email id"    
        return false
    }
    if ((mail.charAt(mail.length-4)!='.'  ) &&  (mail.charAt(mail.length-3)!='.')) {
        document.getElementById('eemail_message').innerHTML="**Invalid Email id"   
        return false 
    }*/

    let num=document.getElementById('ephone').value
    if(num=="" ) {
        document.getElementById('enum_message').innerHTML="**please Enter Valid 10-digit Mobile Number"
        return false    
    }
    if(isNaN(num)) {
        document.getElementById('enum_message').innerHTML="**please Enter digits only"
        return false    
    }
    if(num.length!=10) {
        document.getElementById('enum_message').innerHTML="**please Enter 10-digits only"
        return false    
    }
    
   
     
}