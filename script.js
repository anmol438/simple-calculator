function operation() {
    var oper = this.innerText;

    // if(operator1 == null && (oper == '+' || oper == '-' || oper == '*' || oper == '/' || oper == '=')){
    //     alert("Please enter a number first");
    if (oper != '+' && oper != '-' && oper != '*' && oper != '/' && oper != '=') {
        if (operand == null) {
            if (operator1 == null) {
                operator1 = oper;
            } else {
                operator1 += oper;
            }
            console.log('operator1 =' + operator1);
            display.innerText = operator1;
        } else {
            if (operator2 == null) {
                operator2 = oper;
            } else {
                operator2 += oper;
            }
            console.log('operator2 =' + operator2);
            display.innerText = operator2;
        }

    } else {
        if (oper == '=') {
            if (operator2 == null) {
                if (operator1 != null) {
                    ans = operator1;
                } else if (ans == null) {
                    alert("bsdk phle number daal")
                } else {}
            } else {
                ans = (eval(operator1 + operand + operator2));
                operator1 = ans;
                operand = null;
                operator2 = null;
            }
            console.log(ans);
            display.innerText = ans;
        } else {
            if (operator1 == null) {
                alert("bsdk phle number daal")
            } else {
                operand = oper;
                console.log('operand =' + operand);
                display.innerText = oper;
            }
        }
    }

};

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var operator1 = null;
var operator2 = null;
var operand = null;
var ans = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', operation);
}