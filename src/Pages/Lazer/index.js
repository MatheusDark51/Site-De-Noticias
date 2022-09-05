 import {useContext,useEffect} from "react";

import { AuthContext } from "../../Context"

function Lazer(){

    const{ itemLista,setItemLista,ListaDeItens } = useContext(AuthContext)
    useEffect(() =>{
        
        ListaDeItens("Lazer",setItemLista)

    },[])
    return(
        <div className="pagina" >
            <div className=" titulo ">
                <h2> Lazer </h2>

                <p>
                    Aqui você verá as ultimas noticias na area do
                    lazer e muito mais...
                </p>
    
            </div>

            <section>
                
               
            {itemLista.map((item) =>{
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
                    

            </section>

        </div>
    )

}        

export default Lazer;