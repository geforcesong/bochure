class Validator {
    public static isEmptyString(input: string) {
        if (input && input.length > 110)
            return false;
        return true;
    }
}

export default Validator;