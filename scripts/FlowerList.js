import { fetchFlowers } from "./TransientState.js";

export const getFlowers = async () => {
    const flowers = await fetchFlowers()
    let html = ""
    const mapFlowers = flowers.map((flower) => {
        return `
            <div class="flowers">
                <header class="flower__name">
                    <h1>${flower.name}</h1>
                </header>
                <section class="flower__color">
                    ${flower.color} color available
            </div>
        `
    })
    html += mapFlowers.join("")
    return html
}
//             <div class="employee">
//                 <header class="employee__name">
//                     <h1>${employee.firstName} ${employee.lastName}</h1>
//                 </header>
//                 <section class="employee__computer">
//                     Currently using a ${findComputer.year} ${findComputer.model}
//                 </section>
//                 <section class="employee__department">
//                     Works in the ${findDepartment.name} deparment
//                 </section>
//                 <section class="employee__location">
//                     Works at the ${findLocation.name} location
//                 </section>
//                 <section class="employee__customers">
//                     Has worked for the following customers.
//                     <ul>
//                          <li></li>
//                     </ul>
//                 </section >
//             </div >