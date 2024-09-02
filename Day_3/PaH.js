import React,{useState} from 'react'
function Pah3 () {
    const [transformation,setTransformation] = useState('Kaioken');
    const handleclick = () =>{
       setTransformation(prevTransformation =>
           prevTransformation === 'Kaioken' ? 'Super Saiyan':'Kaioken'
       )
    }
    return (
        <div>
            <h1>Goku's Transformation</h1>
            <p>Transformations:{transformation}</p>
            <button onClick={handleclick}>TRANSFORMATIONS</button>
        </div>
    )
}
export default Pah3
