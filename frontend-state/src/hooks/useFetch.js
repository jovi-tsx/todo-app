import { useState, useEffect } from 'react'

export const useFetch = (url, method = 'GET') => {
    const [resp, setResp] = useState({
        data: null,
        loading: true
    })

    useEffect(function(){
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResp({
                data: json,
                loading: false
            }))
    }, [url, method])

    return resp
}