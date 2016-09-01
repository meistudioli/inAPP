function pageInit() {
	var p, em;

	p = document.querySelector('p');
	while(p.childNodes.length) p.removeChild(p.firstChild);

	p.appendChild(document.createTextNode('Your device is '));
	em = document.createElement('em');
	em.textContent = navigator.isMobile ? 'mobile' : 'desktop';
	p.appendChild(em);
	p.appendChild(document.createTextNode(' and browser is '));
	em = document.createElement('em');
	em.textContent = navigator.inAPP ? 'in APP' : 'standalone';
	p.appendChild(em);
	p.appendChild(document.createTextNode('.'));

	p.classList.add('act');
}
/*programed by mei(李維翰), http://www.facebook.com/mei.studio.li*/