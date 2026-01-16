// "use client"
// import { useContext,createContext,useState,ReactNode } from "react"

// interface SideBarContextType{
//     open:boolean,
//     setOpen:(open:boolean)=>void,
//     toggle:()=>void
// }

// const SideBarContext=createContext<SideBarContextType|undefined>(undefined)

// export function SideBarProvider({children}:{children:ReactNode}){
//     const [open,setOpen]=useState(false)
//     function toggle(){
//         setOpen(!open)
//     }
//     return <SideBarContext.Provider value={{open,setOpen,toggle}}>
//         {children}
//     </SideBarContext.Provider>
// }

// export function useSideBar(){
//     const context=useContext(SideBarContext)
//     if(context==undefined){
//         throw new Error("useSideBar must be used within SideBarContext.Provider")
//     }
//     return context
// }