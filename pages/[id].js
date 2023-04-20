import React from "react"
import {useRouter} from "next/router"
import { projects } from "../constants"

export default function App() {

  const router = useRouter()
  const {id} = router.query

  const el = projects[`${id}`]

  return <div className="w-full h-full flex items-center justify-center" >
    <div className="max-w-xl">
      <h1>{el?.title}</h1>
      <img src={el?.image} className="w-80" />
    </div>
  </div>
}
