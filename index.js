// ex-1
document.getElementById('btnResult').onclick = function (){
    var basePoint  = document.getElementById('txt-basePoint').value;
    var score1 = document.getElementById('txt-score1').value * 1;
    console.log(score1);
    var score2 = document.getElementById('txt-score2').value * 1;
    var score3 = document.getElementById('txt-score3').value * 1;
    var area = document.getElementById('txtArea').value;
    var student = document.getElementById('txtStudent').value;
    console.log(area);
    
    if (score1 )
    if (score1 == 0 || score2 == 0 || score3 == 0){
        return alert('you failed');
    }

    var studentGrade = 0;
    var finalResult = '';

    let pri_lookup = {
        "X":0,
        "A":2,
        "B":1,
        "C":0.5,
        "0":0,
        "1":2.5,
        "2":1.5,
        "3":1
    };

    var studentGrade = (score1 + score2 + score3) + pri_lookup[area] + pri_lookup[student];

    if(studentGrade >= basePoint){
        finalResult = 'passed';
    }else{
        finalResult = 'failed';
    }

    document.getElementById('result').innerHTML = `Your total grade is: ${studentGrade} so the final result is ${finalResult}`;
    
    // console.log(studentGrade);

//     const a = 1;
//     const b = 1;
//     const c = 0.5;
//     const stu1 = 2.5;
//     const stu2 = 1.5;
//     const stu3 = 1;
//     var studentGrade = (score1 + score2 + score3) ;

//     if (area != 'X' ){
//         switch(area) {
//             case 'A':
//                 studentGrade = studentGrade + a;
//               break;
//             case 'B':
//                 studentGrade = studentGrade + b;
//               break;
//             default:
//                 studentGrade = studentGrade + c;
//           }
//     } 
//     if (student != '0') {
//         switch(student) {
//             case '1':
//                 studentGrade =studentGrade + stu1;
//               break;
//             case '2':
//                 studentGrade = studentGrade + stu2;
//               break;
//             default:
//                 studentGrade = studentGrade + stu3;
//           }          
//     }
//     console.log(studentGrade);
}

// ex-2
const kw0to50 = 500;
const kw50to100 = 650;
const kw100to200 = 850;
const kw200to350 = 1100;
const above350 = 1300;

function calElectric () {
    var name = document.getElementById('txt-name').value;
    var kwInput = document.getElementById('txt-kw').value * 1;

    var amount  = 0;
    if (kwInput > 0 && kwInput <= 50){
        amount = kwInput * kw0to50;
    } else if (kwInput > 50 && kwInput <= 100){
        amount = kwInput * kw50to100;
    } else if (kwInput > 100 && kwInput <= 200) {
        amount = kwInput * kw100to200;
    } else if (kwInput > 200 && kwInput <= 350) {
        amount = kwInput * kw200to350;
    } else {
        amount = kwInput * above350;
    }

    document.getElementById('billResult').innerHTML = `Hi ${name}, You have to pay ${amount.toLocaleString("it-IT", {
        currency: 'VND',
        style: 'currency',
    })}`
}

document.getElementById('btnBillAmount').onclick = calElectric;

// ex-3
function calTax () {
    var revenue = document.getElementById('revenueInput').value * 1;
    var amountTax;
    if (revenue <= 60e+6) {
        amountTax = revenue * 0.05;
        console.log("1");
    }
    else if (60e+6 < revenue  && revenue <= 120e+6) {
        amountTax = revenue * 0.1;
    }
    else if (120e+6 < revenue && revenue <= 210e+6) {
        amountTax = revenue * 0.15;
        console.log("3")
    } 
    else if (210e+6 < revenue && revenue <= 384e+6) {
        amountTax = revenue * 0.2;
        console.log("4")
    }
    else if (384e+6 < revenue && revenue <= 624e+6) {
        amountTax = revenue * 0.25;
        console.log("5")
    } 
    else if (624e+6 < revenue && revenue <= 960e+6) {
        amountTax  = revenue * 0.3;
        console.log("6")
    }
    else if (revenue > 935e+6){
        amountTax = revenue * 0.35;
        console.log("7")
    };

    document.getElementById('taxResult').innerHTML = `The Total tax is ${amountTax.toLocaleString("it-IT", {
        currency: 'VND',
        style: 'currency',
    })
    }`;
}
document.getElementById('btnTaxAmount').onclick = calTax;

// ex-4
const RECEIPT = 4.5;
const BASICFEE = 20.5;
const SUBCRIBER = 7.5;

const RECEIPTBUS = 15;
const BASICFEEBUSFOR10 = 75;
const SUBCRIBERBUS = 50;
function myFunction() {
    var input = document.getElementById('mySelect').value;
    console.log(input);
    var connectNum = document.getElementById('connectNum').value * 1;
    var channelNum = document.getElementById('channelNum').value * 1;
    var indivFee;
    var busFee;
    if (input == 'Individual') {
        indivFee = RECEIPT + BASICFEE * connectNum + SUBCRIBER * channelNum;

        document.getElementById('channelResult').innerHTML = `the total amount is ${indivFee}`;
    } else if (input == 'Business') {
        if (connectNum <= 10){
            busFee = RECEIPTBUS + BASICFEEBUSFOR10 * connectNum + SUBCRIBERBUS * channelNum;
        } else {
            // var connectionFee = BASICFEEBUSFOR10 + (connectNum - 10) * 5;
            busFee = RECEIPTBUS + (BASICFEEBUSFOR10 + (connectNum - 10) * 5) + SUBCRIBERBUS * channelNum;
        }
        document.getElementById('channelResult').innerHTML = `the total amount is ${busFee}`;
    } 
}

document.getElementById('btnChannelAmount').onclick = myFunction;