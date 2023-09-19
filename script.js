function volume_sphere() {
    //Write your code here
	let btn=document.getElementById("submit");
	let r=document.getElementById("radius");
	let vol=document.getElementById("volume");
	btn.addEventListener("click",()=>{
		let ra=r.value;
		let v=(4*22/7*ra*ra*ra)/3;
		vol.value=v;
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
