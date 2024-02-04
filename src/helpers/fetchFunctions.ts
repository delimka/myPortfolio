
export const delayPromise = async (time: number) => {
  const delayPromise = new Promise((resolve) => {
    setTimeout(resolve, time);
  });

  await delayPromise;
};


