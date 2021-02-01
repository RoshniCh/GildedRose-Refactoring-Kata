export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
            && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1
                }
            } else {
                if (this.items[i].name == 'Aged Brie')
                {
                    this.agedBrieUpdate(this.items[i])
                }
                if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert')
                {
                    this.backstageUpdate(this.items[i])
                }
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros')
                {
                    this.surfurasUpdate(this.items[i])
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
            && this.items[i].name != 'Aged Brie') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie' &&  this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' 
                && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        if (this.items[i].quality > 0) {
                                this.items[i].quality = this.items[i].quality - 1
                        }
                    } 
            }
        
        }
        return this.items;
    }

    backstageUpdate(item: Item) : Item
    {
        if (item.quality < 50)
        {
            item.quality = item.quality + 1
        }
        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0)
        {
            item.quality = item.quality - item.quality
        }
    
    return item;
    }

    agedBrieUpdate(item: Item) : Item
    {
        if (item.quality < 50)
        {
            item.quality = item.quality + 1
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
            if (item.quality < 50) {
                item.quality = item.quality + 1
            }
        }
        return item;
    }
    surfurasUpdate(item: Item) : Item
    {
        item.quality = item.quality
        item.sellIn = item.sellIn
        return item;
    }
}
