export const clamp = (min: number, input: number, max: number) => {
  return Math.max(min, Math.min(input, max));
};

export const mapRange = (
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number
) => {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export const lerp = (x: number, y: number, t: number) => {
  return (1 - t) * x + t * y;
};

export const truncate = (value: number, decimals: number) => {
  return parseFloat(value.toFixed(decimals));
};

const Maths = { lerp, clamp, mapRange, truncate };

export default Maths;
