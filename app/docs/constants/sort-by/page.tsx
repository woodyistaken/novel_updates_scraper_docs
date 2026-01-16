import sort_by_constants from '@/app/constant_list/sort_by_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={sort_by_constants} type="sort_by" isDict={false} importName="query_constants"/>
}