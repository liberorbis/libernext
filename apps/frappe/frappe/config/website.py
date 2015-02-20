from frappe import _

def get_data():
	return [
		{
			"label": _("Documents"),
			"icon": "icon-star",
			"items": [
				{
					"type": "doctype",
					"name": "Web Page",
					"description": _("Content web page."),
				},
				{
					"type": "doctype",
					"name": "Blog Post",
					"description": _("Single Post (article)."),
				},
				{
					"type": "doctype",
					"name": "Web Form",
					"description": _("User editable form on Website."),
				},
				{
					"type": "doctype",
					"name": "Blogger",
					"description": _("User ID of a blog writer."),
				},
				{
					"type": "doctype",
					"name": "Website Group",
					"description": _("Web Site Forum Page."),
				},
				{
					"type": "doctype",
					"name": "Post",
					"description": _("List of Web Site Forum's Posts."),
				},
				{
					"type": "doctype",
					"name": "Website Slideshow",
					"description": _("Embed image slideshows in website pages."),
				},
			]
		},
		{
			"label": _("Setup"),
			"icon": "icon-cog",
			"items": [
				{
					"type": "doctype",
					"name": "Website Settings",
					"description": _("Setup of top navigation bar, footer and logo."),
				},
				{
					"type": "doctype",
					"name": "Style Settings",
					"description": _("Setup of fonts and background."),
				},
				{
					"type": "doctype",
					"name": "Website Script",
					"description": _("Javascript to append to the head section of the page."),
				},
				{
					"type": "doctype",
					"name": "Blog Settings",
					"description": _("Write titles and introductions to your blog."),
				},
				{
					"type": "doctype",
					"name": "Blog Category",
					"description": _("Categorize blog posts."),
				},
				{
					"type": "doctype",
					"name": "About Us Settings",
					"description": _("Settings for About Us Page."),
				},
				{
					"type": "doctype",
					"name": "Contact Us Settings",
					"description": _("Settings for Contact Us Page."),
				},
				{
					"type": "doctype",
					"name": "Website Page Permission",
					"description": _("Define read, write, admin permissions for a Website Page."),
				},
				{
					"type": "doctype",
					"name": "Social Login Keys",
					"description": _("Enter keys to enable login via Facebook, Google, GitHub."),
				}
			]
		},
	]
