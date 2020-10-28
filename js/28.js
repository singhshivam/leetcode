var strStr = function(haystack, needle) {
    if (needle == "") return 0;
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[j]) {
            if (j == needle.length - 1) return i-j;
            j++;
        }
        else {
            i -= j, j = 0;
        }
    }
    return -1;
};
