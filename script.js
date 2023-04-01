
function calculator() {

    let operator = document.getElementById("operator").value;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
  
    switch(operator){
      case '+':
        document.getElementById("answer").innerHTML = n1 + n2;
        break;
      case '-':
        document.getElementById("answer").innerHTML = n1 - n2;
        break;
      case '*':
        document.getElementById("answer").innerHTML = n1 * n2;
        break;
      case '/':
        document.getElementById("answer").innerHTML = n1 / n2;
        break;
      default:
        document.getElementById("answer").innerHTML = "Invalid operator";
        break;
    }
    
    document.getElementById("answer").addEventListener("click", function() {
    });
  }
  