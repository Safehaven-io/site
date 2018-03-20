function track(e, t) {
    (t = t || {}).category = getPage(), analytics.track(e, t)
}

function extractNamesFromName(e) {
    return e = e.trim(), (e = e.replace(/\s\s+/g, " ")).split(" ")
}

function testPhone(e) {
    return /^[\+]?[(]?[0-9]{2,4}[)]?[-\s\.]?[0-9]{2,4}[-\s\.]?[0-9]{3,10}$/im.test(e)
}

function submitEmail(e, t, a) {
    function o() {
        r.classList.add("hidden"), d.classList.add("hidden"), c.classList.add("hidden"), l.classList.add("hidden"), r.classList.remove("wiggle"), d.classList.remove("wiggle"), c.classList.remove("wiggle"), l.classList.remove("wiggle")
    }
    a.preventDefault();
    var s = "email1" === e ? "leaderboard" : "footer",
        n = checkIfPageIs("token") ? "Email Secure Your Place" : "Email Submit";
    track(n, {
        placement: s
    });
    var i = document.getElementById(e),
        r = document.querySelector("#" + t + " .msg.success"),
        d = document.querySelector("#" + t + " .msg.error"),
        c = document.querySelector("#" + t + " .msg.error-validation"),
        l = document.querySelector("#" + t + " .msg.loading"),
        m = document.querySelector(".email-modal");
    o(), l.classList.remove("hidden"), setTimeout(function() {
        if (!i.checkValidity()) return o(), c.classList.remove("hidden"), c.classList.add("wiggle"), void track(n + " Error", {
            type: "Validation",
            placement: s
        });
        var e = new XMLHttpRequest;
        e.open("POST", "https://safehaven.io/php/index.php", !0),
		e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onerror = function(t) {
            track(n + " Error", {
				http_status: "unknown",
                error_message: e.statusText,
                placement: s
            })
        }, e.onreadystatechange = function() {
            4 == e.readyState && 200 == e.status ? (track(n + " Success"), state.email = i.value, o(), l.classList.add("hidden"), r.classList.remove("hidden"), checkIfPageIs("token") && (m.classList.remove("hide"), m.classList.add("open")), setTimeout(function() {
                o(), i.value = ""
            }, 4e3)) : 200 === e.status || 204 === e.status || 0 === e.status || (o(), l.classList.add("hidden"), d.classList.remove("hidden"), d.classList.add("wiggle"), state.emailErrorLock || (track(n + " Error", {
                http_status: e.status,
                error_message: e.statusText,
                placement: s
            }), state.emailErrorLock = !0, setTimeout(function() {
                state.emailErrorLock = !1
            }, 5e3)))
        }, e.send("email=" + encodeURIComponent(i.value))
    }, 200)
}

function getDistanceDownPage() {
    return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}

function getPage() {
    return document.getElementById("pagemeta").getAttribute("page")
}

function checkIfPageIs(e) {
    return document.getElementById("pagemeta").getAttribute("page") === e
}

function addEvents(e) {
    window.addEventListener("scroll", function() {
        getDistanceDownPage() > 61 ? e.classList.add("nav-up") : e.classList.remove("nav-up")
    }) , document.addEventListener("click", function(e) {
        "nav-menu-button" === e.target.id ? document.querySelector(".nav-mobile-menu").classList.toggle("hidden") : document.querySelector(".nav-mobile-menu").classList.add("hidden")
    }), checkIfPageIs("token") && (document.querySelector(".email-modal .email-modal-container .fa-close").addEventListener("click", function(e) {
        document.querySelector(".email-modal").classList.remove("open"), document.querySelector(".email-modal").classList.add("hide")
    }), document.getElementById("email-form-3").addEventListener("submit", submitNameAndAmount)), (checkIfPageIs("home") || checkIfPageIs("token")) && (document.getElementById("newsletter").addEventListener("submit", function(e) {
        submitEmail("email1", "email-form-1", e)
    }), $("a").on("click", function(e) {
        var t = this.hash;
        "" !== t && (e.preventDefault(), $("html, body").animate({
            scrollTop: $(t).offset().top
        }, 800, function() {
            window.location.hash = t
        }))
    }))
}

function addAsync() {
    var e = document.createElement;
    document.createElement = function(t) {
        var a = e.call(document, t);
        return "script" === t && (a.async = !0), a
    }
}
var state = {
    email: "",
    startTime: null,
    heartBeatTimer: null,
    intervalTime: 57,
    intervalNumber: 0,
    emailErrorLock: !1
};

try{
	$('span').tooltip({
	  trigger: 'click',
	  placement: 'left'
	});

	function setTooltip(btn, message) {
	  $(btn).tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
	}

	function hideTooltip(btn) {
	  setTimeout(function() {
		$(btn).tooltip('hide');
	  }, 1000);
	}

	// Clipboard
	var clipboard = new Clipboard('span');

	clipboard.on('success', function(e) {
	  setTooltip(e.trigger, 'Copied to clipboard!');
	  hideTooltip(e.trigger);
	});

	clipboard.on('error', function(e) {
	  setTooltip(e.trigger, 'Copy failed!');
	  hideTooltip(e.trigger);
	});
}
catch(err){
	
}

document.addEventListener("DOMContentLoaded", function(e) {
    var t = document.querySelector(".nav-bar");
    window.pageYOffset > 61 && (t.classList.remove("nav-up"), t.classList.add("nav-up")), addAsync(), addEvents(t)
});

try{
	$("i#info").mouseenter(function(){
		$obj = $(this).parent().nextAll('div.info-block:first');
		$obj.addClass( "active" );
		$obj.animate({
		  opacity: 1
		}, 100);
	});

	$("i#info").mouseout(function(){
		$obj = $(this).parent().nextAll('div.info-block:first');
		$obj.animate({
		  opacity: 0
		}, 100, function(){
			$obj.removeClass( "active" );
		});
	});
}
catch(err){
	
}