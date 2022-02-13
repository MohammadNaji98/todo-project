let yourName=prompt("Please Enter Your Name :");
let gender=prompt("Please Enter Your Gender ,The answer should be either (male or female) :");
let age=Number(prompt("Please Enter Your Age :"));
if (age<=0) {
    alert("Please your age should be greater than 0.");
}
else{
        if (confirm("Are you wants to skip the welcoming message?")) {
            
        }
        else{
            if (gender ==="Male" || gender ==="male") {
                alert("Welcome "+'Mr . '+yourName);
            }
            else if( gender ==="Female" ||gender ==="female")
            {
                alert("Welcome "+'Ms . '+yourName);
            }
            else 
            {
            alert("Please your Gender should be either (male or female).");
            }
        }
}
let yourAnswer=[];
let theQuestions=["Are you have a Car ?","Do you watch football ?","Do you play video games ?"];
function showQuestions(arr) {
    alert("I would like to ask you 3 more questions, this is a (Yes/No) questions , so your answer should be Yes or No , or your answer will save -invalid-");
    for(let i=0;i<arr.length;i++)
    {
        checkAndAddToArray(prompt(arr[i]).toLowerCase()); 
    }
    // checkAndAddToArray(prompt("Are you have a Car ?").toLowerCase());
    // checkAndAddToArray(prompt("Do you watch football ?").toLowerCase());
    // checkAndAddToArray(prompt("Do you play video games ?").toLowerCase());

};
function checkAndAddToArray(answer) {
    if (answer == "yes" || answer == "no") {
        yourAnswer.push(answer);
    }else{
        yourAnswer.push("invalid")
    }
}
function printArrayItems(arr) {
    for(let i=0;i<arr.length ;i++)
    {
        console.log(arr[i]);
    }
}
showQuestions(theQuestions);
printArrayItems(yourAnswer);