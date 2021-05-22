var glazedDonuts = [
    {
        frosting: 'glazed',
        style: 'cake',
        type: 'old fashioned',
        age: '45',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'regular',
        age: '5',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'yeast raised',
        type: 'jelly filled',
        age: '1',
        time: 'seconds'
    }
];

var purchase;
//You
if ((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds') {
    //shop owner
    purchase = glazedDonuts[0];
}
else {
    console.log('sorry it has been out a bit longer');
}

var numPurchase = 0;
for (var donut in glazedDonuts) {
    console.log(glazedDonuts[donut].type);
    if ((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds') {
        numPurchase++;
    }
    else {
        console.log('not this donut...');
    }
}
console.log(numPurchase);
