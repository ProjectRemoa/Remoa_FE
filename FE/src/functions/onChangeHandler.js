export const onChangeHandler = (event, maxLength, setStateFunction) => {
  const inputValue = event.target.value;
  if (inputValue.length > maxLength) {
    setStateFunction(inputValue.substring(0, maxLength));
    return;
  }
  setStateFunction(inputValue);
};