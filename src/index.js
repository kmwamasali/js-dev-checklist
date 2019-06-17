import numeral from 'numeral';

const amount = numeral(1000).format('$0,0.00');

console.log(`A CMS starts from ${amount} by Castle-tech Labs`); // eslint-disable-line no-console
