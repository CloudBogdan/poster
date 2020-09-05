function addZero(num: string | number): string {

    if (num.toString().length === 1)
        return "0" + num;

    return num.toString();

}

export function formatDate(date: Date): string {

    return `${ addZero(date.getMinutes()) }:${ addZero(date.getHours()) } ${ addZero(date.getDate()) }.${ addZero(date.getMonth() + 1) }.${ date.getFullYear().toString().slice(2) }`;

}