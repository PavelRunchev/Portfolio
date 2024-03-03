
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/Angular Fundamentals.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);