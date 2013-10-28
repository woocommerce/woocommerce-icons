# WooCommerce Icon Font 1.0.1
The font used throughout the WooCommerce UI for all icons. Designed by WooThemes, compiled using [IcoMoon](http://icomoon.io/).

## Usage - Independent
When using the icons in a separate project.
* Include `style.css`.
* Apply relevant classes to elements, e.g. `<span class=".wcicon-virtual"></span>`.
* Optionally include `lte-ie7.js` in conditional tags for support in IE7 and below.

## Usage - In WooCommerce extensions
When using the icons in a WooCommerce extension.
* Include the WooCommerce `mixins.less` file in your plugin's .less file: `@import '../../../woocommerce/assets/css/mixins.less';` (Based on your .less being located at `your-plugins/assets/css/yourstyles.less`).
* Use WooCommerce' built-in functions to set an icon, e.g:

```
// Hides an elements content, reshapes it into a 1em x 1em square containing a centrally aligned icon
.icon {
    .ir; 				// Icon replacement
}
.icon:before {
    .icon( "\e000" ); 	// Icon styles and glyph
}
```

Or:

```
// Prepends an element with an icon
.icon-link:before {
    .iconbefore( "\e000" );		// Icon styles and glyph
}
```

Or:

```
// Appends an element with an icon
.icon-link:after {
    .iconafter( "\e000" );		// Icon styles and glyph

}
```

See `index.html` for the glyph references.

## Changelog
### 09.19.2013
* Initial Release!