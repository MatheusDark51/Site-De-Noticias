import { createContext } from "react";
import { useState } from "react";
import firebase from "firebase";

export const AuthContext = createContext()

function Contexto({children}){
    const [itemLista,setItemLista] = useState([{}])
    
    async function ListaDeItens(collection,set){
        await firebase.firestore().collection(collection)
        .get()
        .then((onSnapShot) =>{
            let lista = []
            onSnapShot.forEach((doc) =>{
                lista.push({
                    id:doc.data().Id,
                    titulo:doc.data().Titulo,
                    texto:doc.data().Texto,
                    texto_completo:doc.data().Texto_Completo,
                    imagem:doc.data().Url_Imagem
                })
            })
            set(lista);
        })
    }

    return(
        <AuthContext.Provider value={{itemLista,setItemLista, ListaDeItens}}>
        {children}
        </AuthContext.Provider>
    )
}

export default Contexto;