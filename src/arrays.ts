/* eslint-disable no-extra-parens */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newarr = [numbers[0], numbers[numbers.length - 1]];
    if (numbers.length === 0) {
        newarr = [];
    }
    return newarr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toNumbers = numbers
        .map(Number)
        .map((num: number): number => (isNaN(num) ? 0 : num));
    return toNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars = amounts
        .map((dollar: string): string => dollar.replace("$", ""))
        .map((num: string): number =>
            num === "" || isNaN(parseInt(num)) ? 0 : parseInt(num)
        );
    return dollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_message = messages
        .map((m: string): string => (m.endsWith("!") ? m.toUpperCase() : m))
        .filter((m1: string): boolean => !m1.endsWith("?"));
    return new_message;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            color === ""
    );
    return RGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum =
        addends.reduce((total: number, num: number) => total + num, 0) +
        "=" +
        addends.join("+");
    if (addends.length === 0) {
        sum = "0=0";
    }
    return sum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let foundNegative = false;
    let sum = 0;

    return values
        .map((num) => {
            if (foundNegative) {
                return num;
            }

            if (num < 0) {
                foundNegative = true;
                return sum;
            }

            sum += num;
            return num;
        })
        .concat(foundNegative ? [] : [sum]);
}
