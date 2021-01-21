function add() {
    let sum = 0;
    let num = prompt("Enter num: ");
    num = parseInt(num);
    while (num !=0) {
        sum += num;
        num = prompt("Enter num: press 0 to end");
        num = parseInt(num);
    }
    console.log(sum);
}

function mult() {
    let prod = 1;
    let num = prompt("Enter num: ");
    num = parseInt(num);
    while (num !=0) {
        prod *= num;
        num = prompt("Enter num: (press 0 to end)");
        num = parseInt(num);
    }
    console.log(prod);
}
function sub() {
    let num1 = prompt("Enter num1: ");
    let num2 = prompt("Enter num2: ");
    console.log(num1 - num2);
}
function div() {
    let num1 = prompt("Enter divisor: ");
    let num2 = prompt("Enter dividend(can not be 0): ");

    if (num2==0) {
        alert("Error!!");
    }
    else {
        console.log((num1/num2).toFixed(2));
    }
}

function average() {
    let sum = 0, count=0;
    let num = prompt("Enter num:");
    num = parseInt(num);
    while (num !=0) {
        count++;
        sum += num;
        num = prompt("Enter num: (press 0 to end)");
        num = parseInt(num);
    }
    let av = (sum/count);
    console.log("Average: " + av);
}
function maximum() {
    let num = prompt("Enter num: ");
    do {
        let max = num;
        num = prompt("Enter num: press 0 to end");
        if (num>max){
            max = num;
        }
    } while (num!=0);
    console.log(this.max);
}
function minimum() {
    let num = prompt("Enter num: ");
    do {
        let min = num;
        num = prompt("Enter num: press 0 to end");
        if (num<min){
            min = num;
        }
    } while (num!=0);
    console.log(min);
}
(function(){
    let ch = prompt("Press 1 for addition    Press 2 for multiplication    Press 3 for substraction   Press 4 for division     Press 5 for average     Press 6 for max      Press 7 for min");
    if (ch==1) {
        add();
    }
    else if(ch==2) {
        mult();
    }
    else if(ch==3) {
        sub();
    }
    else if(ch==4){
        div();
    }
    else if(ch==5) {
        average();
    }
    else if(ch==6){
        maximum();
    }
    else if(ch==7){
        minimum();
    }
})();