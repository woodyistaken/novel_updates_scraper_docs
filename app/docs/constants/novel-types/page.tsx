import novel_types_constants from '@/app/constant_list/novel_types_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={novel_types_constants} type="novel_type" isDict={true} dictName={"novel_types"} importName="query_constants"/>
}