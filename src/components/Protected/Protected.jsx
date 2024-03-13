import React, {useState , useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected({children , authentication = true}) {

    const navigate = useNavigate()
    const[loading , setLoading] = useState(true)
    const authStatus = useSelector((state)=> state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus!=authentication){
            navigate("/login")
        } else if (!authentication && authStatus!=authentication){
            navigate("/")
        }

        setLoading(false)
    },[navigate , authStatus , authentication])

  return loading ? <div>Loading...</div> : <>{children}</>
  
  }
export default Protected