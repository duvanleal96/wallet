const useCurrency = () => {
  const currencyFormat = (number: number) => {
    return '$ ' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };
  return { currencyFormat };
};
export default useCurrency;
