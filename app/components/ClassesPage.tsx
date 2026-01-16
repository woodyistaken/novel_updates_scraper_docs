import ConstantDesc from "./ConstantDesc"
import CodeBox from "./CodeBox"

interface PropertyInfo{
    type:string,
    desc:string
}
interface ParameterInfo{
    name:string,
    type:string,
    desc:string
}
interface ReturnInfo{
    type:string,
    desc:string
}
interface MethodInfo{
    parameters:ParameterInfo[],
    desc:string,
    returns:ReturnInfo[],
}

type Props={
    properties:Record<string,PropertyInfo>,
    title:string,
    desc:string,
    methods:Record<string,MethodInfo>
}

export default function ClassesPage({title,desc,properties,methods}:Props){
    return <div >
        <h1 className="text-4xl font-bold">{`${title}`}</h1>
        <p className="mt-2 font-light text-gray-400">{`${desc}`}</p>
        <h1 className="mt-10 text-xl">Properties:</h1>
        <ul className="gap-5 flex flex-col">
            {Object.entries(properties).map(([key,value]:[string,PropertyInfo])=>{
                return <div className="mt-2"><ConstantDesc name={key} value={`${value["type"]}`}/>
                <div className="w-1/3 border-b-1 border-gray-700 pb-2">
                    <p className="mt-3 ml-3 text-gray-300  ">{value["desc"]}</p>
                </div>
                    </div>
            })}
        </ul>
        <h1 className="mt-10 text-xl">Methods:</h1>
        <ul className="gap-5 flex flex-col mt-5">
            {Object.entries(methods).map(([key,methodInfo]:[string,MethodInfo])=>{
                return <div className="border-b-1 border-gray-700 pb-2 w-2/3">
                    <CodeBox className="justify-start-start inline">{key}</CodeBox>
                    <p className="inline ml-4 text-gray-400">{methodInfo["desc"]}</p>
                    <div className="ml-5 mt-3">
                        <div className="mb-3">
                            <h1 className=" mb-2">Parameters:</h1>
                            {
                            methodInfo["parameters"].map((paramterInfo)=>{
                                return <div >
                                        <ConstantDesc name={paramterInfo["name"]} value={`${paramterInfo["type"]}`}/>
                                        <p className="mt-3 ml-3 text-gray-300">{paramterInfo["desc"]}</p>
                                    </div>})
                            }
                        </div>
                        
                        <h1 className=" mb-2">Returns:</h1>
                        {
                        methodInfo["returns"].map((returnInfo)=>{
                            return <div >
                                    <ConstantDesc value={`Type: ${returnInfo["type"]}`}/>
                                    <p className="mt-3 ml-3 text-gray-300">{returnInfo["desc"]}</p>
                                </div>})
                        }
                        
                    </div>
                    
                
                </div>
            })}
        </ul>
        
    </div>
}