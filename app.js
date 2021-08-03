const percval = prompt('Enter the percentage value');
const percnum = prompt('Enter the number');
const percent = (percval, percnum) => {
    return (percval / 100) * percnum;
}

console.log(percent(percval, percnum)+ '%')
