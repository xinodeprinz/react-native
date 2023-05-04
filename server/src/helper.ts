type PhotoString = (i: number) => string;

export const photoString: PhotoString = (length: number) => {
    const take: string = 'abcdefghijklmnopqrstuvwxyz';
    let output: string = '';

    for (let i = 0; i < length; i++) {
        const index: number = Math.round(Math.random() * (take.length - 1));
        output += take[index];
    }

    return output;
}

