/**
 * This function takes a list of non-negative integers and strings and returns a new list with the strings filtered out
 * @param {*} l The list to be filitered
 * @returns The list with all strings removed
 */
function filter_list(l) {
    return l.filter(num => typeof num == 'number')
  }