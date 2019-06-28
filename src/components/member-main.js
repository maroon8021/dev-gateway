import React, { useEffect } from "react"
import { ScrollManager } from "../util/util"
import memberImage01 from "../images/sample-1.png"

let mainContainer = React.createRef()
let calenderContainer = React.createRef()
const MemberMain = () => {
  useEffect(() => {
    const mainScrollManager = new ScrollManager(mainContainer)
    mainScrollManager.listenScroll()
    const calenderScrollManager = new ScrollManager(calenderContainer)
    calenderScrollManager.listenScroll()
  }, [])
  return (
    <section className="member-main section">
      <div className="container fade-in-up" ref={mainContainer}>
        <div className="columns is-desktop">
          <div className="column">
            <img className="member-main-img" src={memberImage01} />
          </div>
          <div className="column contents">
            <h2 className="title is-2">佐藤 恵子</h2>
            <p className="title is-4">JPモルガン</p>
            <p>
              2008年 経済学部卒
              <br />
              富裕層のお客さまや非上場事業法人向けに、有価証券の提案を行っています。また、不動産売買、相続、事業承継など、多様化するお客さまのニーズにお応えするために、MUFGｸﾞﾙｰﾌﾟ各社との協働にも力を入れています。日々変化するマーケット環境のなか、お客さまに末永く安心してお取引いただくため、常に大切にしていることは、相手の期待以上の行動がとれるように努力すること。時間をかけて築いた信頼でも、崩れてしまうのは一瞬だと思い、どんな時もお客さま一人ひとりに誠実かつ丁寧に対応するよう心がけています。
            </p>
          </div>
        </div>
      </div>
      <div className="container calender fade-in-up" ref={calenderContainer}>
        <h2 className="title is-2">Calender</h2>
        <iframe
          src="https://calendar.google.com/calendar/b/2/embed?height=1000&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=aTJwNTFpMzRkbmt0dnJuZDQ4aXZicWhsM3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;hl=ja&amp;showTz=0"
          style={{ borderWidth: 0, height: "60vh" }}
          width="100%"
          height="1000"
          frameBorder="0"
          scrolling="no"
        />
        <p className="text-center">
          <a className="button is-link" href="#" target="_blank">
            フォームから面談日を申請する
          </a>
        </p>
      </div>
    </section>
  )
}

export default MemberMain
