////SUM OF RESISTORS
const serieResistor=[
    [-1,5,6,3],
[14,3.5,6],
[8,15,100]
];

let result=[];

for(let i = 0 ; i < serieResistor.length; i++){
    let sumArray=0;
    for(let j=0; j<serieResistor[i].length; j++){
        if(serieResistor[i][j]<0){
            sumArray+= -serieResistor[i][j];
        }else {
            sumArray += serieResistor[i][j];
        }
    }
result.push(`${sumArray} ohms`);
}

for (let k=0; k < result.length; k++){
    console.log(result[k]);
}