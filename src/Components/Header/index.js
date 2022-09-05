import  "./estilo.css"

function Header(){
    return(
        <div className=" header ">
            <div className="logo">
                
                <a href="/">ALLNEWS</a>

            </div>

            <div className="links">

                <ul>
                    <li> <a href="/">HOME</a> </li>
                    
                    <li> <a href="/politica"> POLÍTICA </a> </li>
                    
                    <li> <a href="/esportes"> ESPORTES </a> </li>
                    
                    <li> <a href="/comercio"> COMÉRCIO </a> </li>
                    
                    <li> <a href="/saude"> SAÚDE </a> </li>
                    
                    <li> <a href="/o_mundo"> O MUNDO </a> </li>
                    
                    <li> <a href="/servicos"> SERVIÇOS </a> </li>

                    <li> <a href="/lazer"> LAZER </a> </li>
                </ul>


            </div>
            
        </div>
    )
}

export default Header