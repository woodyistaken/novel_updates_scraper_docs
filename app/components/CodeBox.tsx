


type Props={
    children: React.ReactNode,
    className?:string,
}

export default function CodeBox({children,className}:Props){
    

    return  <span className={`${className} bg-gray-800 px-2 py-1 rounded-lg font-mono flex justify-center items-center`}>{children}</span>
        
}