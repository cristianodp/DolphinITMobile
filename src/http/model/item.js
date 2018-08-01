export default class Item {

    constructor() {
        this.code = null
        this.title = null
        this.subtitle = null
        this.detail = null
        this.customerId = null
        this.uplevelId = null
        this.categoryId = null
        this.ownerId = null
    }

    toJson() {
        return JSON.stringify(this)
    }
} 