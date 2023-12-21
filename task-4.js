let credits = 23580;
const pricePerDroid = 3000;

const droidsToBuy = prompt('Скільки дроїдів ви хочете купити?');

if (droidsToBuy === null) {
  console.log('Скасовано користувачем!');
}
else {
  const totalPrice = pricePerDroid * Number(droidsToBuy);

  if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
  } else {
    credits -= totalPrice;
    console.log(
      `Ви купили ${droidsToBuy} дроїдів, на рахунку залишилося ${credits} кредитів.`,
    );
  }
}


