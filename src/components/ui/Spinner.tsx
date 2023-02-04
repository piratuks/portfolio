import * as React from 'react';

export const Spinner = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div></div>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     width: '100%',
    //     height: '100%'
    //   }}
    // >
    //   <CircularProgress color="primary" />
    // </Box>
  );
};
