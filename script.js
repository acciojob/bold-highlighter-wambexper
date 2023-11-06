function highlight() {
    //Write your code here
    
	let a=document.getElementsByTagName("strong");
	for(let i=0;i<a.length;i++){
		a[i].style.color="green";
	}

}


function return_normal() {
    //Write your code here
   let a=document.getElementsByTagName("strong");
	for(let i=0;i<a.length;i++){
		a[i].style.color="black";
}
    
}