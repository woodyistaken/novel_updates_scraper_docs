import ClassesPage from "@/app/components/ClassesPage"

const properties={
    "query_word":{
        "type":"string",
        "desc":"Title of the book"
    },
    "novel_types":{
        "type":"NOVEL_TYPES_CONSTANTS[]",
        "desc":"List of novel types constants"
    },
    "languages":{
        "type":"LANGUAGE_CONSTANTS[]",
        "desc":"List of languages constants"
    },
    "num_chapters":{
        "type":"int",
        "desc":"Number of chapters"
    },
    "num_chapters_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search number of chapters"
    },
    "release_frequency":{
        "type":"int",
        "desc":"How frequent are the chapters released"
    },
    "release_frequency_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search release frequency"
    },
    "num_reviews":{
        "type":"int",
        "desc":"Number of reviews"
    },
    "num_reviews_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search number of reviess"
    },
    "rating":{
        "type":"int",
        "desc":"Rating of the book"
    },
    "rating_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search rating"
    },
    "num_rating":{
        "type":"int",
        "desc":"Number of ratings for the book"
    },
    "num_rating_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search number of ratings"
    },
    "num_readers":{
        "type":"int",
        "desc":"Number of readers for the book"
    },
    "num_readers_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search number of readers"
    },
    "first_release_date":{
        "type":"datetime",
        "desc":"Date of first release"
    },
    "first_release_date_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search first release date"
    },
    "last_release_date":{
        "type":"datetime",
        "desc":"Date of last release"
    },
    "last_release_date_search_type":{
        "type":"MIN_SEARCH|MAX_SEARCH",
        "desc":"Tells how to search last release date"
    },
    "included_genres":{
        "type":"GENRE_CONSTANTS[]",
        "desc":"Which genres to include in the search"
    },
    "excluded_genres":{
        "type":"GENRE_CONSTANTS[]",
        "desc":"Which genres to exclude in the search"
    },
    "genres_search_type":{
        "type":"AND_SEARCH|OR_SEARCH",
        "desc":"Tells how to search genres"
    },
    "included_tags":{
        "type":"TAG_CONSTANTS[]",
        "desc":"Which tags to include in the search"
    },
    "excluded_tags":{
        "type":"TAG_CONSTANTS[]",
        "desc":"Which tags to exclude in the search"
    },
    "tags_search_type":{
        "type":"AND_SEARCH|OR_SEARCH",
        "desc":"Tells how to search tags"
    },
    "story_status":{
        "type":"STORY_STATUS_CONSTANTS[]",
        "desc":"List of story status to search"
    },
    "SORT_LAST_UPDATED":{
        "type":"SORT_TYPES_CONSTANTS[]",
        "desc":"What types should be prioritized"
    },
    "SORT_DESCENDING":{
        "type":"STORY_BY_CONSTANTS[]",
        "desc":"Order of sorting"
    },
   
}
    
const methods={
    "get_Titles":{
        "parameters":[{"name":"numberOfTitles","type":"int","desc":"How many books to return from query"}],
        "desc":"Get the books that fit the search query",
        "returns":[{
            "type":"string[]",
            "desc":"List of the title of books that match the query"
        }]
    }
}

export default function Page(){
    return <ClassesPage properties={properties} methods={methods} title="Search" desc="Object that queries for books"/>
}