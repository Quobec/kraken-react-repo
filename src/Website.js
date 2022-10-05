import React from "react";
import MainContainer from './components/MainContainer';
import Header from "./components/Header.js";
import ButtonClicker from "./components/ButtonClicker";
import Composition2 from "./components/CompositionAndInheritance";
import EffectHook from "./components/useEffect";
import Database_data from "./components/Databse_data";

function Website({children, site, changeSite}){
    if(site === 'mainSite'){

        return(
            <>
                <Header></Header>
                <MainContainer> 
                    <ButtonClicker></ButtonClicker>
                    <Composition2></Composition2>
                    <EffectHook></EffectHook>
                    <Database_data></Database_data>
                    {children}
                </MainContainer>
            </>
        );
    }

};

export default Website;