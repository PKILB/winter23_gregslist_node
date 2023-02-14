import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"



class HousesService {

async updateHouseById(houseId, houseData) {
    const foundHouse = await this.getHouseById(houseId)
    foundHouse.description = houseData.description || foundHouse.description
    foundHouse.price = houseData.price || foundHouse.price
    foundHouse.levels = houseData.levels || foundHouse.levels
    foundHouse.bedrooms = houseData.bedrooms || foundHouse.bedrooms
    foundHouse.bathrooms = houseData.bathrooms || foundHouse.bathrooms

    await foundHouse.save()
    return foundHouse
}

async destroyHouseById(houseId) {
    const house = await this.getHouseById(houseId)
    await house.remove()
    return house
}

async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) {
        throw new BadRequest('Invalid House ID')
    }
    return house
}

async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
}

async getHouses(query) {
    const houses = await  dbContext.Houses.find(query)
    return houses
}
}

export const housesService = new HousesService()