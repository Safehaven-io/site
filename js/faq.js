var debounce = function(func, wait, immediate) {
	"use strict";

	var timeout;
	return function() {
		var context = this;
		var args = arguments;
		var later = function() {
			timeout = null;
			if ( !immediate ) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);
		if ( callNow ) {
			func.apply(context, args);
		}
	};
};

var Pab = (function (window, document, debounce) {
	"use strict";

	var dataAttr = "data-pab";
	var attrName = dataAttr.replace("data-", "") + "_";
	var btnClass = dataAttr.replace("data-", "") + "-btn";
	var dataExpandAttr = dataAttr + "-expand";
	var internalId = 0;

	function $ (selector) {
		return Array.prototype.slice.call(document.querySelectorAll(selector));
	}

	function _isExpanded (obj) { // or not aria-hidden
		return obj && (obj.getAttribute("aria-expanded") === "true" || obj.getAttribute("aria-hidden") === "false");
	}

	// This function is globally reusable. Perhaps externalise for reuse?
	var _getHiddenObjectHeight = function (obj) {
		var clone = obj.cloneNode(true);
		var height = 0;
		clone.id = obj.id + "_clone";
		clone.setAttribute("style",
						   "display:block;" +
						   "width:" + obj.offsetWidth + "px;" +
						   "position:absolute;" +
						   "top:0;" +
						   "left:-999rem;" +
						   "max-height:none;" +
						   "height:auto;" +
						   "visibility:visible;"
						   );

		// Append as next sibling - FAQ requirement.
		obj.parentNode.insertBefore(clone, obj.nextSibling);

		height = clone.clientHeight; // faster than getBoundingClientRect
		obj.parentElement.removeChild(clone);
		return height;
	};

	var _openCloseToggleTarget = function (toggle, target, isExpanded) {
		toggle.setAttribute("aria-expanded", !isExpanded);
		_setToggleMaxHeight(target);
		window.requestAnimationFrame(function(){
			target.setAttribute("aria-hidden", isExpanded);
		});
		// _setToggleSvgTitle(toggle); - not enough support to be useful
	};

	var _setToggleMaxHeight = function (target) {
		if (_isExpanded(target)) {
			// max-height overidden by CSS !important
			// target.style.maxHeight = 0;
		} else {
			target.style.maxHeight = _getHiddenObjectHeight(target) + "px";
		}
	};

	var _toggleClicked = function (event) {
		var toggle = event.target;
		var target;
		var isExpanded;

		if (toggle) {
			// To prevent children bubbling up to parent causing more than one click event
			event.stopPropagation();

			target = document.getElementById(toggle.getAttribute("aria-controls"));
			if (target) {
				isExpanded = _isExpanded(toggle);
				_openCloseToggleTarget(toggle, target, isExpanded);
			}
		}
	};

	var _addToggleListeners = function (toggle) {
		toggle.addEventListener("click", _toggleClicked, false);
	};

	var _setUpToggle = function (toggle) {
		// Create a html button, add content from parent, replace original parent content.
		var btn = document.createElement("button");
			
		btn.className = btnClass;
		btn.innerHTML = toggle.innerHTML;
		btn.setAttribute("aria-expanded", false);
		btn.setAttribute("id", attrName + internalId++);
		btn.setAttribute("aria-controls", toggle.getAttribute(dataAttr));

		toggle.innerHTML = "";
		toggle.appendChild(btn);
		
		return btn;
	};

	// Prestating the container class in the HTML allows the CSS to render before JS kicks in.
	// Add container class to parent if not prestated
	var _setUpToggleParent = function (toggle) {
		var parent = toggle.parentElement;
		if (parent && !parent.className.match(attrName + "container")) {
			//parent.classList.add(attrName + "container");
			parent.className += " " + attrName + "container";
		}
	};

	var _addToggleSVG = function (toggle) {
		var clone = toggle.cloneNode(true);
		if (!clone.innerHTML.match("svg")) {
			// HTML SVG definition allows more control
			clone.innerHTML += "<svg role=presentational focusable=false class=" + dataAttr.replace("data-", "") + "-svg-plus><use class=\"use-plus\" xlink:href=\"#icon-vert\" /><use xlink:href=\"#icon-hori\"/></svg>";
			//requestAnimationFrame(function () {
			toggle.parentElement.replaceChild(clone, toggle);
			//});
		}
		return clone;
	};

	var _setUpTargetAria = function (toggle, target) {
		target.setAttribute("aria-hidden", !_isExpanded(toggle));
		target.setAttribute("aria-labelledby", toggle.id);
	};

	var _resetAllTargetsMaxHeight = function () {
		var toggles = document.querySelectorAll("[" + dataAttr + "]");
		var i = toggles.length;
		var target;
		while (i--) {
			target = document.getElementById(toggles[i].getAttribute(dataAttr));
			if (target) {
				target.style.maxHeight = _getHiddenObjectHeight(target) + "px";
			}
		}
	};

	var isMustardCut = function () {
		return (document.querySelectorAll && document.addEventListener);
	};

	var _openIfRequired = function (toggle, target) {
		var fragmentId = window.location.hash.replace("#", "");
			
		// Expand by default "data-pab-expand" small delay applied
		if (toggle.parentElement.hasAttribute(dataExpandAttr)) {
			setTimeout(function () {
				_openCloseToggleTarget(toggle, target, _isExpanded(toggle));
			}, 500);
		}
		
		// Check url fragment and if target ID matches, open it
		if (target.id === fragmentId) {
			setTimeout(function () {
				_openCloseToggleTarget(toggle, target, false);
				toggle.focus();
			}, 1000);
		}
	};

	var addSingleToggleTarget = function (toggleParent) {
		var targetId = toggleParent.getAttribute(dataAttr);
		var target = document.getElementById(targetId);
		var toggle;

		if (target && isMustardCut) {
			toggle = _setUpToggle(toggleParent);
			_setUpToggleParent(toggleParent);
			toggle = _addToggleSVG(toggle);
			_setUpTargetAria(toggle, target);
			_addToggleListeners(toggle);
			_openIfRequired(toggle, target);
		}
	};

	var addToggles = function () {
		// Iterate over all toggles (elements with the "data-pab" attribute)
		var togglesMap = $("[" + dataAttr + "]").reduce(function (temp, toggleParent) {
			addSingleToggleTarget(toggleParent);
			return true;
		}, {});

		return true;
	};

	if (isMustardCut) {
		window.addEventListener("load", addToggles, false);

		// Recalculate all target max-heights after (debounced) window is resized.
		window.addEventListener("resize", debounce(_resetAllTargetsMaxHeight, 500), false);
	}

	return {
	// Exposes an addition function to the global scope allowing toggle & target to be added dynamically.
		add: addSingleToggleTarget
	};
}(window, document, debounce));