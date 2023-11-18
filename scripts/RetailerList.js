import { fetchContracts, fetchDistributors, fetchFlowers, fetchInventories, fetchNurseries, fetchRetailers } from "./TransientState.js"

// function to return a list of retailers in html
export const getRetailers = async () => {
    const contracts = await fetchContracts()
    const distributors = await fetchDistributors()
    const flowers = await fetchFlowers()
    const inventories = await fetchInventories()
    const nurseries = await fetchNurseries()
    const retailers = await fetchRetailers()
    let html = ""
    retailers.map((retailer) => {
        const findDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        const filterContracts = contracts.filter(contract => contract.distributorId === findDistributor.id)
        // map the found contracts????
        const mapContracts = filterContracts.map((contract) => {
            // console.log(contract)
            // in the map we're going to find the nursery and display the nurseries
            const findNursery = nurseries.find(nursery => nursery.id === contract.nurseryId)
            const filterInventories = inventories.filter(inventory => inventory.nurseryId === findNursery.id)
            const mapInventories = filterInventories.map((inventory) => {
                const findFlower = flowers.find(flower => flower.id === inventory.flowerId)
                return findFlower.name
            })
            return `
                <li>${findNursery.name}</li>
                    Available flowers are: ${mapInventories.join(", ")}
            `
        })
        html += `
            <div class="retailer">
                <header class="retailer__name">
                    <h1>${retailer.name}</h1>
                </header>
                <section class="retailer__distributor">
                    Distributed by ${findDistributor.name}
                </section>
                <section class="nursery__distributor">
                    Grown from the following nurseries.
                        <ul>
        `
        html += mapContracts.join("")
        html += `
                        </ul>
                </section>
            </div>
        `
    })
    return html
}