class Formatter {
    public static formatNumberWithComma(input: number): string {
        var num = input.toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }
}

export default Formatter;