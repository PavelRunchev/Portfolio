
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/JS Fundamentals.jpg';

const data = { 
    titleIcon: 'js',
    title1: 'JavaScript', 
    title2: 'Fundamentals', 
    grade: '5.85', 
    github: null, 
    githubName: '',
    context: ["Javascript syntax", "Operators and logic flow", "Functions", "Arrays and Matrices", "String and Regex", "Objects and JSON"]
};

export default WrapperComponent(data, sertificate);
