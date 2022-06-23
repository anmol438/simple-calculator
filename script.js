function operation() {
    var input = this.innerText;
    var calculated = false;

    if (input == 'AC') {
        display.innerText = 0;
        operand1 = '0';
        operand2 = '';
        operator = '+';
        ans = '0';
    } else if (input != '+' && input != '-' && input != '*' && input != '/' && input != '=') {

        if (!calculated) {
            operand2 += input;
        } else {
            operand2 = input;
            calculated = false;
        }

        if (operator == '=') {
            ans = operand2;
        }

        display.innerText = operand2;

    } else {
        calculated = true;
        if (operand2 != '') {
            if (operator != '=') {
                ans = (eval(operand1 + operator + operand2));
            }
            operator = input;

            if (input != '=') {
                operand1 = ans;
            } else {
                operand1 = '0';
            }
            display.innerText = ans;
            operand2 = '';

        } else {
            if (input != '=') {
                operand1 = ans;
            } else {
                operand1 = '0';
            }
            operator = input;
            display.innerText = ans;
        }
    }

};

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var operand1 = '0';
var operand2 = '';
var operator = '+';
var ans = '0';

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', operation);
}
