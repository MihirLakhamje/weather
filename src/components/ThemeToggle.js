import React from "react";

export default function ThemeToggle (){

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
            </div>
        </>
    );
};
