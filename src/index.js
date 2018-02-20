/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0);
  var x = preferences.length;
  var count = 0;
  for (i = 1; i < x; i++)
  {
    if ( preferences[preferences[preferences[i]]] === i && preferences[i]!=i)
    {count++}
   
  }
  return (count/3);
  // your implementation
};
