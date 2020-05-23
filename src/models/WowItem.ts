export default class WowItem {
    public itemID: number
    public price: number

    constructor(_itemID: number, _price: number) {
        this.itemID = _itemID
        this.price = _price
    }
}