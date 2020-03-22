module.exports = class DepthCalculator {
    calculateDepth(arr, currentDepth = 0, maxDepth = 0) {
        currentDepth++;
        arr.forEach(element => {
            if(Array.isArray(element)) {
                this.calculateDepth(element, currentDepth);
            }
        });
        console.log(currentDepth > maxDepth);
        if(currentDepth > maxDepth) {
            maxDepth = currentDepth;
            console.log(maxDepth);
        }

        return maxDepth;
    }
};