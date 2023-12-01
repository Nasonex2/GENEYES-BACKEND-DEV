//Given a list of integers.
// 1. create a fucntion that returns the nth-rarest item.
//2. The function should be called nth_most_rate signature and it's signature nth_most_rate
//signature(list, n) where list is the array of integers and n is thenth rarest term. for example
//([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5],2) if 2 is supplied as n, the answer is 2 as 2 is the 2nd rarest item.

//

function nth_most_rate(list, num) {
  //create an object to store the frequency of each element//
  //loop through the intergers(list)//
  const frequency = {};
  for (let item of list) {
    if (frequency[item]) {
      frequency[item]++;
    } else if (num === 0) {
      // instead of the user getting undefined when input 0 , i used the below to keep the user on track//
      return "input from the given # in the arrays";
    } else {
      frequency[item] = 1;
    }
  }
  // covert the frequency object into an array of obejects//

  let ConvertFrequencyToArray = Object.entries(frequency).map(
    ([num, count]) => ({
      num: parseInt(num),
      count,
    })
  );
  //sort the array based on count in ascending order//

    ConvertFrequencyToArray.sort((a, b) => a.count - b.count);

  // find the nth rarest item//

  if (num <= ConvertFrequencyToArray.length) {
    return ConvertFrequencyToArray[num-1];
  } else {
    return "try again # not in the array!";
  }
}

const result = nth_most_rate([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1], 2);
console.log(result);

