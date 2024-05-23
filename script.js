// function func(nums) {
//   let newSet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (newSet.has(nums[i])) {
//       return true;
//     } else {
//       newSet.add(nums[i]);
//     }
//   }
//   return false;
// }
// console.log(func(nums));
// function func(s, t) {
//   let str1 = s.split("").sort().join("");
//   let str2 = t.split("").sort().join("");
//   return str1 === str2;
// }
// console.log(func(s, t));
// function func(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// console.log(func(nums, target));
// function func(strs) {
//   let map = new Map();
//   for (let i = 0; i < strs.length; i++) {
//     const currentStr = strs[i].split("").sort().join("");
//     if (map.has(currentStr)) {
//       map.get(currentStr).push(strs[i]);
//     } else {
//       map.set(currentStr, [strs[i]]);
//     }
//   }
//   return Array.from(map.values());
// };
// console.log(func(strs));
// function func(nums, k) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     currElem = nums[i];
//     map.set(currElem, map.get(currElem || 0) + 1);
//   }
//   sort = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
//   return sort.slice(0, k).map((entry) => entry[0]);
// }
// const nums = [3,0,1,0],
//   k = 2;
// console.log(func(nums, k));
// function func(nums) {
//   let array = new Array(nums.length).fill(0);
//   let left = 1;
//   let right = 1;
//   for (let i = 0; i < nums.length; i++) {
//     array[i] = left;
//     left *= nums[i];
//   }
//   for (j = nums.length - 1; j >= 0; j--) {
//     array[j] *= right;
//     right *= nums[j];
//   }
//   return array;
// }
// console.log(func(nums));
// function func(board) {
//   let set = new Set();
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       const cellValue = board[i][j];
//       if (cellValue !== ".") {
//         let rowVal = `row ${i} ${cellValue}`;
//         let colVal = `col  ${j} ${cellValue}`;
//         let box = `box ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${cellValue}`;
//         if (set.has(rowVal) || set.has(colVal) || set.has(box)) {
//           return false;
//         } else {
//           set.add(rowVal);
//           set.add(colVal);
//           set.add(box);
//         }
//       }
//     }
//   }
//   return true;
// }
// console.log(func(board));
// function func(str1) {
//   encodeStr = str1.map((str) => `${str.length}/${str}`).join("");
//   let decodeFunc = decode(encodeStr);
//   return decodeFunc;
// }
// function decode(str) {
//   let result = [];
//   let i = 0;
//   while (i < str.length) {
//     const slashIdx = str.indexOf("/", i);
//     const length = Number(str.slice(i, slashIdx));
//     result.push(str.slice(slashIdx + 1, slashIdx + 1 + length));
//     i = slashIdx + 1 + length;
//   }
//   return result;
// }
// console.log(func(str1));
// function func(nums) {
//   let newSet = new Set(nums);
//   let maxLength = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let currentElem = nums[i];
//     if (!newSet.has(currentElem - 1)) {
//       let count = 1;
//       let nextElem = currentElem + 1;
//       while (newSet.has(nextElem)) {
//         nextElem++;
//         count++;
//       }
//       maxLength = Math.max(maxLength, count);
//     }
//   }
//   return maxLength;
// }
// console.log(func(nums));
// function func(s) {
//   let changeStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reverseStr = changeStr.split("").reverse().join("");
//   return changeStr === reverseStr;
// }
// console.log(func(s));
// function func(s1, s2) {
//   let array1 = new Array(26).fill(0);
//   let array2 = new Array(26).fill(0);
//   for (let i = 0; i < array1.length; i++) {
//     array1[s1.charCodeAt(i) - 97]++;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     array2[s2.charCodeAt(i) - 97]++;
//     if (i >= s1.length) {
//       array2[s2.charCodeAt(i - s1.length) - 97]--;
//     }
//     if (arrayEqual(array1, array2)) return true;
//   }
//   return false;
// }
// function arrayEqual(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(func(s1, s2));
// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0;
//   let rightMAx = 0;
//   let water = 0;
//   while (left < right) {
//     if (height[left] <= height[right]) {
//       leftMax = Math.max(leftMax, height[left]);
//       water += leftMax - height[left];
//       left++;
//     } else {
//       rightMAx = Math.max(rightMAx, height[right]);
//       water += rightMAx - height[right];
//       right--;
//     }
//   }
//   return water;
// }
// const height = [4,2,0,3,2,5]
// console.log(func(height));
// function func(prices) {
//   let MIN_PROFIT = Infinity;
//   let MAX_PROFIT = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const curr = prices[i];
//     MIN_PROFIT = Math.min(MIN_PROFIT, curr);
//     MAX_PROFIT = Math.max(MAX_PROFIT, curr - MIN_PROFIT);
//   }
//   return MAX_PROFIT;
// }
// console.log(func(prices));
// function func(s) {
//   let maxLen = 0;
//   let start = 0;
//   let newMAp = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (newMAp.has(char) && newMAp.get(char) >= start) {
//         start = newMAp.get(char) + 1;
//     }
//     newMAp.set(char, i);
//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   return maxLen;
// }
// console.log(func((s = "abcabcbb")));
// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   maxArea = 0;
//   while (left < right) {
//     currentHieght = Math.min(height[left], height[right]);
//     width = right - left;
//     area = width * currentHieght;
//     maxArea = Math.max(maxArea, area);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// }
// console.log(func((height = [1, 8, 6, 2, 5, 4, 8, 3, 7])));
// function func(s, t) {
//   let freqT = new Map();
//   for (let char of t) {
//     freqT.set(char, (freqT.get(char) || 0) + 1);
//   }
//   let left = 0;
//   let right = 0;
//   let count = t.length;
//   let minLength = Infinity;
//   let minWindow = "";
//   let freqS = new Map();
//   while (right < s.length) {
//     let rightChar = s[right];
//     freqS.set(right, (freqS.get(rightChar) || 0) + 1);
//     if (freqS.get(rightChar) <= freqT.get(rightChar)) {
//       count--;
//     }
//     while (count === 0) {
//       const windowLen = right - left + 1;
//       if (windowLen < minLength) {
//         minLength = windowLen;
//         minWindow = s.slice(left, right + 1);
//       }
//       let leftChar = s[left];
//       freqS.set(leftChar, freqS.get(leftChar) - 1);
//       if (freqT.get(char) && freqS.get(char) < freqT.get(char)) {
//         count++;
//       }
//       left++;
//     }
//     right++;
//   }
//   return minWindow;
// }
// console.log(func((s = "ADOBECODEBANC"), (t = "ABC")));


