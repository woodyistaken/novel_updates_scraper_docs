import story_status_constants from '@/app/constant_list/story_status_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={story_status_constants} type="story_status" isDict={true} dictName={"STORY_STATUS"} importName="query_constants"/>
}