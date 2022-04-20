
import {useState} from 'react'
import About from '../About';
import Home from '../Home';


export default function Links()
{
    const [home,setHome] = useState();
    const [about,setAbout] = useState();

    function handleClickHome(){
        setAbout(false);
        setHome(!home);
    }
    function handleClickAbout(){
        setHome(false);
        setAbout(!about);
    }
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
         <div className="d-flex justify-content-center align-items-center flex-row">
            <button 
                type="button"
                class="btn btn-outline-dark"
                onClick={handleClickHome}
            >
                Home
            </button>

            <button 
                type="button"
                class="btn btn-outline-dark"
                onClick={handleClickAbout}
            >
                About
            </button>
         </div>
         <div className = "mt-10 ">
         {home &&(
          <Home/>
        )}
         {about &&(
          <About/>
        )}
         


        {!home &&(<div ></div>)}
        {!about &&(<div ></div>)}
        
         </div>
        </div>

    );
}

/*




*/