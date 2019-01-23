const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    count = {};

    for (i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]]++;
        } else {
            count[s[i]] = 1;
        }
    }

    for (i = 0; i < t.length; i++) {
        if (count[t[i]]) {
            if (count[t[i]] > 1) {
                count[t[i]]--;
            } else {
                delete count[t[i]];
            }
        } else {
            return false;
        }
    }

    return Object.keys(count).length === 0;
};

console.log(isAnagram('yellow', 'welloy'));
