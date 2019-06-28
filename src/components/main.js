/* eslint-disable no-console */
import React, { useEffect } from "react"

let container = React.createRef()
const trrigerHeight = 300
let element = null

const Main = () => {
  useEffect(() => {
    element = container.current
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <section className="main section">
      <div className="container fade-in-up" ref={container}>
        <h2 className="title is-2">
          Found Vocationは
          <br />
          「天職」を発見する
          <br className="sp" />
          プラットフォームです
        </h2>
        <p className="subtitle is-6">人生の大半の時間を費やす「仕事」</p>
        <p className="subtitle is-6">
          そんな仕事について本気で考えている人は
          <br className="sp" />
          まだ多くはいません。
        </p>
        <p className="subtitle is-6">日々の業務に追われていたり、</p>
        <p className="subtitle is-6">いざ転職するとなっても、</p>
        <p className="subtitle is-6">
          候補にあがるのは
          <br className="sp" />
          「いい給料」か「いい役職」か。
        </p>
        <p className="subtitle is-6">MBAで学んでも</p>
        <p className="subtitle is-6">最大限そのスキルを発揮できていない。</p>
        <p className="subtitle is-6">
          もっと自分が活躍できる、自分のやりたいことができる環境について
        </p>
        <p className="subtitle is-6">いま、考えてみませんか</p>
        <p className="subtitle is-6">
          MBA生同士で共に考え、
          <br className="sp" />
          あなたの「天職」を見つけれるようサポートします
        </p>
      </div>
    </section>
  )
}

const handleScroll = () => {
  if (
    element.getBoundingClientRect().y <
    document.documentElement.clientHeight - trrigerHeight
  ) {
    element.classList.add("on")
    window.removeEventListener("scroll", handleScroll)
  }
}

export default Main
