import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Personal Blog Management',
        projectDesc: 'The project is built in the C# programming language and uses the .NET Core framework. Thanks to this, the platform has an independent structure and can run on different operating systems.',
        tags: ['C#', '.NET', 'MsSQL'],
        code: 'https://github.com/iamyasinkaya/www.yasinkaya.org',
        demo: 'https://github.com/iamyasinkaya/www.yasinkaya.org',
        image: three
    }, 
    {
        id: 2,
        projectName: 'E-commerce Application',
        projectDesc: 'Shared as an open-source project, E-commerce allows users to view, add to a cart, and purchase various products. The project is designed as a web-based application and allows users to create accounts and log in',
        tags: ['C#', '.NET', 'MsSQL','PostgreSQL','MongoDB','JWT'],
        code: 'https://github.com/iamyasinkaya/E-commerce',
        demo: 'https://github.com/iamyasinkaya/E-commerce',
        image: five
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/