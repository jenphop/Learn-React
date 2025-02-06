import { useState , useEffect} from 'react'
import './App.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactLoading from 'react-loading';

//component
import MyFevorite from './components/MyFevorite'


function App() {
  const [poke, setPoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [number, setNumber] = useState(1)
  const [fev, setFev] = useState([])

  useEffect(()=>{

    let abortController = new AbortController();

    let loadPoke = async ()=>{

      try{

        setLoading(true)

        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`,{
         signal : abortController.signal
        });

        setPoke(response.data)
        setError("")

      }catch(error){

        setError(error)
  
      }finally{

        setLoading(false)
  
      }
  
    }
    loadPoke()
    return () => abortController.abort();

  },[number]);

  const prevPoke = ()=>{
    if(number > 1){
      setNumber((number)=> number -1)
    }
    
  };

  const nextPoke = ()=>{
    setNumber((number)=> number +1)
  }

  const AddFevorite = ()=>{

    setFev((OldFev)=> [...OldFev,poke])
  }

  // console.log("Pokemon :",poke)
  // console.log("Add Fevorite :", fev)


  return (
    
    <div className=' w-full p-4 bg-white'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>       
        <div className='container'>
          {loading ? <ReactLoading className='outPopUp' type='spin' color='red' height={'10%'} width={'10%'}/>:
            <> 
              <h1>{poke?.name}</h1>
              <button onClick={AddFevorite} className="btn btn-info text-white">Add fevorite</button>          
              <img className=' jusify-center ' src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} width={300} height={300} />            
                     
              <ul>
                {poke?.abilities?.map((abil,idx)=>(
                  <li key={idx}> {abil?.ability?.name} </li>          
                ))}
              </ul>

              <button className='btn btn-primary m-2' onClick={prevPoke}>Previous</button>
              <button className='btn btn-primary m-2' onClick={nextPoke}>Next</button>         
            </>
          }

        </div>

        <div className='border border-gray m-2'>
            <h4>You fevorite Pokemon :</h4>
            <h4>You fevorite Pokemon :</h4>
            <MyFevorite fev={fev}/>
        </div>
          
      </div>
    </div>
  )
}

export default App
