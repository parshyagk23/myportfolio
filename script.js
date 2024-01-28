function showSiderbar() {
    const sidebar = document.querySelector(".sidebar")
    const hidebar = document.querySelector(".hide-menu")
    const showbar = document.querySelector(".menu-btn")
    console.log('runing') 
    sidebar.style.display = 'flex'
    showbar.style.display = 'none'
    hidebar.style.display = 'block'


  }
  function hidesidebar() {
    const sidebar = document.querySelector(".sidebar")
    const hidebar = document.querySelector(".hide-menu")
    const showbar = document.querySelector(".menu-btn")

    sidebar.style.display = 'none'
    showbar.style.display = 'block'
    hidebar.style.display = 'none'
    //hidebar.style.display='none'
  }