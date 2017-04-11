function indexOf(text, pattern){
	var N, M;
	N = text.length;
	M = pattern.length;
	var ith = 0;
	var jth = 0;
	for (let i = 0 ; i < N-M+1 ; i++){
		ith = i ; 
		jth = 0 ;
		while( ith <  N && text.charAt(ith) === pattern.charAt(jth) ){
			ith++;
			jth++;
		}
		if ( jth === M ){
			console.log("Substring found at Index:"+i);
			return;
		}
	}
	console.log("Not found");
}