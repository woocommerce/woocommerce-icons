/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'WooCommerce\'">' + entity + '</span>' + html;
	}
	var icons = {
			'wcicon-virtual' : '&#xe000;',
			'wcicon-grouped' : '&#xe002;',
			'wcicon-variable' : '&#xe003;',
			'wcicon-expand' : '&#xe005;',
			'wcicon-right' : '&#xe008;',
			'wcicon-up' : '&#xe009;',
			'wcicon-down' : '&#xe00a;',
			'wcicon-left' : '&#xe00b;',
			'wcicon-image' : '&#xe00c;',
			'wcicon-link' : '&#xe00d;',
			'wcicon-calendar' : '&#xe00e;',
			'wcicon-processing' : '&#xe00f;',
			'wcicon-view' : '&#xe010;',
			'wcicon-status-processing' : '&#xe011;',
			'wcicon-status-pending' : '&#xe012;',
			'wcicon-status-cancelled' : '&#xe013;',
			'wcicon-status-refunded' : '&#xe014;',
			'wcicon-status-completed' : '&#xe015;',
			'wcicon-status-failed' : '&#xe016;',
			'wcicon-check' : '&#xe017;',
			'wcicon-query' : '&#xe018;',
			'wcicon-truck-1' : '&#xe019;',
			'wcicon-truck-2' : '&#xe01a;',
			'wcicon-globe' : '&#xe01b;',
			'wcicon-gear' : '&#xe01c;',
			'wcicon-cart' : '&#xe01d;',
			'wcicon-card' : '&#xe01e;',
			'wcicon-stats' : '&#xe01f;',
			'wcicon-star-full' : '&#xe020;',
			'wcicon-star-empty' : '&#xe021;',
			'wcicon-up-down' : '&#xe022;',
			'wcicon-reports' : '&#xe023;',
			'wcicon-search' : '&#xe024;',
			'wcicon-search-2' : '&#xe025;',
			'wcicon-user' : '&#xe026;',
			'wcicon-windows' : '&#xe027;',
			'wcicon-note' : '&#xe028;',
			'wcicon-east' : '&#xe029;',
			'wcicon-north' : '&#xe02a;',
			'wcicon-attributes' : '&#xe02b;',
			'wcicon-inventory' : '&#xe02c;',
			'wcicon-mail' : '&#xe02d;',
			'wcicon-south' : '&#xe02e;',
			'wcicon-west' : '&#xe02f;',
			'wcicon-share' : '&#xe030;',
			'wcicon-refresh' : '&#xe031;',
			'wcicon-navigation' : '&#xe032;',
			'wcicon-contract' : '&#xe004;',
			'wcicon-downloadable' : '&#xe001;',
			'wcicon-plus' : '&#xe007;',
			'wcicon-simple' : '&#xe006;',
			'wcicon-on-hold' : '&#xe033;',
			'wcicon-external' : '&#xe034;',
			'wcicon-contract-2' : '&#xe036;',
			'wcicon-expand-2' : '&#xe035;',
			'wcicon-phone' : '&#xe037;',
			'wcicon-user-2' : '&#xe038;',
			'wcicon-status' : '&#xe039;',
			'wcicon-user-fill' : '&#xe03a;',
			'wcicon-phone-fill' : '&#xe03b;',
			'wcicon-status-fill' : '&#xe03c;',
			'wcicon-woo' : '&#xe03d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/wcicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};