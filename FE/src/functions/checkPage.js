export const checking = () => {
  let el = document.getElementById("pageInput");
  el.value = "";
};

export const isInteger = (number) => {
  return number % 1 === 0;
}