const { succeed, fail, repair, get } = require('./enhancer.js');

describe('enhancer.js', () => {
  describe('enhancer', () => {
    describe('enhancer.succeed()', () => {
      it('should accept an item object and return a new item object where the items enhancement increases by 1 if !20 ', () => {
        expect(succeed({ name: 'a', durability: 10, enhancement: 10 })).toEqual(
          {
            name: 'a',
            durability: 10,
            enhancement: 11
          }
        );
        expect(succeed({ name: 'a', durability: 10, enhancement: 20 })).toEqual(
          {
            name: 'a',
            durability: 10,
            enhancement: 20
          }
        );
        expect(succeed({ name: 'a', durability: 10, enhancement: 1 })).toEqual({
          name: 'a',
          durability: 10,
          enhancement: 2
        });
      });
    });

    describe('enhancer.fail()', () => {
      it('should accept an item object and return a new item object where if the enhancment < 15, durability - 5.', () => {
        expect(fail({ name: 'a', durability: 10, enhancement: 10 })).toEqual({
          name: 'a',
          durability: 5,
          enhancement: 10
        });
      });
      it('should accept an item object and return a new item object where if the enhancement > 15, durability - 10.', () => {
        expect(fail({ name: 'a', durability: 20, enhancement: 16 })).toEqual({
          name: 'a',
          durability: 10,
          enhancement: 16
        });
      });

      it('should accept an item object and return a new item object where if enhancement > 16, durability - 10, enhancement - 1', () => {
        expect(fail({ name: 'a', durability: 25, enhancement: 18 })).toEqual({
          name: 'a',
          durability: 15,
          enhancement: 17
        });
      });
    });

    describe('enhancer.repair()', () => {
      it('should accept an item object and return a new item with the durability restored to 100.', () => {
        expect(repair({ name: 'a', durability: 10, enhancement: 10 })).toEqual({
          name: 'a',
          durability: 100,
          enhancement: 10
        });
        expect(repair({ name: 'b', durability: 99, enhancement: 10 })).toEqual({
          name: 'b',
          durability: 100,
          enhancement: 10
        });
        expect(repair({ name: 'b', durability: 99, enhancement: 10 })).toEqual({
          name: 'b',
          durability: 100,
          enhancement: 10
        });
      });
    });

    describe('enhancer.get()', () => {
      it('returns a new item with the name property modified where if the enhancement = 0, do nothing', () => {
        expect(get({ name: 'a', durability: 100, enhancement: 0 })).toEqual({
          name: 'a',
          durability: 100,
          enhancement: 0
        });
      });
      it('if the enhancement > 0, change name to [+<enhancement level>]', () => {
        expect(
          get({ name: 'Iron Sword', durability: 100, enhancement: 10 })
        ).toEqual({
          name: '[+10] Iron Sword',
          durability: 100,
          enhancement: 10
        });
        expect(
          get({ name: 'Iron Sword', durability: 100, enhancement: 1 })
        ).toEqual({
          name: '[+1] Iron Sword',
          durability: 100,
          enhancement: 1
        });
      });
    });
  });
});
