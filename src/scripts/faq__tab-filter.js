function selectFilter(evt, contentName){
    const activeFilter = document.getElementsByClassName("faq__tab-filter");
    for(let i = 0; i<activeFilter.length;i++){
        activeFilter[i].style.display = "none";
    }

    const tabLinks = document.querySelector(".faq__tabs").children;
    console.log(tabLinks);
    for(let i = 0; i<tabLinks.length;i++){
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(contentName).style.display = "grid";
    evt.currentTarget.className += " active";
}