import { createContext,useContext, useEffect, useState } from "react";

 const languageContext=createContext(null)

 export const LanguageContextProvider=({children})=>{

     const [language,setLanguage]=useState(()=>{

     const language=JSON.parse(localStorage.getItem("language"))||"English"
        return language
     })

     function togle(){

           localStorage.setItem("language",JSON.stringify(language=="English"?"Hindi":"English"))

           setLanguage(prev=>prev=="English"?"Hindi":"English")
     }

      return(
        <languageContext.Provider value={{language,togle}}>
        {children}
        </languageContext.Provider>   
      )

}

export const uselanguage=()=>useContext(languageContext)