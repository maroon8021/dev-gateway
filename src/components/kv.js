/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react"

import kvImage01 from "../images/kv-01.jpg"
import kvImage02 from "../images/kv-02.jpg"
import kvImage03 from "../images/kv-03.jpg"

// let isFadeIn = false
// let isFadeOut = false
// let classNames = ["kv", isFadeIn ? "fade-in" : "", isFadeOut ? "fade-out" : ""]
let kvDom = React.createRef()
let kvLayerDom = React.createRef()

let title1 = React.createRef()
let title2 = React.createRef()
let title3 = React.createRef()
//let title4 = React.createRef()

const KV = () => {
  // eslint-disable-next-line no-console
  console.log(kvDom)
  useEffect(() => {
    roopKVbg(kvDom.current, kvLayerDom.current)
    showTitle([title1.current, title2.current, title3.current])
  }, [])
  return (
    <section className="kv">
      <div className="kv-blue-layer" ref={kvLayerDom} />
      <div
        className="kv-image-layer"
        ref={kvDom}
        style={{ backgroundImage: `url(${kvImage01})` }}
      />

      <div className="kv-wrapper">
        <h2 className="title is-1">
          <span className="kv-first-title" ref={title1}>
            天職を
          </span>
          <span
            className="kv-first-title"
            ref={title2}
            dangerouslySetInnerHTML={{ __html: "&nbsp;いま、" }}
          />
          <br />
          <span className="kv-first-title spacer" ref={title3}>
            はじめよう
          </span>
          {/*<span
            className="kv-first-title"
            ref={title4}
            dangerouslySetInnerHTML={{ __html: "&nbsp;directly" }}
          />*/}
        </h2>
      </div>
    </section>
  )
}

const roopKVbg = (kvDom, kvLayerDom) => {
  let nextImgNum = 2
  setInterval(() => {
    kvDom.classList.remove("fade-in")
    kvDom.classList.add("fade-out")
    kvLayerDom.classList.remove("fade-in")
    setTimeout(() => {
      kvLayerDom.classList.add("fade-in")
    }, 2000)
    setTimeout(() => {
      kvDom.classList.remove("fade-out")
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
      kvDom.classList.add("fade-in")
    }, 2500)
  }, 6000)
}

const showTitle = titles => {
  titles.forEach((title, index) => {
    setTimeout(() => {
      title.classList.add("fade-in-kv-title")
    }, 300 * (index + 1))
  })
}

export default KV
