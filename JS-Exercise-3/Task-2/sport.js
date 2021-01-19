const array = [{
    Name: 'Ravindra',
    Sports: ['Chess', 'Cricket'],
},
{
    Name: 'Ravi',
    Sports: ['Cricket', 'Football'],
},
{
    Name: 'Rishabh',
    Sports: ['TableTennis', 'Football'],
}];

let out = [];
let obj = {};

for (i = 0; i < array.length; i++) {

    const l = array[i].Sports.length;

    for (j = 0; j < l; j++) {
        let sport = array[i].Sports[j];

        if (!(sport in obj)) {
            obj[sport] = [];
            obj[sport].push(array[i].Name);

        }
        else {
            obj[sport].push(array[i].Name);
        }
    }

}

//convert into array of objects
for (const ob in obj) {
    let outObj = {};
    outObj[ob] = obj[ob];
    out.push(outObj);
}

console.log(out);
