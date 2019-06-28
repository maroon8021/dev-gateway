const trrigerHeight = 300

export class ScrollManager {
  constructor(target) {
    // React.createRef()
    this.target = target
    this.self = this
  }
  listenScroll() {
    this.self = this
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }
  handleScroll() {
    // eslint-disable-next-line no-console
    console.log("hoge")
    if (this.target.current == null) {
      return
    }
    if (
      this.target.current.getBoundingClientRect().y <
      document.documentElement.clientHeight - trrigerHeight
    ) {
      this.target.current.classList.add("on")
      //window.removeEventListener("scroll", this.handleScroll)
    }
  }
}
