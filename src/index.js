import './style.css'

let sidebarOpen = true;
const sidebar = document.getElementById("sidebar")
const container = document.getElementById("container")
const burger = document.getElementById("burger")

const revealSidebar = function(){
    //container.setAttribute("gridTemplateColumns", "1fr 4fr");
    document.getElementById("sidebar").style.flexGrow = 1
    sidebarOpen = true
    console.log(sidebarOpen)
}
const closeSidebar = function(){
    //container.setAttribute("gridTemplateColumns", "0fr 1fr");
    sidebar.style.flexGrow = 0
    sidebarOpen = false
    console.log(69)
    console.log(sidebarOpen)
}

burger.addEventListener("click", () => {
    const action = sidebarOpen == true ? closeSidebar : revealSidebar
    action()
})