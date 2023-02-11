const Node = (newValue = null) => {
  let value = newValue;
  const getValue = () => value;

  return { getValue };
};

const LinkedList = () => {
  let head = null;
  const getHead = () => head;

  return { getHead };
};
