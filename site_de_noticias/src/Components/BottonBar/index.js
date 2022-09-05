import  "./estilo.css"

function BottonBar(){

    return(
        <div className=" BottonBar ">
            
            <div className="Catergorias">
                <ul>
                    <span> CATEGORIAS </span>
                    <li> <a href="/politica">Política</a> </li>
                    <li> <a href="/comercio">Comércio</a> </li>
                    <li> <a href="/esportes">Esportes</a> </li>
                    <li> <a href="/saude">Saúde</a> </li>
                    <li> <a href="/o_mundo">O mundo</a> </li>
                    <li> <a href="/serviços">Serviços</a> </li>
                    <li> <a href="/lazer">Lazer</a> </li>
                </ul>
            </div>

            <div className="BottonText">
                <h3> NOSSA PRESENÇA ON-LINE </h3>
                
                <p> Entenda a importância de desenvolver uma 
                    presença online para o seu negócio e confira 
                    os benefícios de ter um site próprio para 
                    alavancar seus resultados  </p>


            </div>

            <div className="Mensagem_da_equipe">

                <h3> MENSAGEM DA EQUIPE </h3>

                <p> Quero agradecer a cada um de vocês 
                    pelo esforço e dedicação que colocam 
                    diariamente no trabalho. 
                    Obrigado, equipe! Vocês são a prova 
                    de que o sucesso se alcança através de 
                    talento, determinação e trabalho duro.
                </p>

                <p> Cada um de vocês contribui para 
                    o bom funcionamento da equipe, 
                    permitindo assim que os projetos 
                    sejam realizados. Todos estão de 
                    parabéns pelo excelente trabalho 
                    realizado, e pelo espírito de união 
                    e sacrifício que existe na equipe!
                
                </p>

            </div>

        </div>
    )

}

export default BottonBar;