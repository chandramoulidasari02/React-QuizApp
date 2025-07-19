function Result({ userAnswers, questionBank, onRestart }) {

  function calculateScore (){
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    })

    return finalScore
  }

  const score = calculateScore();

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p className="score">Your Score: {score} out of {questionBank.length}</p>
      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;