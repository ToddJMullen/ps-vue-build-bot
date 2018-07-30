export default {

    bind: (elem, binding ) => {//bind is called as soon as directive is bound to element
	console.log("binding:", binding );
//	if( binding.arg !== "position"){//then it's unknown
//	    return;
//	}
	// ^^^ binding.arg is used with the "v-pin.absolute..." syntax
	elem.style.position = "absolute";
	Object.keys(binding.value).map( position => {
	    elem.style[ position ] = binding.value[ position ];
	});
//	Object.keys(binding.modifiers).map( key => {
//	    elem.style[ key ] = "5px";
//	});
	// ^^^ binding.modifiers is used with the "v-pin.absolute.top.right" syntax
//	elem.style.bottom = "5px";
//	elem.style.right = "5px";
    }

}//pinDirective