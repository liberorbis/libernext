// Simple JavaScript Templating
// Adapted from John Resig - http://ejohn.org/ - MIT Licensed

frappe.template = {compiled: {}, debug:{}};
frappe.template.compile = function(str) {
	if(str.indexOf("'")!==-1) {
		console.log("Warning: Single quotes (') may not work in templates");
	}
	if(!frappe.template.compiled[str]) {
		fn_str = "var p=[],print=function(){p.push.apply(p,arguments)};" +

	        // Introduce the data as local variables using with(){}
	        "with(obj){p.push('" +

	        // Convert the template into pure JavaScript
	        str
	          .replace(/[\r\t\n]/g, " ")
	          .split("{%").join("\t")
	          .replace(/((^|%})[^\t]*)'/g, "$1\r")
	          .replace(/\t=(.*?)%}/g, "',$1,'")
	          .split("\t").join("');")
	          .split("%}").join("\np.push('")
	          .split("\r").join("\\'")
	      + "');}return p.join('');";

  		frappe.template.debug[str] = fn_str;
		try {
			frappe.template.compiled[str] = new Function("obj", fn_str);
		} catch (e) {
			console.log("Error in Template:");
			console.log(fn_str);
			if(e.lineNumber) {
				console.log("Error in Line "+e.lineNumber+", Col "+e.columnNumber+":");
				console.log(fn_str.split("\n")[e.lineNumber - 1]);
			}
		}
    }

	return frappe.template.compiled[str];
};
frappe.render = function(str, data) {
	return frappe.template.compile(str)(data);
};
