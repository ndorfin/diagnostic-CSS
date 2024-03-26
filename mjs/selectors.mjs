export const SELECTORS = [

	{
		selector: `
			[src=""]
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'If you use a `src` attribute, then it must contain a URL value.'
	},

	{
		selector: `
			[title=""]
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'If you use a `title` attribute, then it must contain a value.'
	},

	{
		selector: `
			[align],
			:not(img)[height],
			[valign],
			:not(img)[width]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This element contains a presentational attribute such as `align` or `width`.  These should be replaced with an appropriate CSS style rather.'
	},

	{
		selector: `
			[style]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'Try to avoid using the `style` attribute a.k.a. "inline style" - CSS should be your source of styling.'
	},

	{
		selector: `
			img:not([alt])
		`,
		type: 'accessibility',
		level: 'warning',
		suggestion: 'If this image is informational, then add suitable alternative text in the `alt` attribute. If the image is decorational, then keep the `alt` attribute empty.',
	},
	{
		selector: `
			img[alt=""]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This image is missing an `alt` attribute value.  Specify an `alt` attribute so that non-sighted users can understand what this image is trying to convey.  If this image is purely decorational, then consider applying this image via CSS.'
	},
	{
		selector: `
			img[height=""],
			img:not([height])
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This image is missing a `height` attribute or attribute value.  Declaring a `height` value will ensure content doesnʼt shift around while the image is loading.'
	},
	{
		selector: `
			img[width=""],
			img:not([width])
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This image is missing a `width` attribute or attribute value.  Declaring a `width` value will ensure content doesnʼt shift around while the image is loading.'
	},
	{
		selector: `
			img:not([src])
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'This `<img>` is missing a `src` attribute.  Without a `src` attribute this image will not render appropriately.',
	},

	{
		selector: `
			:is(ul, ol) > :not(li)
		`,
		type: 'validation',
		level: 'error',
		hint: 'The only valid child element for a list is a list-item (`<li>`)',
		suggestion: 'Move these child elements into a `<li>`',
	},

	{
		selector: `
			dl > :not(div):not(dd):not(dt)
		`,
		type: 'validation',
		level: 'error',
		hint: 'The only valid child elements for a definition list are the `div`, `dd`, and `dt` elements',
		suggestion: 'Move these child elements into a `<div>`, `<dd>`, or `<dt>`',
	},

	{
		selector: `
			:is(h1, h2, h3, h4, h5, h6, p) :is(ul, ol, dl)
		`,
		type: 'validation',
		level: 'error',
		hint: 'Lists can’t be nested within text-level block elements',
		suggestion: 'Make these lists siblings of their headings or paragraphs',
	},

	{
		selector: `
			:not(button)[role="button"]
		`,
		type: 'unnecessary-role',
		level: 'warning',
		hint: 'The `role` attribute here could be removed if you used the correct element instead',
		suggestion: 'Replace this element with a `<button>`. Then you can remove the `role` attribute.'
	},

	{
		selector: `
			body > :not(:is(
				h1, h2, h3, h4, h5, h6, p,
				ul, ol, dl,
				div,
				header, footer, article, aside, section, main, nav,
				table,
				figure, picture, video, audio, img, canvas
			))
		`,
		type: 'validation',
		level: 'error',
		hint: 'Child elements of the `<body>` must be block-level elements',
		suggestion: 'Wrap this inline element in a block-level element',
	},

	{
		selector: `
			a[href=""]
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'If you use a `href` attribute, then it must contain a URL value.'
	},
	{
		selector: `
			a[href="#"]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This anchor has an `href` attribute with a `#` as a value. Ideally, you should use a valid ID-ref URI as the `href` value.'
	},
	{
		selector: `
			a[target]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This anchor has a `target` attribute. Rather avoid opening new windows or targetting open windows.  If you really have to, you should use JS to add such functionality to new window links.'
	},

	{
		selector: `
			big,
			center,
			hr,
			font,
			small,
			s,
			u
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This element is considered a presentational element. Use the semantically preferred element and CSS to style rather than relying on the HTML to define the style here.'
	},

	{
		selector: `
			input[type="button"]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This `<input type="button">` is dysfunctional without the use of JavaScript.  Consider using a submit button and handle the form data correctly.'
	},
	{
		selector: `
			input:not([type])
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'This input element does not have a `type` attribute defined.  You should use the `type` attribute so that you can style it via CSS'
	},
	{
		selector: `
			input[type="image"][src]
		`,
		type: 'best-practices',
		level: 'warning',
		suggestion: 'Image input types are costly to maintain, incur additional HTTP hits and need JS to function properly'
	},
	{
		selector: `
			input[type="image"]:not([src])
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'This `<input type="image">` is missing its required `src` attribute',
	},

	{
		selector: `
			abbr[title=""],
			abbr:not([title])
		`,
		type: 'validation',
		level: 'error',
		suggestion: '`<abbr>` should always contain a `title`.'
	},
	{
		selector: `
			acronym
		`,
		type: 'deprecation',
		level: 'error',
		suggestion: '`<acronym>` was deprecated with the release of HTML5',
	},

	{
		selector: `
			form[action="],
			form:not([action])
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'This `<form>` is missing an `action` attribute or attribute value. Specify a valid URL as the `action` attribute value so that the `<form>` posts as normal.',
	},
	{
		selector: `
			form:not([enctype="form/multipart-data"]) input[type="file"]
		`,
		type: 'validation',
		level: 'error',
		suggestion: 'This form does not have the necessary `enctype` attribute for `<input type="file">`',
	}

];