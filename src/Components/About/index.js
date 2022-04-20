

import {useState} from 'react'



export default function About(){

    const [contact,setContact] = useState();
function handleClickContact(){
    setContact(!contact);
    
}
    return(
        <div>
        <h1 class="display-4">Bem vindo ao about!</h1>
        <p class="lead">Esta é a página about.</p>
        <hr class="my-4"></hr>
        <p>Aperte em um botão para continuar testando as funções</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button" onClick = {handleClickContact}>Contatos</a>
        </p>

        {contact&&(
            <div>O contato é (00)0000-0000</div>
        )}
   </div>
    )
}