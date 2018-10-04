// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const rev = n
    .toString()
    .split("")
    .reverse()
    .join("")
  // parseInt("51-") === 51
  // parseInt("0051-") === 51
  return parseInt(rev) * Math.sign(n)
}

/**
 *  In case of n === -15,
 *  the value of variable rev is '51-', which of type is string.
 *  but after the value is passed through the fuction, parseInt(),
 *  the returned value is 15, which of type is integer.
 *  So, we can just multiply the value by Math.sign(n) to complete the mission.
 */

module.exports = reverseInt
