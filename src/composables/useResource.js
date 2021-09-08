import {ref} from 'vue'
export default function useResource(resource){
  const items = ref([])
  const item = ref(null)
  const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
  const fetchAll = async ()=>{
    const response = await fetch(baseURL)
    items.value = await response.json()
  }
  const fetchOne = async (id) =>{
    const response = await fetch(`${baseURL}/${id}`)
    item.value = await response.json()
  }

  return {
    items,
    fetchAll,
    item,
    fetchOne
  }
}