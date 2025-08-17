/* Minimal vanilla JS to support Tailwind-based site */

// Fade out preloader
window.addEventListener('load', function () {
	var pre = document.getElementById('preloader');
	if (pre) {
		pre.classList.add('opacity-0');
		setTimeout(function(){ 
			pre.classList.add('hidden'); 
		}, 300);
	}
});

// Lazy load via lozad if available
try {
	var observer = lozad();
	observer.observe();
} catch (e) {
	// lozad not loaded; ignore
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
	var toggle = document.getElementById('nav-toggle');
	var mobile = document.getElementById('mobile-nav');
	var desktop = document.getElementById('navigation');
	if (toggle && mobile) {
		toggle.addEventListener('click', function () {
			mobile.classList.toggle('hidden');
		});
	}

	// Smooth scroll for anchor links
	var links = document.querySelectorAll('nav a, .page-scroll, [data-scroll]');
	links.forEach(function (link) {
		link.addEventListener('click', function (e) {
			var href = link.getAttribute('href') || '';
			if (href.startsWith('#')) {
				e.preventDefault();
				var target = document.querySelector(href);
				if (target) {
					var top = target.getBoundingClientRect().top + window.scrollY - 60;
					window.scrollTo({ top: top, behavior: 'smooth' });
					mobile && mobile.classList.add('hidden');
				}
			}
		});
	});
});