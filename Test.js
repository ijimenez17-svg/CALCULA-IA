function SquareRootFuncion(StartNumber){
    let X = 1;
    let LastX = 0;
    while (X !== LastX){
        LastX = X
        X = (X+(StartNumber/X))/2;
    };
    return X;
}
console.log(SquareRootFuncion(25));