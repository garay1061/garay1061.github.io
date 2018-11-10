/*
Gameplan:

HTML:
(*) Calculator window for operations to be shown along with result
() number buttons for the calculator
() operator buttons (+,-,*, ect)
()'=' button
() reset or clear button

Javascript:
() function that captures what was typed in the calculator window
() function that will add numbers, subtract, etc.
 */
function calculate(expression)
{
    //'expression' is a string of everything in your calculator window
    //we need to extract the first number from the 'expression'
    //expression = 1+2
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);   //capture the '+'
    var secondNum = Number(expression.substr(2,1));

    if (operator === '+')//that means i add firstNum and secondNum
    {
        return addNums(firstNum, secondNum);//returns the result of calling 'addNums"
                                            //after sending it firstNum and secondNum
    }
    else if (operator ==='-')
    {
        //call subtract nums,etc
    }
}

function addNums(p1,p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1+p2;
}