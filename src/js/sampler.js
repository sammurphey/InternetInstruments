function makeSquares (container) {
	var bounding = container.getBoundingClientRect(),
		children = container.childNodes,
		size;
		size = bounding.width / 8;
	i = 0;
	if (children.length) {
		for (i = 0; i < children.length; i += 1) {
			var child = children[i];
			if (child.nodeType == 1) {
				child.style.height = size + "px";
			}
		}
	}
}


//Init
var Triggers = document.getElementById("triggers");
makeSquares(Triggers);
