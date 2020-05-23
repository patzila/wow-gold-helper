import WowItem from "./models/WowItem"

export default class WowApi {
    static getWowItem(itemID: number): Promise<WowItem> {
        return new Promise<WowItem>((resolve) => {

            fetch(`https://us.api.blizzard.com/data/wow/item/${itemID}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    return new WowItem(itemID, 2);
                },
                (error) => {
                }
                ) 
            });
    }
}