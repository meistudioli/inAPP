//inAPP - detect iOS || Android
(function() {
	var UA, detect, isEventSupported, inAPP, isMobile;

	UA = navigator.userAgent;
	//methods
	isEventSupported = function(eventName, element) {
		var e, en = 'on' + eventName, isSupported;
		e = document.createElement('div');
		if (element) e = (element.tagName) ? element.cloneNode(true) : element;
		isSupported = (en in e);
		if (!isSupported && e.setAttribute) {
			e.setAttribute(en, '');
			isSupported = typeof e[en] == 'function';
			if (typeof e[en] != 'undefined') e[en] = null;
			e.removeAttribute(en);
		}//end if
		e = null;
		return isSupported;
	};

	detect = function() {
		return (isEventSupported('touchstart')) ? 'touch' : (navigator.msPointerEnabled && navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1) ? 'pointer' : false;
	};

	//properties
	Object.defineProperties(navigator, {
		isMobile: {
			enumerable: true,
			get: function() {
				if (typeof isMobile == 'undefined') {
					// isMobile = detect() || /(Android|iPad|iPhone|iPod)/i.test(UA);
					isMobile = detect();
				}//end if
				return isMobile;
			}
		},
		inAPP: {
			enumerable: true,
			get: function() {
				if (typeof inAPP == 'undefined') {
					if (this.isMobile) {
						if (/(Android|iPad|iPhone|iPod)/i.test(UA)) {
							if (/Android/.test(UA) || /CriOS/i.test(UA)) {
								//android
								inAPP = (/Android.*Version\/\d{1,2}.*Chrome\/[.0-9]* Mobile/i.test(UA) || /Android.*Version\/\d{1,2}(?!.*Mobile).*Safari\/[.0-9]*/i.test(UA)) ? true : false;
							} else {
								//iOS
								inAPP = (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(UA) || /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(UA)) ? true : false;
							}//end if
						}//end if
					} else {
						inAPP = false;
					}//end if
				}//end if
				return inAPP;
			}
		}
	});

	//init
	if (navigator.inAPP) {
		try {
			document.querySelector('html').classList.add('in-app');
		} catch(err) {}
	}//end if
})();
/*programed by mei(李維翰), http://www.facebook.com/mei.studio.li*/