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