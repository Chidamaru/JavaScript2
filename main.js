function clickbutton(target){
    let result = document.getElementById("result")
    let target_value = target.innerHTML;
    
    if (target_value == "AC") {
        result.innerHTML = "0"
    } else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML)
    } else {
        let last_value = result.innerHTML.slice(-1);
        
         if (target_value == "+"  &&last_value == "+" ){
      result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "+"  &&last_value == "-" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else  if (target_value == "+"  &&last_value == "*" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "+"  &&last_value == "/" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "-"  &&last_value == "+" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "-"  &&last_value == "-" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "-"  &&last_value == "*" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "-"  &&last_value == "/" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "*"  &&last_value == "+" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "*"  &&last_value == "-" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "*"  &&last_value == "*" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "*"  &&last_value == "/" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "/"  &&last_value == "+" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "/"  &&last_value == "-" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "/"  &&last_value == "*" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         } else if (target_value == "/"  &&last_value == "/" )　{
            result.innerHTML = result.innerHTML.slice(0, -1) + target_value
         }
         
             else  if (result.innerHTML == "0") {
              result.innerHTML = target_value
         } else {
             result.innerHTML += target_value
         
            }
       }
}




