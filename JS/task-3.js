function checkForSpam(message) {
  const checkWord1 = 'spam';
  const checkWord2 = 'sale';
  //   const lowerSpam = checkWord1.toLowerCase();
  //   const lowerSale = checkWord2.toLowerCase();
  //   if (message.indexOf(lowerSpam) && message.indexOf(lowerSale)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   return (
  //     message.includes(checkWord1.toLowerCase()) ||
  //     message.includes(checkWord2.toLowerCase())
  //   );
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
