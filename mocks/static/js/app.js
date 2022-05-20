const myQuestion = document.getElementById('my-que');
const submitAns = document.getElementById('submit-answer');
const scoreDisplay = document.getElementsByClassName('score-display');


submitAns.addEventListener('click', () => {
    let score = 0;
    for (let l = 0; l < getInputs.length; l++) {

        if (getInputs[l].checked === true) {
            let ans = getInputs[l].dataset.rightAns;

            for (let arr = 0; arr < getAllAns.length; arr++) {
                let pkAns = getAllAns[arr].pk;
                let boolAns = getAllAns[arr].fields.right_ans;
                console.log(typeof (pkAns));
                console.log(typeof (boolAns));
                console.log(typeof (ans));
                if (pkAns == ans && boolAns === true) {
                    score = score + 1;
                }
            }
        }

    }

    scoreDisplay[0].innerHTML = score;


})


let getAllAns;
let getInputs;


fetch('http://127.0.0.1:8000/mcq-answers/', {
    method: 'GET'
}).then(ansResp => {
    ansResp.json().then(ansResp => {

        getAllAns = ansResp;
        console.log(ansResp);
    })
})

fetch('http://127.0.0.1:8000/mcq-questions/', {
    method: 'GET'
}).then(queResp => {
    queResp.json().then(queResp => {
        console.log(queResp);
        for (let i = 0; i < queResp.length; i++) {


            let mcqQue = queResp[i].fields.question_haru;
            let mcqQuePk = queResp[i].pk;

            let displayMcqQue = document.createElement('h2');

            displayMcqQue.innerHTML = mcqQue;
            myQuestion.appendChild(displayMcqQue);

            for (let j = 0; j < getAllAns.length; j++) {
                let ansPk = getAllAns[j].fields.belongs_to;

                //checking with primary key
                if (ansPk === mcqQuePk) {
                    let getAns = getAllAns[j].fields.answer_haru;



                    let makeEle = document.createElement("input");
                    myQuestion.appendChild(makeEle);
                    const att = document.createAttribute("type");
                    att.value = "radio";
                    makeEle.setAttributeNode(att);

                    let rName = document.createAttribute('name');
                    // value will be same for all the options of name attribute because of foreign key
                    rName.value = 'name' + ansPk;

                    makeEle.setAttributeNode(rName);

                    makeEle.dataset.rightAns = getAllAns[j].pk;


                    let anotherEle = document.createElement("label");
                    anotherEle.innerText = getAns;
                    myQuestion.appendChild(anotherEle);

                    let letsBreak = document.createElement("br");
                    myQuestion.appendChild(letsBreak);

                    getInputs = makeEle;
                }
            }
            getInputs = document.querySelectorAll('input');

        }
    })
})





