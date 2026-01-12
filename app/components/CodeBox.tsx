"use client"

import { useState } from "react"

type Props={
    code: string
}

export default function CodeBox({code}:Props){
    const [copied,setCopied]=useState<Boolean>(false)
    async function handleCopy(){
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        },1000)
    }

    return  <div className="flex h-10 gap-1">
          <span className='bg-gray-800 px-2 py-1 rounded-lg font-mono flex justify-center items-center'>{code}</span>
          <div className="group relative h-9/10">
            <button className="bg-white p-1.5 rounded-xl cursor-pointer hover:bg-gray-100 h-full" onClick={handleCopy}>
                <img src="/copy.png" className="object-contain h-full "></img>
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-black opacity-0 group-hover:opacity-100 transition-opacity text-xs mb-1 p-1 rounded-lg flex whitespace-nowrap">{copied?"Copied":"Copy to clipboard"}</div>
          </div>
          
        </div>
        
}