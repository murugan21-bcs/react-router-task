import NavBar from './components/NavBar';
import Home from './components/Home';
import FStack from './components/FStack';
import DScience from './components/DScience';
import Cyber from './components/Cyber';
import Career from './components/Career';
import { BrowserRouter , Routes,Route,Navigate } from 'react-router-dom';

function App() {
let fstack =[
{
id: 1,
title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
category:"Full Stack Development",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
content:
"When you’re hiring a full-stack developer, what are the most important things you look for?",
date: "15 November 2023",
comments: "No comments",
},
{
id: 2,
title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
category:"Full Stack Development",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
content:
"A Full Stack Developer is a tech all-rounder. They work on both the front and",
date: "15 November 2023",
comments: "No comments",
},
{
id: 3,
title: "Horizontal vs Vertical Scaling for Efficient System Design",
category:"Full Stack Development",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
content:
"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
date: "10 November 2023",
comments: "No comments",
}
]

let dscience=[
{
id: 4,
title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
category:"Data Science",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-Ways-To-Use-AI-in-UX-Design.webp",
content:
"Are you someone who’s not interested in coding, but wants to get placed in tech",
date: "28 November 2023",
comments: "No comments",
},
{
id: 5,
title: "Top Product-Based Companies for Data Science Freshers",
category:"Data Science",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
content:
"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
date: "10 November 2023",
comments: "No comments",
},
{
id: 6,
title: "What is the Difference between Data Science and Data Engineering?",
category:"Data Science",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
content:
"India has been making some serious waves in the world of data. Just like the",
date: "08 November 2023",
comments: "No comments",
},
]
let cyber= [

{
id: 7,
title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
category:"Cyber security",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
content:
"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
date: "04 December 2023",
comments: "No comments",
},
{
id: 8,
title: "What Is Hacking? Types of Hacking & More",
category:"Cyber security",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
content:
"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
date: "25 December 2023",
comments: "No comments",
},
{
id: 9,
title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
category:"Cyber security",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
content:
"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
date: "04 December 2023",
comments: "No comments",
},
]

let career =[
{
id: 10,
title: "Top 5 IT Jobs for Economics Students",
category:"Career",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
content:
"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
date: "04 December 2023",
comments: "No comments",
},
{
id: 11,
title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
category:"Career",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
content:
"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
date: "04 December 2023",
comments: "No comments",
},
{
id: 12,
title: "Automation Test Engineer Resume: 10 Important Things To Consider",
category:"Career",
src: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
content:
"The world is moving towards automating the testing of products in order to increase work",
date: "03 December 2023",
comments: "No comments",
}
]

let home = [...fstack,...dscience, ...cyber, ...career]
return (
<BrowserRouter>
<NavBar />
<Routes>
<Route path='/home' element={<Home cards={home}/>}/>
<Route path='/fstack' element={<FStack cards={fstack}/>}/>
<Route path='/dscience' element={<DScience cards={dscience} />} />
<Route path='/cyber' element={<Cyber cards={cyber}/>}/>
<Route path='/career' element={<Career cards={career}/>}/>
<Route path ='*' element={<Navigate to={'/home'} replace/>}/>
</Routes>
</BrowserRouter>
)
}


export default App