
const longestCommonSubstring = (s1, s2, s3) => {

  const helper = (p1, p2, p3) => {
    if (p1 === s1.length || p2 === s2.length || p3 === s3.length) return '';
    let result = '';

    for (let i = p1; i < s1.length; i++) {
      let l = s1[i];
      let ind2 = s2.indexOf(l, p2);
      let ind3 = s3.indexOf(l, p3);

      if (ind2 !== -1 && ind3 !== -1) {
        let subResult = l + helper(i + 1, ind2 + 1, ind3 + 1);
        // let subResult = l + longestCommonSubstring(s1.slice(i+1), s2.slice(ind2+1), s3.slice(ind3+1));
        if (subResult.length > result.length) result = subResult;
      }
    }

    return result;
  };

  return helper(0, 0, 0);
};

// const s1 = 'epidemiologist';
// const s2 = 'refrigeration';
// const s3 = 'suprcalifragilisticexpialidocious';

const s1 = 'supercalifragilisticexpial';
const s2 = 'supercalifragilisticexpial';
const s3 = 'supercalifragilisticexpial';

// const s1 = 'wxyz';
// const s2 = 'xyzw';
// const s3 = 'w';

const a = new Date().getTime();
console.log(longestCommonSubstring(s1, s2, s3));
const b = new Date().getTime();
console.log((b - a)/1000);

// average try 1: 10.5652
// average try 2: 5.9612
// average try 3: 7.006
