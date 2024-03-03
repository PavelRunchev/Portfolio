
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/React Fundamentals.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);