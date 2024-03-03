
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/JS Application.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);