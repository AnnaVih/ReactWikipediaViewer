import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
    const [resources, setResources] = useState([])
    
    const fetchResource = async resource =>  {
        const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${resource}`)
        setResources(response.data.query.search)
    }

    useEffect(() => {
        fetchResource(resource)
    }, [resource])

    return resources
}

export default useResources