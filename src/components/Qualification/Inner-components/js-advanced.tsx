
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/JS Advanced.jpg';

const data = { 
    titleIcon: 'js',
    title1: 'JavaScript', 
    title2: 'Advanced', 
    grade: '5.22', 
    github: null, 
    githubName: '',
    context: ["Document Object Model", "DOM Manipulations", "jQuery", "Advanced Functions", "Object Composition", "Unit Testing", "JS Classes", "Prototype Chain", "Modules"]
};



export default WrapperComponent(data, sertificate);