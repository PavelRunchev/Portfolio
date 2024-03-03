
import WrapperComponent from '../../../HOC/Qualification-Components/wrapperComponent';
import sertificate from '../../../public/sertificates/Programming Fundamentals.jpg';

const data = { 
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
    ]
};

export default WrapperComponent(data, sertificate);