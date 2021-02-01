import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('Check items', function() {
        const items = [
            new Item("+5 Dexterity Vest", 10, 20), //
            new Item("Aged Brie", 2, 0), //
            new Item("Elixir of the Mongoose", 5, 7), //
            new Item("Elixir of the Mongoose", 0, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
            // this conjured item does not work properly yet
            new Item("Conjured Mana Cake", 3, 6)];

        const itemsExpected = [
            new Item("+5 Dexterity Vest", 9, 19), //
            new Item("Aged Brie", 1, 1), //
            new Item("Elixir of the Mongoose", 4, 6), //
            new Item("Elixir of the Mongoose", -1, 5),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 32),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 33),
            // this conjured item does not work properly yet
            new Item("Conjured Mana Cake", 2, 5)];
        
        const gildedRose = new GildedRose(items);
        const itemsUpdated = gildedRose.updateQuality();
        expect(itemsUpdated).to.eql(itemsExpected);
        
    });

    it('Backstage passes to a TAFKAL80ETC concert', function() {
        const items = [
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
            new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)];

        const itemsExpected = [
            new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 32),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 33),
            new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0)];
        
        const gildedRose = new GildedRose(items);
        const itemsUpdated = gildedRose.updateQuality();
        expect(itemsUpdated).to.eql(itemsExpected);
        
    });

    it('Aged Brie', function() {
        const items = [
            new Item("Aged Brie", 2, 0), //
            new Item("Aged Brie", 2, 50), //
            new Item("Aged Brie", 0, 0)];

        const itemsExpected = [
            new Item("Aged Brie", 1, 1), //
            new Item("Aged Brie", 1, 50), //
            new Item("Aged Brie", -1, 2)];


        const gildedRose = new GildedRose(items);
        const itemsUpdated = gildedRose.updateQuality();
        expect(itemsUpdated).to.eql(itemsExpected);
        
    });

    it('Sulfuras', function() {
        const items = [
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80)];

        const itemsExpected = [
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80)];
        
        const gildedRose = new GildedRose(items);
        const itemsUpdated = gildedRose.updateQuality();
        expect(itemsUpdated).to.eql(itemsExpected);
        
    });

    it('Rest of categories', function() {
        const items = [
            new Item("+5 Dexterity Vest", 10, 20), //
            new Item("Elixir of the Mongoose", 5, 7), //
            new Item("Elixir of the Mongoose", 0, 7),
            new Item("Conjured Mana Cake", 3, 6)];

        const itemsExpected = [
            new Item("+5 Dexterity Vest", 9, 19), //
            new Item("Elixir of the Mongoose", 4, 6), //
            new Item("Elixir of the Mongoose", -1, 5),
            new Item("Conjured Mana Cake", 2, 5)];
        
        const gildedRose = new GildedRose(items);
        const itemsUpdated = gildedRose.updateQuality();
        expect(itemsUpdated).to.eql(itemsExpected);
        
    });


});
