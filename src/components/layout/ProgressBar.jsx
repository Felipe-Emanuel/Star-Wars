import { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { styled } from '@stitches/react';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressRoot >
      <ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </ProgressRoot>
  );
};

const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '99999px',
  boxShadow: '0px 0px 10px white',
  width: 300,
  height: 25,

  transform: 'translateZ(0)',
});

const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});
