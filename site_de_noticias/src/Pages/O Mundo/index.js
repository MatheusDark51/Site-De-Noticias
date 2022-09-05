import {useContext,useEffect} from "react";

import { AuthContext } from "../../Context"

function O_Mundo(){

    const{ itemLista,setItemLista,ListaDeItens } = useContext(AuthContext)
    useEffect(() =>{
        
        ListaDeItens("O_Mundo",setItemLista)

    },[])
    return(
        <div className="pagina" >
            <div className=" titulo ">
                <h2> O Mundo </h2>

                <p>
                    Confira as notícias de hoje, fatos da política,
                    economia e internacional,no maior canal de notícias do Brasil e do mundo.
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

export default O_Mundo;