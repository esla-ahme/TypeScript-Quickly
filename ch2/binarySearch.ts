const binarySearch = (nums: number[], v: number): number => {
  let start: number = 0;
  let end: number = nums.length - 1;
  while (start <= end) {
    let pos: number = Math.floor((start + end) / 2);
    pos;
    if (nums[pos] === v) {
      return pos + 1;
    }
    if (v > nums[pos]) {
      start = pos + 1;
    } else {
      end = pos - 1;
    }
  }
  // if v doesnot exist return -1
  return -1;
}