import { dbContext } from "../db/DbContext.js"



class HousesService {
async getHouses(query) {
    const houses = await  dbContext.Houses.find(query)
    return houses
}
}

export const housesService = new HousesService()