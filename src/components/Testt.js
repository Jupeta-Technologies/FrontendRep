import axios from 'axios'
import React from 'react'

const ApiTest = () => {
    const videoList = () => {
        axios.get('https://jupeta-project.onrender.com/api/User/GetAllProducts').then((res)=>{
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
        <button onClick={videoList}>Get Data</button>
    </div>
  )
}

export default ApiTest