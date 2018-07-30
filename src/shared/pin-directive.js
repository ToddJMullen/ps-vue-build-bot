export default function pinDirective( elem, binding ){//shorthand for bind & update binding
//    console.log("pinDirective(), binding:", binding );
    elem.style.position = "absolute";
    Object.keys(binding.value).map( position => {
	elem.style[ position ] = binding.value[ position ];
    });
}


////function setStyle( elem, binding ){
//    console.log("setStyle(), binding:", binding );
//    elem.style.position = "absolute";
//    Object.keys(binding.value).map( position => {
//	elem.style[ position ] = binding.value[ position ];
//    });
//}
//
//export default {
//
//    bind: (elem, binding) => {
//	setStyle( elem, binding );
//    }
//    ,update: (elem, binding ) => {//bind is called as soon as directive is bound to element
//	setStyle( elem, binding );
////	console.log("binding:", binding );
////	if( binding.arg !== "position"){//then it's unknown
////	    return;
////	}
////	// ^^^ binding.arg is used with the "v-pin.absolute..." syntax
////	elem.style.position = "absolute";
////	Object.keys(binding.value).map( position => {
////	    elem.style[ position ] = binding.value[ position ];
////	});
////	Object.keys(binding.modifiers).map( key => {
////	    elem.style[ key ] = "5px";
////	});
//	// ^^^ binding.modifiers is used with the "v-pin.absolute.top.right" syntax
////	elem.style.bottom = "5px";
////	elem.style.right = "5px";
//    }
//    ,inserted: (elem, binding ) => {
//	console.log("...node inserted into parent")
//    }
//    ,componentUpdated: (elem, binding ) => {
////	fires like updated, but only after all children updated
//    }
//    ,unbind: (elem, binding ) => {
//	//called when unbound from parent component
//    }
//
//}//pinDirective