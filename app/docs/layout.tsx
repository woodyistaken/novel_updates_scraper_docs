"use client"

import SideBar from "../components/SideBar"
import { useState } from "react"

type Props={
    children:React.ReactNode
}

export default function Layout({children}:Props){
    const [open, setOpen]=useState(true)
    function toggle(){
        setOpen(!open)
    }
    return <div className={"bg-gray-900  flex"}>
        <SideBar open={open} className="fixed"/>
        <div className="flex-1 min-h-screen">
            <div className="m-3 h-10">
                <button className={`bg-gray-700 hover:bg-gray-500 transition-colors duration-300 rounded-2xl p-1 h-full flex items-center gap-2` }onClick={toggle}>
                    <img src="/sidebar.png" className={`object-contain h-full ${open?"rotate-0":"rotate-180"} transition-transform duration-500 inline`}/>
                    <p className={`text-gray-300`}>{open?"Close":"Open"} Sidebar</p>
                </button>
            </div>
            <div className="m-5">

                {children}  
            </div></div>
    </div>
}