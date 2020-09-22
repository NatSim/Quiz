export const myQuestions = [    //Create quiz:array of objects & array for options & integer answer
	{                               //properties of each object
		question: "What is 10/2?", //string
		options: [                 //array of options
			'3',
		    '5',
			'115'
	    ],
		answer: 1                  //number
	},
	{
		question: "What is 30/3?",
		options: [
			'3',
			'5',
			'10'
		],
		 answer: 2
	}
];

console.log(myQuestions);