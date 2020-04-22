import React,{useState} from 'react';
import  './App.css';
import background from './assets/background.jpeg'
import Header from './components/Header.js'



export default function App(){
const [projects,setProjects]=useState(['Desenvolvimento de app','Front-end-web']);
function handleAddProject(){
  setProjects([...projects,`Novo projeto ${Date.now()}`]);

  console.log(projects);
}

return( 
<>

{/*First project
  *<Header title="Homepage">
  <ul><li>HomePage</li>
  <li>Projects</li></ul>
</Header>
<Header title="Projects">
  <ul><li>HomePage</li></ul>
  <ul>Projects</ul>
</Header>
*/}
<Header title="Projects"/>
<img src={background}/>
<ul>
  {projects.map(project=><li key={project}>{project}</li>)}
  <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
</ul>


</>);}