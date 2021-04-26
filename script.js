const quizQuestions = [
	{
		question: "Q1: What is the next number in this series: 12, 11, 13, 12, 14, 13, ?",
		a: "10",
		b: "16",
		c: "13",
		d: "15",
		ans: "ans4"
	},
	{
		question: "Q2: Which word does not belong with the others?",
		a: "Index",
		b: "Glossary",
		c: "Chapter",
		d: "Book",
		ans: "ans4"
	},
	{
		question: "Q3: Melt : Liquid :: Freeze : ?",
		a: "Ice",
		b: "Solid",
		c: "Condense",
		d: "Push",
		ans: "ans2"
	},
	{
		question: "Q4: What number is one-quater of one-tenth of one-fifth of 200?",
		a: "25",
		b: "5",
		c: "1",
		d: "10",
		ans: "ans3"
	},
	{
		question: "Q5: A, B, D, G, K. Which letter comes next in this sequence?",
		a: "N",
		b: "P",
		c: "M",
		d: "O",
		ans: "ans2"
	},
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {
	const questionList = quizQuestions[questionCount];
	question.innerHTML = questionList.question;
	option1.innerHTML = questionList.a;
	option2.innerHTML = questionList.b;
	option3.innerHTML = questionList.c;
	option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
	let answer;
	answers.forEach((curAnsEle)=>{
		if (curAnsEle.checked){
			answer = curAnsEle.id;
		}
	});
	return answer;
};

const deselectAll = () =>{
	answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

submit.innerHTML = "Next Question";
submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);
	if (checkedAnswer == quizQuestions[questionCount].ans){
		score++;
	};
	questionCount++;
	deselectAll();
	if (questionCount < quizQuestions.length-1) {
		loadQuestion();
	}
	else if (questionCount == quizQuestions.length-1) {
		submit.innerHTML = "Submit";
		loadQuestion();
	}
	else{
		showScore.innerHTML = `
		<h3>RESULT!</h3>
		<h3>You scored ${score}/${quizQuestions.length}. </h3>
		<button class="btn" onclick="location.reload()"> Play Again </button>
		<a href="result.html"><button class="btn">Result Analysis</button></a>
		<a href="index.html"><button class="btn">Home Page</button></a>
		`;
		showScore.classList.remove('scoreArea');
	}
});