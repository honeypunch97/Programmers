function solution(ineq, eq, n, m) {
    ineq=ineq+eq
    switch(ineq){
        case '>=':
            return n>=m?1:0;
        case '<=':
            return n<=m?1:0;
        case '>!':
            return n>m?1:0;
        case '<!':
            return n<m?1:0;
    }
}