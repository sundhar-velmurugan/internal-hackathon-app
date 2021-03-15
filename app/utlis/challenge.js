export const findChallenge = (challenges, id) => {
  for (let i = 0; i < challenges.length; i++) {
    if (challenges[i].id === id) {
      return i;
    }
  }
  return -1;
};
