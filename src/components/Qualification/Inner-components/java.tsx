
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/Software Technology.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);