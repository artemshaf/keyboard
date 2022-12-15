//! time in ms
// 42000
export const getMinutes = (time: number) => Math.floor(time / 60) || "00";
export const getSeconds = (time: number) =>
  String(time % 60)
    .substring(0, 2)
    .padStart(2, "0");
