import "../Noticia/estilo.css"

function Noticia(){
    
    return(
        <div className="noticia_container">
            <img src={localStorage.getItem("Link")} alt={localStorage.getItem("Titulo")} />
            <h1>{localStorage.getItem("Titulo")}</h1>
            <h3>{localStorage.getItem("Texto")}</h3>
        </div>
    )
}

export default Noticia;