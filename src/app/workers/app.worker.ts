/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log('worker work with: ', data);
  setTimeout(() => {
    postMessage({
      message: 'complete work',
      time: data * 1000,
    });
  }, 1000 * data);
});
