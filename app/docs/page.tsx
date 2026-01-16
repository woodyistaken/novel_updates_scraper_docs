import CodeBox from "../components/CodeBox"
import CopyButton from "../components/CopyButton"

export default function Page(){
    return <div className="flex flex-col m-5">
        <h1 className="text-4xl font-bold mb-5">Installation</h1>
        <p className="mb-2">Run the following command on the terminal:</p>
        <div className="flex h-10 gap-1">
            <CodeBox>{"pip install novel-updates-scraper"}</CodeBox>
            <CopyButton code={"pip install novel-updates-scraper"}/>
        </div>
    </div>
}