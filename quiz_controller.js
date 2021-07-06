class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  };

  getQuestionndex() {
    return this.questions[this.questionIndex];
  };

  isEnded() {
    return this.questions.length === this.questionIndex;
  };

  guess(userAnswer) {
    this.questionIndex++;

    if (this.getQuestionndex().correctAnswer(userAnswer)) {
      this.score++;
    }
  };

}