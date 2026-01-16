import ClassesPage from "@/app/components/ClassesPage"

const properties={
    "title":{
        "type":"string",
        "desc":"Title of the book"
    },
    "genres":{
        "type":"string[ ]",
        "desc":"List of genres related to the book"
    },
    "tags":{
        "type":"string[ ]",
        "desc":"List of tags related to the book"
    },
    "rating":{
        "type":"float",
        "desc":"Rating of the book"
    },
    "numRatings":{
        "type":"int",
        "desc":"Number of ratings associated with the book"
    },
    "url":{
        "type":"string",
        "desc":"URL of the book page"
    }
}
const methods={
    "make_book":{
        "parameters":[{"name":"title","type":"string","desc":"Title of the book"}],
        "desc":"Get information about the book corresponding to the title",
        "returns":[{
            "type":"Book",
            "desc":"Information about the book with the corresponding title"
        }]
    }
}

export default function Page(){
    return <ClassesPage properties={properties} methods={methods} title="Book" desc="Object that get information about a book"/>
}