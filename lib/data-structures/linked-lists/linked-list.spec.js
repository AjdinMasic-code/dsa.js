const LinkedList = require('./linked-list');

describe('LinkedList', function () {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('#addLast', () => {
    it('should add element to end', () => {
      linkedList.addLast('a');
      expect(linkedList.root.value).toBe('a');
    });

    it('should link values', () => {
      linkedList.addLast('a');
      linkedList.addLast('b');

      expect(linkedList.root.value).toBe('a');
      expect(linkedList.root.next.value).toBe('b');
    });
  });

  describe('#removeFirst', () => {
    beforeEach(() => {
      linkedList.addLast('a');
      linkedList.addLast('b');
    });

    it('should remove first item: a', () => {
      expect(linkedList.removeFirst()).toBe('a');
      expect(linkedList.root.value).toBe('b');
      expect(linkedList.root.next).toBe(null);
      expect(linkedList.removeFirst()).toBe('b');
      expect(linkedList.removeFirst()).toBe(undefined);
    });
  });
});