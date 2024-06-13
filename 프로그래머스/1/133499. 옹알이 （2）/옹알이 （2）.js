function solution(babbling) {
    const can = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;

    babbling.forEach(babble => {
        let valid = true;
        
        for (let j = 0; j < can.length; j++) {
            const repeatPattern = new RegExp(can[j].repeat(2));
            if (repeatPattern.test(babble)) {
                valid = false;
                break;
            }
        }
        
        if (valid) {
            can.forEach(pattern => {
                babble = babble.split(pattern).join(' ');
            });

            if (babble.trim() === '') {
                count += 1;
            }
        }
    });

    return count;
}