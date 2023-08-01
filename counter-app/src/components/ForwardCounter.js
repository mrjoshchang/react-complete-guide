import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const forwardCount = useCounter();

  return <Card>{forwardCount}</Card>;
};

export default ForwardCounter;
