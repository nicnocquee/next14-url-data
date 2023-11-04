export const sleep = async (durationSeconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, durationSeconds * 1000);
  });
};

export const sleepRandom = async (max: number = 5) => {
  const duration = Math.floor(Math.random() * max);
  return sleep(duration);
};
