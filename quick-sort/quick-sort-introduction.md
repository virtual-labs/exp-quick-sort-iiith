### What is Quick Sort?

Quick Sort is one of the sorting algorithm in data structures which uses Divide and Conquer strategy (it divides the given array into two smaller sub-arrays and sort them individually) in a recursive way.

In this experiment whenever we mention sorting it means sorting in ascending order.

In quicksort we select an element in the array and keep that element in it's sorted position. We call this element as 'Pivot'. For an element in an array to be in it's sorted position the array should satify the condition that all elements less than that element should be in it's left side of the array and all elements greater than that element should be in it's right side of the array.

**Partition1 ≤ Pivot ≥ Partition2**

After doing this, we will recursively do the same thing for all elements in the left part and all elements in the right part individually(since elements in the left part won't cross the position of pivot after sorting as they are less than pivot,similarly for elements in right side won't cross the position of pivot after sorting as they are greater than pivot) thus reducing the no. of elements we have to check in further steps.
### Steps to Sort an Unsorted Array with Quick Sort Algorithm

  -  **Pivot Selection and Partition** : Selects an element for partitioning around it and partition the array into two parts such that left part of the pivot contains elements less than pivot and right part contains elements greater than pivot.

  -  **Recursion in Quick Sort** : Recursively executes above step on both of the partitions(left,right) inividually till they get sorted.

  -  **Concatenation of the Sub-Arrays** : Concatenate all the sub-arrays according to their indices


