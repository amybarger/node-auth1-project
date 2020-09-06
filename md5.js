const crypto = require("crypto");

const rounds = 1;
// number of hashing of hash

const value = "I am hashing";

console.time("hash time");

let hash = value;
for (let i = 0; i < rounds; i++) {
  hash = crypto
    .createHash("md5")
    .update(hash)
    .digest("hex");
}

console.timeEnd("hash time");
console.log(`result of ${rounds} MD5 hashes: ${hash}`);
