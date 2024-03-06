function haveCommonDigit(arr1, arr2) {
    function haveCommonDigit(arr1, arr2) {
        const str2 = arr2.join('');
        for (let digit of str1) {
            if (str2.includes(digit)) {
                return true; // Если хотя бы одна цифра найдена, возвращаем 
            }
        }
        return false; // Если не найдено ни одной одинаковой цифры, возвращаем false
    }
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];