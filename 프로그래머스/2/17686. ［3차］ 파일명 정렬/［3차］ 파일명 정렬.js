function solution(files) {
    const reg = /(\D*)([0-9]*)/i;

    files.sort((fileA, fileB) => {
        const A = fileA.match(reg);
        const B = fileB.match(reg);

        const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
        if (compareHead !== 0) {
            return compareHead;
        }

        const numA = parseInt(A[2]);
        const numB = parseInt(B[2]);

        return numA - numB;
    });

    return files;
}
