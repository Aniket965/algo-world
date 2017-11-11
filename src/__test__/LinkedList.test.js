const {
  LinkedList,
} = require('../LinkedList');

describe('Linked list', () => {
  const linkedlist = new LinkedList();
  test('linkedlist formation', () => {
    expect(linkedlist.length).toBe(0);
    expect(linkedlist.head).toBe(null);
  });
  test('linkedlist toString', () => {
    linkedlist.Add(3);
    linkedlist.Add(5);
    linkedlist.Add(5);
    expect(linkedlist.toString()).toBe('3->5->5->');
  });
  test('Add to Linkedlist', () => {
    expect(linkedlist.Add(4).data).toBe(4);
    expect(linkedlist.Add(4).next).toBe(null);
  });
  test('get node Linked list', () => {
    expect(linkedlist.get(0).data).toBe(3);
  });
});
