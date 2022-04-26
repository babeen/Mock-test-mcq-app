const myQuestion = document.getElementById('my-que');
const submitAns = document.getElementById('submit-answer');
let score = 0;

submitAns.addEventListener('click', () => {
    score = 0;
    for (let l = 0; l < getInputs.length; l++) {

        if (getInputs[l].checked === true) {
            let ans = getInputs[l].dataset.rightAns;
            console.log(ans)
            if (ans === 'true') {
                score = score + 1;
            }
        }

    }
    alert(score);
})


let getAllAns;
let getInputs;
console.log(getInputs);

fetch('http://127.0.0.1:8000/mcq-answers/', {
    method: 'GET'
}).then(ansResp => {
    ansResp.json().then(ansResp => {
        console.log(ansResp);
        getAllAns = ansResp;
    })
})

fetch('http://127.0.0.1:8000/mcq-questions/', {
    method: 'GET'
}).then(queResp => {
    queResp.json().then(queResp => {
        console.log(queResp);
        for (let i = 0; i < queResp.length; i++) {
            console.log(queResp[i].fields.question_haru);

            let mcqQue = queResp[i].fields.question_haru;
            let mcqQuePk = queResp[i].pk;

            let displayMcqQue = document.createElement('h2');

            displayMcqQue.innerHTML = mcqQue;
            myQuestion.appendChild(displayMcqQue);

            for (let j = 0; j < getAllAns.length; j++) {
                let ansPk = getAllAns[j].fields.belongs_to;
                console.log(ansPk);
                //checking with primary key
                if (ansPk === mcqQuePk) {
                    let getAns = getAllAns[j].fields.answer_haru;
                    console.log(getAllAns[j]);


                    let makeEle = document.createElement("input");
                    myQuestion.appendChild(makeEle);
                    const att = document.createAttribute("type");
                    att.value = "radio";
                    makeEle.setAttributeNode(att);

                    let rName = document.createAttribute('name');
                    // value will be same for all the options of name attribute because of foreign key
                    rName.value = 'name' + ansPk;
                    console.log(rName.value);
                    makeEle.setAttributeNode(rName);

                    makeEle.dataset.rightAns = getAllAns[j].fields.right_ans;


                    let anotherEle = document.createElement("label");
                    anotherEle.innerText = getAns;
                    myQuestion.appendChild(anotherEle);

                    let letsBreak = document.createElement("br");
                    myQuestion.appendChild(letsBreak);
                    console.log(makeEle);
                    getInputs = makeEle;
                }
            }
            getInputs = document.querySelectorAll('input');
            console.log(getInputs);
        }
    })
})





