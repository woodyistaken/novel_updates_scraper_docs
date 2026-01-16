import genre_constants from '@/app/constant_list/genre_constants.json'
import ConstantsPage from '@/app/components/ConstantsPage'

export default function Page(){
    return <ConstantsPage list={genre_constants} type="genre" isDict={true} dictName={"genres"} importName="genre_constants"/>
}