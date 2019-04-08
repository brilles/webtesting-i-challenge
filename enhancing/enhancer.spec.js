const { succeed, fail, repair, get } = require('./enhancer.js');

describe('enhancer.js', () => {
  describe('enhancer', () => {
    describe('enhancer.succeed()', () => {
      it('accepts an item object and returns a new item object where the items enhancement increases by 1 if !20 ', () => {
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
    // describe('enhancer.fail()', () => {});
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
    // describe('enhancer.get()', () => {});
  });
});
