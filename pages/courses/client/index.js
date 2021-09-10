import { useEffect, useState } from "react"

export default function Courses ({ albuns }){
    const name = "David"
    const [albuns2, setAlbuns] = useState([])
    const fetchData = async ()=>{
        const res = await fetch(`https://api.publicapis.org/entries`)
        const data = res.json();
        return data;
    };
    
    useEffect(()=>{
        if (albuns2.length === 0 ){
            fetchData().then((data)=>{
                setAlbuns(data.entries);
            });
        }
    });

    return(
        <>
            <h1> Course {name} </h1>
            <h1>Client side render</h1>
            {albuns2.length > 0 && (
                
                <h2> {albuns2[0].Description}</h2>
            )
            }
              <h1>Server side render</h1>
             { albuns2.length  > 0 && (
                 albuns2.map((albun, index)=>{
                    return (<h3 key={index}> {albun.description}</h3>)
                 })   
                )
            }
        </>

    )
}
