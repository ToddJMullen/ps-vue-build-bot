export default {

    bind: (elem) => {//bind is called as soon as directive is bound to element
	elem.style.position = "absolute";
	elem.style.bottom = "5px";
	elem.style.right = "5px";
    }

}//pinDirective