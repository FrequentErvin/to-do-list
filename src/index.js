import './style.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

let sideBarOpen = true;
const sidebar = document.querySelector("sidebar")
const container = document.querySelector("container")
const burger = document.getElementById("burger")

const revealSidebar = function(){
    sidebar.style.width = "250px"
    container.style.marginLeft = "250px"
    sideBarOpen = true
}
const closeSidebar = function(){
    sidebar.style.width = "0"
    container.style.marginLeft = "0"
    sideBarOpen = false
}

burger.addEventListener("click", () => {
    const action = (sidebar === false) ? revealSidebar : closeSidebar
    action()
})