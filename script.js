function mincost(arr)
{ 
//write your code here
// return the min cost
// Helper function to maintain the min-heap property
    function heapify(heap) {
        heap.sort((a, b) => a - b);
    }

    // Create a min-heap
    heapify(arr);
    let totalCost = 0;

    // Continue merging ropes until only one rope remains
    while (arr.length > 1) {
        // Remove the two smallest elements
        let first = arr.shift(); // Smallest
        let second = arr.shift(); // Second smallest

        // Calculate the cost of this merge
        let cost = first + second;
        totalCost += cost;

        // Add the merged rope back to the heap
        arr.push(cost);
        heapify(arr); // Re-sort to maintain min-heap property
    }

    return totalCost;
  
}

module.exports=mincost;
