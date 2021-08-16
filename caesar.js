const caesar = function (string, shift) {
    return string
        .split("")
        .map(char => {
            const code = char.charCodeAt();
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                return String.fromCharCode(
                    absMod(code + shift - codeset(code), 26) + codeset(code)
                );
            }
            return char;
        })
        .join("");
};
const absMod = (n, m) => (n % m + m) % m;
const codeset = (code) => code < 97 ? 65 : 97;
module.exports = caesar
