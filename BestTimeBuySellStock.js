// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function(prices) {
    
    let buyIndex = 0, sellIndex = 1;
    let maxProfit = 0;

    while (sellIndex < prices.length){
        if (prices[buyIndex] < prices[sellIndex]){
            profit = prices[sellIndex] - prices[buyIndex];
            maxProfit = Math.max(maxProfit, profit)
        }
        else{
            buyIndex = sellIndex;
        }
        sellIndex++;
    }

return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));