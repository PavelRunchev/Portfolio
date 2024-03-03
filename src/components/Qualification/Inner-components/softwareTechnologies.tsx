
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/Software Technology.jpg';

const data = { 
    titleIcon: 'js',
    title1: 'Software', 
    title2: 'Technologies', 
    grade: '6.00', 
    github: null, 
    githubName: '',
    context: ["MVC with (JS, PHP, C#, JAVA)", "Basic Syntax", "Blog Basic Functionality"]
};

export default WrapperComponent(data, sertificate);