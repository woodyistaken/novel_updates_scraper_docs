import { Roboto } from "next/font/google"
import Link from "next/link"


const roboto=Roboto({
    weight:['100','200','300','400'],
    variable:'--font-roboto'
})

type Props={
    className?:string,
    open:boolean
}

export default function SideBar({className="",open=false}:Props){
    
    return <div className={`transition-all duration-300 ease-in-out ${open?"w-70":"w-0"} p-0 m-0 bg-black`}>
        <div className={`${className}   flex  flex-col w-70 py-2 px-4 gap-3 transition-all duration-300 ease-in-out h-full  ${open?'':'-translate-x-full'}`}>
            <Link href="/docs" className=" grid grid-cols-[auto_1fr] grid-rows-3 gap-x-3 h-1/17">
                <img src='/website.png' className="col-start-1 row-span-full h-full"/>
                <div className="text-xs text-gray-400 col-start-2 ">Novel Updates API</div>
                <div className={`col-start-2 row-start-2 text-sm`}>Documentation</div>
                <div className={`row-start-3 col-start-2 text-sm ${roboto.className}`}>v0.1.6</div>
            </Link>
            <div className="flex-1">
                <h1 className={`font-light text-gray-100 mt-5 mb-2 ${roboto.className}`}>Getting Started</h1>
                <ul >
                    <Link href="/docs" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Installation</Link>
                </ul>
                <h1 className={`font-light text-gray-100 mt-5 mb-2 ${roboto.className}`}>Classes</h1>
                <ul className="flex flex-col">
                    <Link href="/docs/classes/book" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Book</Link>
                    <Link href="/docs/classes/search" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Search</Link>
                </ul>
                <h1 className={`font-light text-gray-100 mt-5 mb-2 ${roboto.className}`}>Query Constants</h1>
                <ul className="flex flex-col">
                    <Link href="/docs/constants/genres" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Genres</Link>
                    <Link href="/docs/constants/tags" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Tags</Link>
                    <Link href="/docs/constants/novel-types" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Novel Types</Link>
                    <Link href="/docs/constants/language" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Languages</Link>
                    <Link href="/docs/constants/search-types" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Search Types</Link>
                    <Link href="/docs/constants/story-status" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Story Status</Link>
                    <Link href="/docs/constants/sort-by" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Sort By</Link>
                    <Link href="/docs/constants/sort-types" className={`font-extralight px-5 py-1 border-l-2 ml-2 text-gray-100 text-sm border-gray-300 ${roboto.className}`}>Sort Types</Link>
                </ul>   
            </div>
        </div>
    </div>
}