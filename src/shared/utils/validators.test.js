import {
  validateNick,
  validateSeconds,
  validateUrl,
  validateIfStringIncludesOnlySpaces,
} from "./validators";

const nickCases = [
  [true, "TTT"],
  [false, "TT"],
  [false, "T1T"],
  [false, "   "],
  [false, "nickLongerThanEight"],
  [true, "nick"],
  [true, "correct"],
  [false, "TTT TT"],
];

describe("nick validation", () => {
  it.each(nickCases)("returns %s for %s", (expected, nick) => {
    expect(validateNick(nick)).toBe(expected);
  });
});

const secondsCases = [
  [true, 0],
  [true, 1],
  [true, 321],
  [false, "test"],
  [true, "321"],
  [true, "0001"],
  [false, "t"],
];

describe("seconds validation", () => {
  it.each(secondsCases)("returns %s for %s", (expected, seconds) => {
    expect(validateSeconds(seconds)).toBe(expected);
  });
});

// several more test cases should be written to validate fully URL
// https://onlinetestcase.com/test-cases-for-url-field/
// tests  just for example
const urlCases = [
  [true, "http://test.com"],
  [true, "http://test.uk.com"],
  [true, "https://test.uk"],
  [true, "ftp://test.uk"],
  [false, "http:/oneslash.com"],
  [false, " "],
  [false, "www.test.com"],
];

describe("url validation", () => {
  it.each(urlCases)("returns %s for %s", (expected, url) => {
    expect(validateUrl(url)).toBe(expected);
  });
});

const stringOnlySpacesCases = [
  [true, "   "],
  [true, " "],
  [false, "t"],
  [false, "test"],
  [true, ""],
];

describe("only spaces validation", () => {
  it.each(stringOnlySpacesCases)("returns %s for %s", (expected, str) => {
    expect(validateIfStringIncludesOnlySpaces(str)).toBe(expected);
  });
});
