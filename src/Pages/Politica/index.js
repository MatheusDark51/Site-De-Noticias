import {useContext,useEffect} from "react";

import { AuthContext } from "../../Context"

function Politica(){

    const{ itemLista,setItemLista,ListaDeItens } = useContext(AuthContext)
    useEffect(() =>{
        
        ListaDeItens("Politica",setItemLista)

    },[])
    return(
        <div className="pagina" >
            <div className=" titulo ">
                <h2> Politica </h2>

                <p>
                    Veja as ultimas noticias relacionadas a política
                    no brasil e no mundo !!!
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

export default Politica;