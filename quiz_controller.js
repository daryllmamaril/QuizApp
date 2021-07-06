class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  };

  getQuestion() {
    return this.questions[this.questionIndex];
  };

  isEnded() {
    return this.questions.length === this.questionIndex;
  };

  guess(userAnswer) {
    this.questionIndex++;

    if (this.getQuestion().correctAnswer(userAnswer)) {
      this.score++;
    }
  };

}