window.URL = window.URL || window.webkitURL;

var fileSelectIDFront = document.getElementById("fileSelectIDFront"),
    fileElemIDFront = document.getElementById("fileElemIDFront"),
	fileListIDFront = document.getElementById("fileListIDFront"),
	fileIDFront  = document.getElementById("fileIDFront"),
	fileSelectIDSelfie = document.getElementById("fileSelectIDSelfie"),
	fileElemIDSelfie = document.getElementById("fileElemIDSelfie"),
    fileListIDSelfie = document.getElementById("fileListIDSelfie"),
	fileIDSelfie  = document.getElementById("fileIDSelfie");

fileSelectIDFront.addEventListener("click", function (e) {
	if (fileElemIDFront) {
		fileElemIDFront.click();
	}
	e.preventDefault(); // prevent navigation to "#"
}, false);
fileSelectIDSelfie.addEventListener("click", function (e) {
	if (fileElemIDSelfie) {
		fileElemIDSelfie.click();
	}
	e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files,fileList) {
	fileList = document.getElementById(fileList);
	if (!files.length) {
		//fileList.innerHTML = "<p style='color:#ff0000;font-size:12px;'>No image added</p>";
		fileList.innerHTML = "";
		var span = document.createElement("span");
		span.id = "error";
		span.className = "txt-highlight warning";
		span.innerHTML = "No image added";
		fileList.appendChild(span);
	} else {
		fileList.innerHTML = "";
		/*var list = document.createElement("ul");
		fileList.appendChild(list);*/
		for (var i = 0; i < files.length; i++) {
			/*var li = document.createElement("li");
			list.appendChild(li);*/
      
      		var img = document.createElement("img");
      		img.src = window.URL.createObjectURL(files[i]);
      		img.height = 60;
      		img.onload = function() {
				window.URL.revokeObjectURL(this.src);
      		}
      		fileList.appendChild(img);
      		/*var info = document.createElement("span");
      		info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
			info.innerHTML = files[i].name;
      		li.appendChild(info);*/
    	}
		/*for (var i = 0; i < files.length; i++) {
			var li = document.createElement("li");
			list.appendChild(li);
      
      		var img = document.createElement("img");
      		img.src = window.URL.createObjectURL(files[i]);
      		img.height = 60;
      		img.onload = function() {
				window.URL.revokeObjectURL(this.src);
      		}
      		li.appendChild(img);
      		var info = document.createElement("span");
      		//info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
			info.innerHTML = files[i].name;
      		li.appendChild(info);
    	}*/
  	}
}