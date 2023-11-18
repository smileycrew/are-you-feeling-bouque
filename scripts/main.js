import { getFlowers } from "./FlowerList.js"
import { getRetailers } from "./RetailerList.js"

const renderPage = async () => {
    const containerElement = document.querySelector(".container")
    const flowersHTML = await getFlowers()
    const retailersHTML = await getRetailers()
    let html = `
        <section>
            ${flowersHTML}
        </section>
        <section>
            ${retailersHTML}
        </section>
    `
    containerElement.innerHTML = html
}
renderPage()