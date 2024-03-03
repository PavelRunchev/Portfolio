
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/Programming Fundamentals.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);