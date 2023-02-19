
import { ref } from "vue"
export default function useResource(resource){
    
    const items = ref([])
    const item=ref()

    const baseUrl=`https://jsonplaceholder.typicode.com/${resource}`
    const fetchAll=async()=>{
        const response=await fetch(baseUrl)
        items.value=await response.json()




    }

    const fetchOne=async(id)=>{
        const response=await fetch(`${baseUrl}/${id}`)
        item.value=await response.json()

    }
    return{
        fetchAll,
        fetchOne,
        items,
        item
    }



}