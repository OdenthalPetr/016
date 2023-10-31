
function age2() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);  
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    if (age >= 18 || userinput >= 18 && userinput < 100) {
        result = "prošel jsi"
    } else {   
        result = "neprošel jsi"
    }


    return document.getElementById("result").innerHTML = result;
    }
}

function check() {
    let userInput = parseInt(document.getElementById("input").value)
    let output= ""
    
    for(let i = 0; i < userInput; i++) {
    output=output + " . "
    }
document.getElementById("output").innerHTML=output
}






function kontrola(){     
       let userinput = parseInt(document.getElementById("sum").value)
       for (int i = 0; i < len; i++) {
        07
            if (Character.isDigit(str.charAt(i))) {
        08
              if (i < len-1 && Character.isDigit(str.charAt(i+1))) {
        09
                tmp += str.charAt(i);
        10
              }
        
} 
