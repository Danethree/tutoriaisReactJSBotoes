
import {useState} from 'react'



export default function Home(){
    const [content,setContent] = useState();
    
    function handleClickContent(){
        setContent(!content);
        
    }

    return(
        <div >
        <h1 class="display-4">Bem vindo ao home!</h1>
        <p class="lead">Esta é a página home.</p>
        <hr class="my-4"></hr>
        <p>Aperte em um botão para continuar testando as funções</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button" onClick = {handleClickContent}>Conteudo</a>
        </p>

        {content &&(
            <div>esta é a página conteúdo</div>
        )}
         {!content &&(
           <div></div>
        )}
   </div>
    )
}