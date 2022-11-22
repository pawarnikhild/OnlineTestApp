export const allQuestions = [
    {
      language: 'JavaScript',
      questions: [
        {
          id: 0,
          title: '1. What is JavaScript?',
          options: [
            'JavaScript is a scripting language used to make the website interactive',
            'JavaScript is an assembly language used to make the website interactive',
            'JavaScript is a compiled language used to make the website interactive',
            'None of the mentioned'
          ],
          answer: 'JavaScript is a scripting language used to make the website interactive',
          answered: false,
          answerGiven: ''
        },
        {
          id: 1,
          title: '2. You can use a text string as a literal value or assign it to a variable.',
          options: [
            'True',
            'False',
          ],
          answer: 'True',
          answered: false,
          answerGiven: ''
        },
        {
          id: 2,
          title: '3. How can a datatype be declared to be a constant type?',
          options: [
            'var', 'let', 'const', 'constant'
          ],
          answer: 'const',
          answered: false,
          answerGiven: ''
        },
        {
          id: 3,
          title: '4. Match the follwing -\n1) Returns the next integer less than or equal to given number.\n2) Sets focus to current window.\n3) Writes HTML expression or JavaScript code to a document.\n4) Returns next integer greater than or equal to given number.',
          options: [
            'ceil()',
            'floor()',
            'write()',
            'focus()',
            'trim()',
          ],
          answer: ['floor()', 'focus()', 'write()',  'ceil()'],
          answered: false,
          answerGiven: [],
        },
        {
          id: 4,
          title: '5. How can we add an element to array in Javascript?',
          options: [
            'using the spread operator',
            'using array.concat() method',
            'using array.push() method',
            'None of above'
          ],
          // answer: [
          //   'using the spread operator',
          //   'using array.concat() method',
          //   'using array.push() method'
          // ],
          answer: [true, true, true, false],
          answered: false,
          answerGiven: []
        },
      ],
    },
    {
      language: 'Java',
      questions: [
        {
          id: 0,
          title: '1. Number of primitive data types in Java are -',
          options: [
            '6',
            '7',
            '8',
            '9',
          ],
          answer: '8',
          answered: false,
          answerGiven: ''
        },
        {
          id: 1,
          title:
            `2. Find the output of the following code.

            if (1 + 1 + 1 + 1 + 1 == 5) {
                System.out.print(“True”);
            }
            else {
                System.out.print(“False”);
            }
            `,
          options: ['True', 'False'],
          answer: 'True',
          answered: false,
          answerGiven: ''
        },
        {
          id: 2,
          title: '3. Arrays in java are-',
          options: ['Object-references', 'objects', 'Primitive data type', 'None'],
          answer: 'objects',
          answered: false,
          answerGiven: ''          
        },
        {
          id: 3,
          title:
            '4. Match the following - \n1) ____is a tool for debugging java program.\n2) ____ is a tool for creating C-like header files.\n3) ____ runs java bytecoded.\n4) ____ prints java code representation',
          options: ['java', 'javah', 'javap', 'jdb'],
          answer: ['javah', 'jdb', 'java', 'javap'],
          answered: false,
          answerGiven: []
        },
        {
          id: 4,
          title: '5. Identify the infinite loop.',
          options: ['for(; ;)', 'for(int i = 0; i < 1; i--', 'for(int i = 0; ; i++)', 'None of the above' ],
          answer: [true, true, true, false],
          answered: false,
          answerGiven: []
        },
      ],
    },
    {
      language: 'PHP',
      questions: [
        {
          id: 0,
          title: '1. PHP stands for -',
          options: [
            'Hypertext Preprocessor',
            'Pretext Hypertext Preprocessor',
            'Personal Home Processor',
            'None of the above'
          ],
          answer: 'Hypertext Preprocessor',
          answered: false,
          answerGiven: ''
        },
        {
          id: 1,
          title: '2. Is PHP variable case sensitive?.',            
          options: ['True', 'False'],
          answer: 'True',
          answered: false,
          answerGiven: ''
        },
        {
          id: 2,
          title: '3. ____ is the default file extension of PHP.',
          options: ['.xml', '.html', '.php', '.js'],
          answer: '.php',
          answered: false,
          answerGiven: ''          
        },
        {
          id: 3,
          title:
            '4. Match the following - \n1) ____ holds information about headers, paths, and script locations.\n2) ____ used to collect data after submitting an HTML form.\n3) ____ is an associative array that contains all session variables.\n4) ____ is a function that takes any variable you want to use and checks to see if it has been set.',
          options: ['$_SERVER', 'isset', '$_REQUEST', '$_SESSION'],
          answer: ['$_SERVER', '$_REQUEST', '$_SESSION', 'isset'],
          answered: false,
          answerGiven: []
        },
        {
          id: 4,
          title: '5. In PHP, variable names must start with which of the following.',
          options: ['Special characters', 'Letters', 'Underscore', 'Numbers' ],
          answer: [false, true, true, false],
          answered: false,
          answerGiven: []
        },
      ],
    }
  ];