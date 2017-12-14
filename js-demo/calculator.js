// var result;

function getFirstNumber() {
    var firstNum = $('#first').val();
    // var firstNum = document.getElementById("first").value;
    console.log(firstNum);
    return firstNum;

}

function getSecondNumber() {

    var secondNum = $('#twice').val();
    // var secondNum = document.getElementById("twice").value;
    return secondNum;

}

function sendResult(result) {
    jQuery(function ($) {
        $('#result').html(result);
    });
    // document.getElementById("result").innerHTML = result;

}

function add() {
    var first = getFirstNumber();
    var second = getSecondNumber();
    var re = Number(first) + Number(second);
    sendResult(re);
}

function subtract() {
    var first = getFirstNumber();
    var second = getSecondNumber();
    var re = first - second;
    sendResult(re);
}

function ride() {
    var first = getFirstNumber();
    var second = getSecondNumber();
    var re = first * second;
    sendResult(re);
}

function devide() {
    var first = getFirstNumber();
    var second = getSecondNumber();
    var re = first / second;
    sendResult(re);
}