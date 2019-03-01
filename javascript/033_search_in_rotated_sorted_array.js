const search = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((right-left)/2) + left;
        let pivotOnLeft = arr[mid] <= arr[right] && arr[mid] <= arr[mid+1];

        if (arr[mid] < target) {
            if (pivotOnLeft && arr[right] < target) right = mid - 1;
            else left = mid + 1;
        } else if (arr[mid] > target) {
            if (!pivotOnLeft && arr[left] > target) left = mid + 1;
            else right = mid - 1;
        } else return mid;
    }
    return arr[left] === target ? left : -1;
};



console.log(search([4,5,6,7,0,1,2], 0)); // 4
