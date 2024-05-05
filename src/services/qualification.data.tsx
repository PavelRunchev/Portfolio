import sertificateSoftwareTechnologies from '../public/sertificates/Software Technology.jpg';
import sertificateProgrammingFundamentalsJS from '../public/sertificates/JS Fundamentals.jpg';
import sertificateJSAdvanced from '../public/sertificates/JS Advanced.jpg';
import sertificateJSApplication from '../public/sertificates/JS Application.jpg';
import sertificateExpressJS from '../public/sertificates/ExpressJS Fundamentals.jpg';
import sertificateReactJS from '../public/sertificates/React Fundamentals.jpg';
import sertificateAngular from '../public/sertificates/Angular Fundamentals.jpg';
import sertificateProgrammingFundamentals from '../public/sertificates/Programming Fundamentals.jpg';
import sertificateCSharpAdvanced from '../public/sertificates/Programming Fundamentals.jpg';
import sertificateJava from '../public/sertificates/Software Technology.jpg';

const qualificationArray: Array<any> = [
    { 
        titleIcon: 'js',
        title1: 'Software', 
        title2: 'Technologies', 
        grade: '6.00', 
        github: null, 
        githubName: '',
        context: ["MVC with (JS, PHP, C#, JAVA)", "Basic Syntax", "Blog Basic Functionality"],
        sertificate: sertificateSoftwareTechnologies
    },
    { 
        titleIcon: 'js',
        title1: 'JavaScript', 
        title2: 'Fundamentals', 
        grade: '5.85', 
        github: null, 
        githubName: '',
        context: ["Javascript syntax", "Operators and logic flow", "Functions", "Arrays and Matrices", "String and Regex", "Objects and JSON"],
        sertificate: sertificateProgrammingFundamentalsJS
    },
    { 
        titleIcon: 'js',
        title1: 'JavaScript', 
        title2: 'Advanced', 
        grade: '5.22', 
        github: null, 
        githubName: '',
        context: ["Document Object Model", "DOM Manipulations", "jQuery", "Advanced Functions", "Object Composition", "Unit Testing", "JS Classes", "Prototype Chain", "Modules"],
        sertificate: sertificateJSAdvanced
    },
    { 
        titleIcon: 'js',
        title1: 'JavaScript', 
        title2: 'Application', 
        grade: '6.00', 
        github: null, 
        githubName: '',
        context: [
            "HTTP Request Methods, REST Services (CRUD operation)", 
            "Ajax (XMLHttpRequest) and jQuary Ajax", 
            "Asynchronous Programming (async / await)", 
            "Single Page Application (SPA)", 
            "Templating Engines (<span className='text-color'>Handlebars</span> and Pug)", 
            "JS Pattern (MVC)", 
            "JS Tools"
        ],
        sertificate: sertificateJSApplication
    },
    { 
        titleIcon: 'node-js',
        title1: 'Express', 
        title2: 'JS', 
        grade: '6.00', 
        github: 'https://github.com/PavelRunchev/SharedTripp', 
        githubName: 'SharedTripp',
        context: [
            "Introduction to HTTP and NodeJS", 
            "Web Server and Development tools", 
            "Persistence - File and MongoDB", 
            "Express JS", 
            "View Engines (Handlebars and Puk)", 
            "Authentication", 
            "Workshop",
        ],
        sertificate: sertificateExpressJS
    },
    { 
        titleIcon: 'react',
        title1: 'React', 
        title2: 'JS', 
        grade: '6.00', 
        github: 'https://github.com/PavelRunchev/React-Defense', 
        githubName: 'Gems Catalog',
        context: [
            "Intro to React", 
            "Components", 
            "Events and Forms", 
            "Routing and Architecture", 
            "High Order Components", 
            "Redux and Context API"
        ],
        sertificate: sertificateReactJS
    },
    { 
        titleIcon: 'angular',
        title1: 'Angular', 
        title2: '', 
        grade: '6.00', 
        github: 'https://github.com/PavelRunchev/Angular-Defense', 
        githubName: 'Board Games',
        context: [
            "Intro to Angular and TypeScript", 
            "Components", 
            "Observables, Services and Routing", 
            "Forms, Directives and Pipes", 
            "Animations and Interceptors", 
            "Best Practices",
            "Redux State Management",
            "Workshop"
        ],
        sertificate: sertificateAngular
    },
    { 
        titleIcon: 'C#',
        title1: 'Programming', 
        title2: 'Fundamentals', 
        grade: '6.00', 
        github: null, 
        githubName: '',
        context: [
            "C# Intro and Basic Syntax", 
            "C# Conditional Statements and Loops", 
            "Git and Github", 
            "Data Types and Variables",
            "Methods. Debugging and Troubleshooting Code",
            "Arrays",
            "Lists",
            "Dictionaries, Lambda Expressions and Linq",
            "Objects and Classes",
            "Files and Exceptions",
            "Strings and text Processing",
            "Regular Expressions (REGEX)"
        ],
        sertificate: sertificateProgrammingFundamentals
    },
    { 
        titleIcon: 'C#',
        title1: 'CSharp', 
        title2: 'Advanced', 
        grade: '6.00', 
        github: null, 
        githubName: '',
        context: [
            "Stacks and Queue", 
            "Multidimensional Arrays", 
            "Sets and Dictionaries Advanced", 
            "Functional Programming",
            "Defining Classes",
            "Generic",
            "Iterators and Comparators",
            "Basic Algorithms",
            "Working with Abstraction",
            "Inherittance",
            "Encapsulation",
            "Interface and Abstraction",
            "Polymorphism"
        ],
        sertificate: sertificateCSharpAdvanced
    },
    { 
        titleIcon: 'java',
        title1: 'Java', 
        title2: '', 
        grade: '6.00', 
        github: 'https://github.com/PavelRunchev/Project-Rider/tree/master/Project%20Rider%20-%20Exam%203%20January%202018/Java', 
        githubName: 'Project-Rider',
        context: [
            "MVC Overview with other third program tehnology (JS, PHP, C#, Java)", 
            "Java: Basic Syntax", 
            "Java: Basic Web", 
            "Java: Blog Basic Functionality"
        ],
        sertificate: sertificateJava
    }
];

export default qualificationArray;





