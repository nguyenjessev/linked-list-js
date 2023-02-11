const node = (newValue = null, next = null) => {
  let value = newValue;
  let nextNode = next;
  const getValue = () => value;
  const getNextNode = () => nextNode;
  const setNextNode = (n) => {
    nextNode = n;
  };

  return { getValue, getNextNode, setNextNode };
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

  const toString = () => {
    let currentNode = head;
    let result = '';

    while (currentNode) {
      result += `( ${currentNode.getValue()} ) -> `;
      currentNode = currentNode.getNextNode();
    }

    result += 'null';

    return result;
  };

  return { append, toString };
};

let myList = linkedList();
myList.append(5);

console.log(myList.toString());
