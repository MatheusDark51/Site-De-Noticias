import {useContext,useEffect} from "react";

import { AuthContext } from "../../Context"

function Politica(){

    const{ itemLista,setItemLista,ListaDeItens } = useContext(AuthContext)
    useEffect(() =>{
        
        ListaDeItens("Saude",setItemLista)

    },[])
    return(
        <div className="pagina" >
            <div className=" titulo ">
                <h2> Saúde </h2>

                <p>
                    Últimas notícias sobre as conquistas da ciência na área da Saúde. Avanços da medicina, dicas de saúde,
                    tratamentos, tecnologias e últimas descobertas.
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