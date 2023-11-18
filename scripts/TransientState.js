// functino to fetch the flowers from the database
export const fetchFlowers = async () => {
    const response = await fetch("http://localhost:8088/flowers")
    const flowers = response.json()
    return flowers
}
// function to fetch the retailers from the database
export const fetchRetailers = async () => {
    const response = await fetch("http://localhost:8088/retailers")
    const retailers = await response.json()
    return retailers
}
// function to fetch distributors from the database
export const fetchDistributors = async () => {
    const response = await fetch("http://localhost:8088/distributors")
    const distributors = await response.json()
    return distributors
}
// functino to fetch contracts from the database
export const fetchContracts = async () => {
    const response = await fetch("http://localhost:8088/contracts")
    const contracts = await response.json()
    return contracts
}
// functino to fetch inventories from the database
export const fetchInventories = async () => {
    const response = await fetch("http://localhost:8088/inventories")
    const inventories = await response.json()
    return inventories
}
// functino to fetch nurseries from the database
export const fetchNurseries = async () => {
    const response = await fetch("http://localhost:8088/nurseries")
    const nurseries = await response.json()
    return nurseries
}