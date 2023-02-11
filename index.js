const node = (newValue = null, next = null) => {
  let value = newValue;
  let nextNode = next;
  const getValue = () => value;
  const getNextNode = () => nextNode;
  const setNextNode = (n) => {
    nextNode = n;
  };
  const toString = () => value;

  return { getValue, getNextNode, setNextNode, toString };
};

const linkedList = () => {
  let head = null;

  const append = (value) => {
    const newNode = node(value);

    if (head) {
      let currentNode = head;

      while (currentNode.getNextNode()) {
        currentNode = currentNode.getNextNode();
      }

      currentNode.setNextNode(newNode);
    } else {
      head = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = node(value);

    if (head) {
      newNode.setNextNode(head);
    }

    head = newNode;
  };

  const size = () => {
    let result = 0;
    let currentNode = head;

    while (currentNode) {
      result += 1;
      currentNode = currentNode.getNextNode();
    }

    return result;
  };

  const getHead = () => head;

  const tail = () => {
    let currentNode = head;

    while (currentNode.getNextNode()) {
      currentNode = currentNode.getNextNode();
    }

    return currentNode;
  };

  const at = (index) => {
    if (index > size()) {
      return null;
    } else {
      let currentNode = head;

      for (let i = 0; i < index; i += 1) {
        currentNode = currentNode.getNextNode();
      }

      return currentNode;
    }
  };

  const pop = () => {
    const secondToLastNode = at(size() - 2);

    secondToLastNode.setNextNode(null);
  };

  const contains = (value) => {
    let currentNode = head;

    while (currentNode) {
      if (currentNode.getValue() === value) {
        return true;
      } else {
        currentNode = currentNode.getNextNode();
      }
    }

    return false;
  };

  const toString = () => {
    let currentNode = head;
    let result = '';

    while (currentNode) {
      result += `( ${currentNode} ) -> `;
      currentNode = currentNode.getNextNode();
    }

    result += 'null';

    return result;
  };

  return { append, prepend, size, getHead, tail, at, pop, contains, toString };
};

let myList = linkedList();
myList.append(2);
myList.prepend(1);

for (let i = 3; i < 10; i += 1) {
  myList.append(i);
}

console.log(myList.toString());
console.log('Size:', myList.size());
console.log(`Head: ${myList.getHead()}`);
console.log(`Tail: ${myList.tail()}`);
console.log(`Index 5: ${myList.at(6)}`);
console.log('Popping...');
myList.pop();
console.log(myList.toString());
console.log('Contains 4?', myList.contains(4));
console.log('Contains 99?', myList.contains(99));
