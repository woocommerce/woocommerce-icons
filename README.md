# WooCommerce Icon Font 1.0
===========================
The font used throughout the WooCommerce UI for all icons. Designed by WooThemes, compiled using [IcoMoon](http://icomoon.io/).

## Usage - Independent
When using the icons in a separate project.
1. Include `style.css`.
2. Apply relevant classes to elements, e.g. `<span class=".wcicon-virtual"></span>`.

## Usage - In WooCommerce extensions
When using the icons in a WooCommerce extension.
1. Include the WooCommerce `mixins.less` file in your plugin's .less file: `@import '../../../woocommerce/assets/css/mixins.less';` (Based on your .less being located at `your-plugins/assets/css/yourstyles.less`).
2. Use the built-in functions to set an icon, e.g.
`
// Hides an elements content, reshapes it into a 1em x 1em square containing a centrally aligned icon
.icon {
	.ir; 				// Icon replacement
}
.icon:before {
	.icon; 				// Icon styles
	content: "\e000";	// Glyph
}`

Or:

`
// Prepends an element with an icon
.icon-link:before {
	.iconbefore;
	content: "\e000";
}`

Or:

`
// Appends an element with an icon
.icon-link:after {
	.iconafter;
	content: "\e000";
}`

## Changelog
### 09.19.2013
* Initial Release!