# WooCommerce Icon Font 1.0.3
The font used throughout the WooCommerce UI for all icons. Designed by WooThemes, compiled using [IcoMoon](http://icomoon.io/).

[Click here](https://rawgit.com/woothemes/woocommerce-icons/master/demo.html) to view all the available icons.

## Usage - Independent
When using the icons in a separate project.
* Include `style.css`.
* Apply relevant classes to elements, e.g. `<span class=".wcicon-virtual"></span>`.
* Optionally include `lte-ie7.js` in conditional tags for support in IE7 and below.

## Usage - In WooCommerce extensions
When using the icons in a WooCommerce extension.
* Include the WooCommerce `mixins.scss` file in your plugin's .scss file: `@import '../../../woocommerce/assets/css/mixins.scss';` (Based on your .scss being located at `your-plugins/assets/css/yourstyles.scss`).
* Use WooCommerce' built-in functions to set an icon, e.g:

```
// Hides an elements content, reshapes it into a 1em x 1em square containing a centrally aligned icon
.icon {
    @include .ir; 				// Icon replacement
}
.icon:before {
    @include .icon( "\e000" ); 	// Icon styles and glyph
}
```

Or:

```
// Prepends an element with an icon
.icon-link:before {
    @include .iconbefore( "\e000" );		// Icon styles and glyph
}
```

Or:

```
// Appends an element with an icon
.icon-link:after {
    @include .iconafter( "\e000" );		// Icon styles and glyph

}
```

See `index.html` for the glyph references.

## Changelog

### 30.10.2014 - 1.0.3
* Added ccv icon

### 12.05.2013 - 1.0.2
* Added edit icon

### 09.19.2013
* Initial Release!
