import React, { useEffect } from "react"
import { members } from "../data/data"
import { Link } from "gatsby"
import { ScrollManager } from "../util/util"

let container = React.createRef()

const _Members = () => {
  useEffect(() => {
    const scrollManager = new ScrollManager(container)
    scrollManager.listenScroll()
  }, [])
  return (
    <section className="_members section">
      <div className="container" ref={container}>
        <h2 className="title is-2 text-center">Alumni</h2>
        <div className="columns is-desktop">
          {members.map(node => (
            <div className="column is-3" key={node.id}>
              <Link to="/members-template">
                {/*<Link to={`/members/${node.key}`}>*/}
                <div className="column-inner">
                  <img src={node.pic} className="_members-pic" />
                  <p className="subtitle is-4 is-spaced">{node.name}</p>
                  <p className="title is-6 spacer">{node.companyName}</p>
                  {/*<p className="title is-6">{node.university}</p>*/}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <p className="subtitle is-4 text-center">Comming Soon...</p>
      </div>
    </section>
  )
}

export default _Members
