import React,{useState,useEffect} from 'react';
import api from './services/api';
import  './App.css';
import background from './assets/background.jpeg'
import Header from './components/Header.js'



 function App(){

  //useState retorna dis arrays
const [projects,setProjects]=useState([]);

//dispara função se o valor tiver alterado ou não
useEffect(()=>{
  api.get('projects').then(response =>{
    //atualiza dados da api
    setProjects(response.data);
  });
}, []);

async function handleAddProject(){
  //percorre o array projects e copia 
  //setProjects([...projects,`Novo projeto ${Date.now()}`]);
  const response = await api.post('projects',{
    title: `Novo projeto ${Date.now()}`,
    owner: "Vitor Braga desenvolvedor php"
  });
  const project=response.data;

  setProjects([...projects,project])

  
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
{/*percorre projects e faz li do title da api */}
  {projects.map(project=><li key={project.id}>{project.title}</li>)}
  <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
</ul>


</>);}

export default App;