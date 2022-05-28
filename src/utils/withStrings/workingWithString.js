//! Заглавная первая буква
export const firstLetterUpperCase = function (string) {
    if(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

//! Обрезка текста
export const truncateString = (str, max, add) => {
    add = add || '...';
    return (typeof str === 'string' && str.length > max ? str.substring(0,max)+add : str);
};