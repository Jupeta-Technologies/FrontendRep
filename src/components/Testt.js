import axios from 'axios'
import React from 'react'

const ApiTest = () => {
    const videoList = () => {
        axios.get('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/GetAllProducts').then((res)=>{
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