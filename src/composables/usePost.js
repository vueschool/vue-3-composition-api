import {ref} from 'vue'
export default function usePost(){
  const posts = ref([])
  const fetchAll = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    posts.value = await response.json()
  }

  return {
    posts,
    fetchAll
  }
}