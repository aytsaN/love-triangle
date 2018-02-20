/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
    var count=0;
    var lovers=[];

	for (var i=0; i<preferences.length; i++){
		var tmp=preferences[i];
		lovers[i]=tmp-1;
	}
	for (var i=0; i<lovers.length; i++) {
        var j = lovers[i];
        if (i != j) {
            var z = lovers[j];
            if (j != z) {
                if (lovers[z] == i) {
                    count++;
                    lovers[i] = lovers[j] = lovers[z] = null;
                }
            }
        }
    }
	return count;
};
