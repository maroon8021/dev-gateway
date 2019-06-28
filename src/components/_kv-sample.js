/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react"

import kvImage01 from "../images/kv-01.jpg"
import kvImage02 from "../images/kv-02.jpg"
import kvImage03 from "../images/kv-03.jpg"

// let isFadeIn = false
// let isFadeOut = false
// let classNames = ["kv", isFadeIn ? "fade-in" : "", isFadeOut ? "fade-out" : ""]
let kvDom = React.createRef()
let kvLayerDom = React.createRef()

const KV = () => {
  const [onFadeIn, setFadeIn] = useState(false)
  const [onFadeOut, setFadeOut] = useState(false)
  useEffect(() => {
    roopKVbg(kvDom.current, kvLayerDom.current, { setFadeIn, setFadeOut })
  }, [])
  return (
    <section className="kv">
      <div
        className={[
          "kv-blue-layer",
          onFadeIn ? "fade-in" : "",
          onFadeOut ? "fade-out" : "",
        ].join(" ")}
        ref={kvLayerDom}
      />
      <div
        className="kv-image-layer"
        ref={kvDom}
        style={{ backgroundImage: `url(${kvImage01})` }}
      />

      <div className="kv-wrapper">
        <h1 className="title is-1 text-center">Let's know Alumni directly</h1>
      </div>
    </section>
  )
}

const roopKVbg = (kvDom, kvLayerDom, setter) => {
  const { setFadeIn, setFadeOut } = setter
  let nextImgNum = 2
  setInterval(() => {
    // kvDom.classList.remove("fade-in")
    // kvDom.classList.add("fade-out")
    setFadeIn(false)
    setFadeOut(true)
    kvLayerDom.classList.remove("fade-in")
    setTimeout(() => {
      kvLayerDom.classList.add("fade-in")
    }, 2500)
    setTimeout(() => {
      //kvDom.classList.remove("fade-out")
      setFadeOut(false)
      switch (nextImgNum) {
        case 1:
          kvDom.style.backgroundImage = `url(${kvImage01})`
          break
        case 2:
          kvDom.style.backgroundImage = `url(${kvImage02})`
          break
        case 3:
          kvDom.style.backgroundImage = `url(${kvImage03})`
          break

        default:
          break
      }
      nextImgNum = nextImgNum === 3 ? 1 : nextImgNum + 1
      //kvDom.classList.add("fade-in")
      setFadeIn(true)
    }, 3000)
  }, 6000)
}

export default KV
