var Y_name=prompt("Please Enter Your Name :");
var Gender=prompt("Please Enter Your Gender ,The answer should be either (male or female) :");
var age=Number(prompt("Please Enter Your Age :"));
if (age<=0) {
    alert("Please your age should be greater than 0.");
}
else{
        if (confirm("Are you wants to skip the welcoming message?")) {
            
        }
        else{
            if (Gender ==="Male" || Gender ==="male") {
                alert("Welcome "+'Mr . '+Y_name);
            }
            else if( Gender ==="Female" ||Gender ==="female")
            {
                alert("Welcome "+'Ms . '+Y_name);
            }
            else 
            {
            alert("Please your Gender should be either (male or female).");
            }
        }
}