
import {useContext,useEffect} from "react";

import { AuthContext } from "../../Context"

function Esportes(){

    const{ itemLista,setItemLista,ListaDeItens } = useContext(AuthContext)
    
    useEffect(() =>{
        
        ListaDeItens("Esportes",setItemLista)
        
    },[])
    return(
        <div className="pagina" >
            <div className=" titulo ">
                <h2> Esportes </h2>

                <p>
                    Aqui você encontra a melhor cobertura sobre o Futebol
                    e Outros Esportes, no Brasil e no Mundo
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

export default Esportes;