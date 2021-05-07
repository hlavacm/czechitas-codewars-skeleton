const boolToWord = require("./codewars");

test("Check bool to word", () => {
    expect(boolToWord(true)).toBe("Yes");
    expect(boolToWord(false)).toBe("No");
});
