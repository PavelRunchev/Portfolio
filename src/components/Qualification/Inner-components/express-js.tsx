
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/ExpressJS Fundamentals.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);