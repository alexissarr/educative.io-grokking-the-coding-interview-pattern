/**
    Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
    You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 
    Write a function to return the maximum number of fruits in both the baskets.

    Example 1:
    Input: Fruit=['A', 'B', 'C', 'A', 'C']
    Output: 3
    Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
    Example 2:

    Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
    Output: 5
    Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
    This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

    Hint 1:
    This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters.
    
    Hint 2:
    We can use a HashMap to remember the frequency of each fruit in the current window. We will try to extend the range [windowStart, windowEnd] by including one fruit at a time.
    
    Hint 3:
    If the number of distinct fruits in the HashMap exceeds two, we will shrink the window from the beginning until we are left with only two types of fruits.

 */

const fruitsIntoBaskets = (fruits: string[]): number => {};
