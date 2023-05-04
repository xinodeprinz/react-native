export const photoString = (length) => {
    const take = 'abcdefghijklmnopqrstuvwxyz';
    let output = '';
    for (let i = 0; i < length; i++) {
        const index = Math.round(Math.random() * (take.length - 1));
        output += take[index];
    }
    return output;
};
