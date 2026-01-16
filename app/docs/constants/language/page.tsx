
import language_constants from '@/app/constant_list/language_constants.json'


import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={language_constants} type="language" isDict={true} dictName={"language"} importName="query_constants"/>
}