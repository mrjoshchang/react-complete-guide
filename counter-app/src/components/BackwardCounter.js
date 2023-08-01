import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const backwardCount = useCounter(false);

  return <Card>{backwardCount}</Card>;
};

export default BackwardCounter;
