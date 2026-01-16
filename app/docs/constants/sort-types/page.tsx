import sort_types_constants from '@/app/constant_list/sort_types_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={sort_types_constants} type="sort_type" isDict={false} importName="query_constants"/>
}