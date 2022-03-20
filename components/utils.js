export const gi = (max = 400) => Math.floor(Math.random() * max);

export const gc = (max = 255) => `hsl(${gi(max)}, 20%, 50%)`;
