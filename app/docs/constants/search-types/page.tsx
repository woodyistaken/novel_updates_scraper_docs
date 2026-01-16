import search_types_constants from '@/app/constant_list/search_types_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={search_types_constants} type="search_type" isDict={false} importName="query_constants"/>
}