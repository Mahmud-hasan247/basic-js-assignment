/* solution for problem no 1 */

function feetToMile (number){
    if (number <= -1){
        var attention = "Please enter a valid number for any distance!";
        return attention;
    }else{
        var mile = number / 5280;
        return mile;
    }
}
var result = feetToMile(10560);
console.log(result);

/* solution for problem no 2 */

function woodCalculator(input1, input2, input3){
    if (input1 <= -1 && input2 <= -1 && input3 <= -1){
        var warning = "If you want to create any furniture please insert his quantity."
        return warning;
    }else {
        var first = input1 * 1;
        var second = input2 * 3;
        var third = input3 * 5;
        var total = first + second + third;
        return total;
    }
}
var result = woodCalculator(5, 10, 15);
console.log(result);


/* solution for problen no 3 */

function brickCalculator (height){
    if (height < 1){
        var error = "This is not a complete building!"
        return error;
    }
    else if (height < 11){
        var brick1 = height * 15 *1000;
        return brick1;
    }
    else if (height > 10 && height < 21){
        var afterTen = height - 10;
        var brick2 = afterTen * 12 * 1000;
        var firstTen = 10 * 15 * 1000;
        var total = brick2 + firstTen;
        return total;
    }
    else if (height > 20){
        var afterTwenty = height - 20;
        var brick3 = afterTwenty * 10 *1000;
        var betweenTenAndTwenty = 10 * 12 * 1000;
        var Ten = 10 * 15 * 1000;
        var totalFinal = brick3 + betweenTenAndTwenty + Ten;
        return totalFinal;
    }
}
var result = brickCalculator(35);
console.log(result);

/* solution for problem no 4 */


function tinyFriend(names){
    var smallest = names[0];
    for (var i = 0; i < names.length; i++){
        var name = names[i].length;
        if (name < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}


