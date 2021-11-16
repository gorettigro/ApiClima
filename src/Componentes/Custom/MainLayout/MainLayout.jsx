import React from "react"

//Comonents
import Header from "../Header/Header";

const MainLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <style>{'body { background-color: #9E7777; }'}</style>
        </div>
    );
};

export default MainLayout;