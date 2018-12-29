import { useState, useEffect } from 'react'
import axios from 'axios'

let isMounted;
const useResources = resource => {
    const [resources, setResources] = useState([])
    
    const fetchResource = async resource =>  {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${resource}`)
        if(isMounted){
            setResources(response.data.query.search)
        }
    }

    useEffect(() => {
        isMounted = true
        fetchResource(resource)
        return () => {
            isMounted = false
        }
    }, [resource])

    return resources
}

export default useResources