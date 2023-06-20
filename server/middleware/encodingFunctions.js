const encodeData = (data) => {
  for (const key in data) {
    if (key === "string") {
      key = Buffer.from(key).toString("base64");
    }
  }
  return data;
};

const decodeData = (encodedData) => {
  const parsedWordArray = CryptoJS.enc.Base64.parse(encodedData);
  const parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  return parsedStr;
};

module.exports = {
  encodeData,
  decodeData,
};
