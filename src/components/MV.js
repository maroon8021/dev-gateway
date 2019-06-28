import React, { useEffect } from "react"

import mvImage01 from "../images/mv-01.jpg"

const MV = () => {
  useEffect(() => {}, [])
  return (
    <section className="mv">
      <div className="mv-bg-layer" />
      <div
        className="mv-inner"
        style={{ backgroundImage: `url(${mvImage01})` }}
      />
      <div className="mv-title-wrapper">
        <h2 className="title is-1 text-center">Alumni</h2>
      </div>
    </section>
  )
}

export default MV
