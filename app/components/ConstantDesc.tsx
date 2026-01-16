import CodeBox from "./CodeBox"
import { Roboto } from "next/font/google"

type Props={
    name?:string,
    value?:string
}

const roboto=Roboto({
    weight:['100','200','300','400'],
    variable:'--font-roboto'
})

export default function ConstantDesc({name=undefined,value=""}:Props){
    return <div className='grid  grid-cols-[auto_1fr] items-center gap-5'>
        {name!==undefined?<CodeBox className="justify-self-start">{name}</CodeBox>:<></>}<p className={`${name!==undefined?"col-start-2":"ml-2"} text-gray-400 ${roboto.className}`}>{`${value}`}</p>
    </div>
}