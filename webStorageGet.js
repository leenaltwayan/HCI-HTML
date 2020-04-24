
function getUserData() {

    if ('localStorage' in window && window['localStorage'] !== null) {

        const name = localStorage.getItem('name');
		const choice = localStorage.getItem('choice');
        const interest = localStorage.getItem('interest');
    
        
    if (choice == "meme"){
      document.getElementById("meme").setAttribute("src","meme.jpg");
    }
    else{
      document.getElementById("cv").setAttribute("href","https://www.dropbox.com/s/uzcua04mpqzlxx1/Leen%20Altwayan%20CV.pdf?dl=0");
      var cv = document.getElementById("cv");
      var text = document.createTextNode("This is my cv");
      cv.appendChild(text);
    }    

    var result = interest.split(",");
    var percent = 0;
    var length = result.length;
        
    for (var i = 0 ; i < length ; ++i){
      if (result[i] == 'Reading')
      percent+=25;

      if (result[i] == 'Listening to music')
      percent+=25;

      if (result[i] == 'Playing video games')
      percent+=25;

      if (result[i] == 'Watching films/shows')
      percent+=25;
    }

    const node = document.createElement("p");
    const br = document.createElement("br");
    const textnode1 = document.createTextNode("Hello " + name);
    let textnode2 = document.createTextNode ("Our interests match "+ percent +"% , I am also interested in " + interest);
        
    if(percent == 0){
        textnode2 = document.createTextNode ("Looks like we don't have any similar interests, what a shame :(");
    }    

    node.appendChild(textnode1);
    node.appendChild(br);
  	node.appendChild(textnode2);
    document.querySelector("#result").appendChild(node);

	} 
    else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}

getUserData();

