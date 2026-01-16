import ConstantDesc from "@/app/components/ConstantDesc"
import CodeBox from "@/app/components/CodeBox"


type Props={
    list: Object,
    type: string,
    isDict: boolean,
    dictName?:string,
    importName:string,
}

export default function ConstantsPage({list,type,isDict,dictName="",importName,}:Props){
    return <div className="mt-5">
        <h1 className="capitalize text-4xl font-bold">{`${type.charAt(0)+type.slice(1)}`.replace("_"," ")}</h1>
        <div className="my-5">
            <h1 className="text-2xl my-3">Usage</h1>
            <CodeBox className={"justify-start"}>from novel_updates_scraper.{`${importName}`} import *<br/><br/>{isDict?`${type} = ${dictName.toUpperCase()}[<${type.toUpperCase()}_CONSTANT>]`:`${type} = <${type.toUpperCase()}_CONSTANT>`}</CodeBox>
        </div>
        <h1 className="text-2xl my-3 capitalize">{`${type.charAt(0)+type.slice(1)}`.replace("_"," ")} constants</h1>
        <ul className="gap-5 flex flex-col">
            {Object.entries(list).map(([key,value]:[string,string])=>{
                return <ConstantDesc name={key} value={`value = ${value}`}/>
            })}
        </ul>
        
        
        </div>
}