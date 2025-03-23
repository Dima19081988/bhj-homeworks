const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let pollId = null;

function loadPoll(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE){
            if (xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                pollTitle.textContent = response.data.title;
                pollId = response.id
                
                pollAnswers.innerHTML = '';    

                response.data.answers.forEach((answer, index) => {
                    const answerButton = document.createElement('button');
                    answerButton.classList.add('poll__answer');
                    answerButton.textContent = answer;
                    answerButton.dataset.index = index;
                    pollAnswers.appendChild(answerButton);
                    answerButton.addEventListener('click', () => {
                        // alert ('Спасибо, ваш голос засчитан!');
                        sendVote(pollId, index);
                    });
                });
            } else {
                console.error(`Error: ${xhr.status}`);
            }
        };
    });
}
loadPoll();
showResults(result.stat)


function sendVote(id, answerIndex) {
    const xhrVote = new XMLHttpRequest();
    xhrVote.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhrVote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrVote.send(`vote=${id}&answer=${answerIndex}`);

    xhrVote.addEventListener('readystatechange', () => {
        if (xhrVote.readyState === xhrVote.DONE) {
            if (xhrVote.status === 201) {
                const result = JSON.parse(xhrVote.responseText);
                console.log('Vote sent successfully:', result);
                showResults(result.stat);
                setTimeout(loadPoll, 3000);
            }
        }
    })
}

function showResults(stat){
    console.log('Showing results:', stat);
    pollAnswers.innerHTML = '';
    pollTitle.textContent = 'Результаты голосования: '

    stat.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = `${item.answer}: ${item.votes} голосов`;
        pollAnswers.appendChild(resultDiv);
    })
}
