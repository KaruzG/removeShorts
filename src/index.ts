console.log("Remove Shorts loaded")

window.addEventListener("load", () => {
    setTimeout(() => {
        // Feed Shorts:
        let shorts = findShorts()
        let nShortsInContainer = findShortsPerRow(shorts[0])
        removeShortsContainers(shorts, nShortsInContainer)
    }, 2.2)
})

function removeShortsContainers(individualShorts, nShortsInContainer) {
    for(let i = 0; i <= (individualShorts.length - nShortsInContainer); i += nShortsInContainer) {
        let shortsContainer = individualShorts[i].parentElement.parentElement.parentElement.parentElement.parentElement
        shortsContainer.innerHTML = ""
    }
}

function findShorts() {
    console.log("Looking for dopamine machines!")
    let individualShorts = document.querySelectorAll('[is-reel-item-style-avatar-circle]')
    console.log("Shorts found: " + individualShorts.length + " 🔥")
    return individualShorts
}

function findShortsPerRow(shortElement) {
    const shortContainer = shortElement.parentElement
    return shortContainer.querySelectorAll('[is-reel-item-style-avatar-circle]').length
}
