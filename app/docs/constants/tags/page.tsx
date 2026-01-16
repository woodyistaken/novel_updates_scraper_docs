import tag_constants from '@/app/constant_list/tag_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={tag_constants} type="tag" isDict={true} dictName={"TAGS"} importName="tag_constants"/>
}