import React from "react"

export const Headers = () => {
    console.log(process.env.REACT_APP_EXCHANGE_API_KEY);

    return (
        <nav className="flex justify-between mx-auto max-w-[1024px]">
            <div className="flex gap-1 md:gap-5">
                <img src="/src/assets/logo.png" alt="logo" className="w-30 h-8" />
                <h4>Menu</h4>
            </div>

            
               
             <ul className="inline-flex gap-1 md:gap-5">
                <li>A Service Login</li>
                <li>Help</li>
                <li>EN</li>
             </ul>
        </nav>
    )
}