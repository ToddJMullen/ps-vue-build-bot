export default {

    bind: (elem, binding ) => {//bind is called as soon as directive is bound to element
	console.log("binding:", binding );
	if( binding.arg !== "position"){//then it's unknown
	    return;
	}
	elem.style.position = "absolute";
	Object.keys(binding.modifiers).map( key => {
	    elem.style[ key ] = "5px";
	});
//	elem.style.bottom = "5px";
//	elem.style.right = "5px";
    }

}//pinDirective