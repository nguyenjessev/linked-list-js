const Node = () => {
  let value = null;
  const getValue = () => value;

  return { getValue };
};

const LinkedList = () => {
  let head = null;
  const getHead = () => head;

  return { getHead };
};
