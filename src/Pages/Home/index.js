import "../estilo.css"

import { useState,useEffect } from "react"

import firebase from "../../Services/FirebaseConection.js"

async function CarregaDados(col,set){
    await firebase.firestore().collection(col)
    .get()
    .then((snapshot) =>{
        let v = [];

        snapshot.forEach((doc) =>{
            v.push({
                id:doc.data().Id,
                titulo:doc.data().Titulo,
                texto:doc.data().Texto,
                texto_completo:doc.data().Texto_Completo,
                imagem:doc.data().Url_Imagem
            })
        })
        
        var r = Math.floor(Math.random() * snapshot.docs.length)

        if( r < 4 ){
            r += 4;
        }
       
        var s = r
        
        var array = []
        
        var i = 0

        while(i < r){
            
            if(!array.includes(v[s])){
                array.push(v[s])
                i++
            }
            s = parseInt(Math.floor(Math.random() * snapshot.docs.length))  
        }
        set(array)
    })
}

async function Carrega_Imagem(col,doc,img){

    await firebase.firestore().collection(col)
    .doc(doc)
    .get()
    .then((snapshot) =>{
        img(snapshot.data().Url_Imagem);
    })
    
}

function Home(){

    const [post_1 , setPost_1] = useState([{}])
    const [post_2 , setPost_2] = useState([{}])
    const [post_3 , setPost_3] = useState([{}])
    
    const [post_image_1 , setPost_image_1] = useState();
    const [post_image_2 , setPost_image_2] = useState();

    useEffect(() =>{
        CarregaDados("Politica",setPost_1);
        CarregaDados("Comércio",setPost_2);
        CarregaDados("Lazer",setPost_3);

        Carrega_Imagem("O_Mundo","O_Noticia_5",setPost_image_1)
        Carrega_Imagem("Saude","S_Noticia_8",setPost_image_2)
    }
    ,[])

    return(
        <div className="home">
            
            <div className="homediv">
                {post_1.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.titulo}</h2>
                            <img src={item.imagem} alt="Imagem" />
                            <h3>{item.texto}</h3>
                            <button onClick={() =>{
                                    localStorage.setItem("Link",item.imagem);
                                    localStorage.setItem("Titulo",item.titulo);     
                                    localStorage.setItem("Texto",item.texto_completo);  
                                }}>
                                <a href={`/noticia`} > Leia Mais</a>
                            </button>
                        </div>
                        
                    )
                })}  
                
            </div>

            <div className="homeimg">
                <img src={post_image_1} alt= {"Imagem"}></img>
            </div>

            <div className="homediv">
                {post_2.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.titulo}</h2>
                            <img src={item.imagem} alt="Imagem" />
                            <h3>{item.texto}</h3>
                            <button onClick={() =>{
                                    localStorage.setItem("Link",item.imagem);
                                    localStorage.setItem("Titulo",item.titulo);     
                                    localStorage.setItem("Texto",item.texto_completo);  
                                }}>
                                <a href={`/noticia`} > Leia Mais</a>
                            </button>
                        </div>
                    )
                })}  
            </div>

            <div className="homeimg">
                <img  src={post_image_2} alt= {"Imagem"}></img>
            </div>

            <div className="homediv">
                {post_3.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.titulo}</h2>
                            <img src={item.imagem} alt="Imagem" />
                            <h3>{item.texto}</h3>
                            <button onClick={() =>{
                                    localStorage.setItem("Link",item.imagem);
                                    localStorage.setItem("Titulo",item.titulo);     
                                    localStorage.setItem("Texto",item.texto_completo);  
                                }}>
                                <a href={`/noticia`} > Leia Mais</a>
                            </button>
                        </div>
                    )
                })}  
            </div>
        </div>
    )
}

export default Home