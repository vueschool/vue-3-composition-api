import {reactive, computed} from 'vue'
const activeRequests = reactive([])
export default function usePageRequests(){
  const isLoading = computed(()=> !!activeRequests.length)
  const makeRequest = async (url) =>{
    // push the url to the activeRequests
    const index = activeRequests.length
    activeRequests[index] = url
    const response = await fetch(url)
      .catch(error => alert(error)) // if failed remove the url from the activeRequests and alert error
    const data = await response.json()
    // remove the url from activeRequests
    activeRequests.splice(index, 1)
    return data
  }
  return {isLoading, makeRequest}
}