////////////////////////////////////////
////////////////////////////////////////
// Select DOM elements

const bookmarksContainers = document.querySelector("#bookmarks")

const bookmarksLists = [
    {
        name: "Google",
        iconSrc: "./assets/google.png",
        link: "https://www.google.ro",
    },
    {
        name: "YouTube",
        iconSrc: "./assets/youtube.png",
        link: "https://www.google.ro",
    },
    {
        name: "Udemy",
        iconSrc: "./assets/udemy.png",
        link: "https://www.google.ro",
    },
    {
        name: "ING",
        iconSrc: "./assets/ing.png",
        link: "https://www.google.ro",
    },
    {
        name: "Gymbeam",
        iconSrc: "./assets/gymbeam.png",
        link: "https://www.google.ro",
    },
    {
        name: "Google Drive",
        iconSrc: "./assets/drive.png",
        link: "https://www.google.ro",
    },
    {
        name: "GitHub",
        iconSrc: "./assets/github.png",
        link: "https://github.com/PetrutDobre",
    },
]

////////////////////////////////////////
////////////////////////////////////////
// Inject projects: Featured

function injectBookmarks() {
    console.log("injectBookmarks")
    for (let i = 0; i < bookmarksLists.length; i++) {
        console.log(i)
        //V1
        // let anchor = document.createElement("a")
        // anchor.classList.add("bookmark")
        // anchor.setAttribute("href", bookmarksLists[i].link)
        // // anchor.setAttribute("target", "_blank")
        // let image = document.createElement("img")
        // image.setAttribute("src", bookmarksLists[i].iconSrc )
        // image.setAttribute("alt", bookmarksLists[i].name)
        // let span = document.createElement("span")
        // span.innerText = bookmarksLists[i].name
        // anchor.appendChild(image)
        // anchor.appendChild(span)

        //V2
        let anchor = document.createElement("div")
        anchor.innerHTML = `
        <a class="bookmark" href="${bookmarksLists[i].link}">
            <img src="${bookmarksLists[i].iconSrc}" alt="${bookmarksLists[i].name}">
            <span>${bookmarksLists[i].name}</span>
        </a>
     
     `

        bookmarksContainers.appendChild(anchor)
    }
}

injectBookmarks()