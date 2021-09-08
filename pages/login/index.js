
import Layout from "../components/Layout"
import { useEffect, useState } from "react"

export default function login({ albuns }){
    const name = "David"
    const [albuns2, setAlbuns] = useState([])
    const fetchData = async ()=>{
        const res = await fetch(`https://api.publicapis.org/entries`)
        //debugger;
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
            <h1> login {name} </h1>
            {albuns2.length > 0 && (
                <h1> {albuns2[0].Description}</h1>
            )
            
            }
             {albuns.length > 0 && (
                <h1> {albuns[0].Description}</h1>
            )
            
            }
            
        </>

    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.publicapis.org/entries`)
    const data = await res.json();
    
    if (!data) {
      return {
        notFound: true,
      }
    }
    console.log(data);
    return {
      props: {albuns: data.entries}, // will be passed to the page component as props
    }
  }