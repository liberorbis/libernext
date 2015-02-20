// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt 

function $c(command, args, callback, error, no_spinner, freeze_msg, btn) {
	return frappe.request.call({
		args: $.extend(args, {cmd: command}),
		success: callback,
		error: error,
		btn: btn,
		freeze: freeze_msg,
		show_spinner: !no_spinner
	})
}

// For calling an object
function $c_obj(doc, method, arg, callback, no_spinner, freeze_msg, btn) {
	if(arg && typeof arg!='string') arg = JSON.stringify(arg);
		
	args = {
		cmd:'runserverobj',
		args: arg,
		method: method
	};
	
	if(typeof doc=='string') {
		args.doctype = doc; 
	} else {
		args.docs = doc
	}
	
	return frappe.request.call({
		args: args,
		success: callback,
		btn: btn,
		freeze: freeze_msg,
		show_spinner: !no_spinner
	});
}

// For call a page metho
function $c_page(module, page, method, arg, callback, no_spinner, freeze_msg, btn) {
	if(arg && typeof arg!='string') arg = JSON.stringify(arg);
	return frappe.request.call({
		args: {
			cmd: module+'.page.'+page+'.'+page+'.'+method,
			arg: arg,
			method: method
		},
		success: callback,
		btn: btn,
		freeze: freeze_msg,
		show_spinner: !no_spinner
	});
}

// For calling an for output as csv
function $c_obj_csv(doc, method, arg) {
	// single
	
	var args = {}
	args.cmd = 'runserverobj';
	args.as_csv = 1;
	args.method = method;
	args.arg = arg;
	
	if(doc.substr)
		args.doctype = doc;		
	else
		args.docs = doc;

	// open
	open_url_post(frappe.request.url, args);
}

// call a url as POST
function open_url_post(URL, PARAMS, new_window) {
	var temp=document.createElement("form");
	temp.action=URL;
	temp.method="POST";
	temp.style.display="none";
	if(new_window){
		temp.target = '_blank';
	}
	for(var x in PARAMS) {
		var opt=document.createElement("textarea");
		opt.name=x;
		var val = PARAMS[x];
		if(typeof val!='string') 
			val = JSON.stringify(val);
		opt.value=val;
		temp.appendChild(opt);
	}
	document.body.appendChild(temp);
	temp.submit();
	return temp;
}