<?php
// Server side code has been deleted for security reasons and will be added after crowdsale
?>
<!DOCTYPE html>
<html>
<head>
	
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111095550-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-111095550-1');
	</script>
    <meta charset="utf-8">
    <meta id="pagemeta" page="pre-sale">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="img/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
	<link rel="manifest" href="img/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no">
    <title>SAFE HAVEN - Account Login</title>
    
    <meta name="description" content="SAFE HAVEN">
    <meta name="keywords" content="SAFE HAVEN, crypto, cryptocurrency, protect, assets, trust">
    <meta name="revisit-after" content="1 days">
    <meta http-equiv="X-UA-Compatible" content="IE=11">
    <link rel="author" content="SAFE HAVEN">
    <link rel="publisher" content="SAFE HAVEN">
    <meta property="og:title" content="SAFE HAVEN">
    <meta property="og:description" content="We make your assets inheritable without locking yourself out!">
    <meta property="og:image" content="//safehaven.io/img/safehaven-meta-tag.jpg">
    <meta property="og:url" content="//safehaven.io">
    <meta property="og:type" content="website">
    <meta name="twitter:title" content="SAFE HAVEN">
    <meta name="twitter:description" content="We make your assets inheritable without locking yourself out!">
    <meta name="twitter:image" content="//safehaven.io/img/safehaven-meta-tag.jpg">
    <meta name="twitter:url" content="//safehaven.io">
    <meta name="twitter:card" content="player">
    <link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/scrolltotop.js"></script>
	<script type="text/javascript">
	var onloadCallback = function() {
		grecaptcha.render('html_element', {
		'sitekey' : 'CODE REMOVED',
		'callback' : verifyCallback
		});
	};

	var verifyCallback = function(response) {
		enableBtn();
	};

	function enableBtn() {	
		var element = document.getElementById("but");
		element.classList.remove("disabled");
		document.getElementById("but").disabled = false;		
	}
	</script>
</head>

<body id="login">
	
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VVZBK4"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	
	<button onclick="topFunction()" id="myBtn" title="Go to top">&#8679;</button>
    <div class="nav-mobile-menu hidden"><i id="nav-menu-button" class="nav-menu-button fa fa-bars"></i>
        <ul>
			<li><a href="./#overview">Home</a></li>
            <li><a href="./#vision">Project</a></li>
			<li><a href="./files/SafeHaven_WhitePaper.pdf" target="_blank">White Paper</a></li>
			<li><a href="./files/SafeHaven_Token_Utilization_Architecture.pdf" target="_blank">Token Utilization</a></li>
			<li><a href="./#roadmap">Roadmap</a></li>
			<li><a href="./#team">Team</a></li>
	
			<li><a href="./faq.html">FAQ</a></li>
			<li><a href="https://wiki.safehaven.io" target="_blank">Wiki</a></li>
			<li><a href="./account.php">Account</a></li>	
        </ul>
    </div>
    <nav>
        <div class="nav-bar">
            <a href="/">
                <div id="nav-logo-color" class="nav-logo"></div>
                <div id="nav-logo-white" class="nav-logo"></div>
            </a>
            <ul>
			    <li><a href="./#overview">Home</a></li>
				<li><a href="./#vision">Project</a></li>
				<li><a href="./files/SafeHaven_WhitePaper.pdf" target="_blank">White Paper</a></li>
				<li><a href="./files/SafeHaven_Token_Utilization_Architecture.pdf" target="_blank">Token Utilization</a></li>
				<li><a href="./#roadmap">Roadmap</a></li>
				<li><a href="./#team">Team</a></li>
	
				<li><a href="./faq.html">FAQ</a></li>
				<li><a href="https://wiki.safehaven.io" target="_blank">Wiki</a></li>
				<li><a href="./account.php">Account</a></li>
				<li>
					<a href="https://fb.me/SafeHaven.io" target="_blank" onclick='track("Home/Facebook", {placement: "Home/Socialize"})' title='Facebook'><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
					<a href="https://twitter.com/safeHavenio" target="_blank" onclick='track("Home/Twitter", {placement: "Home/Socialize"})' title='Twitter'><i class="fa fa-twitter" aria-hidden="true"></i></a>
					<a href="https://www.reddit.com/r/safehavenio" target="_blank" onclick='track("Home/Reddit", {placement: "Home/Socialize"})' title='Reddit'><i class="fa fa-reddit-alien" aria-hidden="true"></i></a>
					<a href="https://t.me/safehavenio" target="_blank" onclick='track("Home/Telegram", {placement: "Home/Socialize"})' title='Telegram'><i class="fa fa-telegram" aria-hidden="true"></i></a>
			
					<a href="https://medium.com/@safehavenio" target="_blank" onclick='track("Home/Medium", {placement: "Home/Socialize"})' title='Medium'><i class="fa fa-medium" aria-hidden="true"></i></a>
					<a href="https://bitcointalk.org/index.php?topic=2803657.0" target="_blank" onclick='track("Home/Bitcointalk", {placement: "Home/Socialize"})' title='BitcoinTalk'><i class="fa fa-bitcoin" aria-hidden="true"></i></a>
				</li>
			</ul>
            <i id="nav-menu-button" class="nav-menu-button fa fa-bars"></i>
		</div>
    </nav>
    <section id="legal-header">
		<h4><span class="white">SAFE HAVEN</span></h4>
        <h1>Account Login</h1>
    </section>
	
	<section id=main>
		<div class=content>
			<div class="main-left left">
                <div class="main-img"></div>
            </div>
            <div class="main-right">
                <div>
                    <h3 class="txt-highlight">ACCOUNT</h3>
					<h2>Sign In Form</h2>
					<br>
					<p>
						Fill in your email and password to login:
					</p>
					<br>
                    <p>	
						<?php 
						// Server side code has been deleted for security reasons and will be added after crowdsale
						?>
						
						<form id="faq-form" action="?" method="post" autocomplete="off">
							<div class="input-container">
								<?php
								// Server side code has been deleted for security reasons and will be added after crowdsale
								?>
								<p>Email</p>
								<input type="email" class="input-block-level" placeholder="Email address" name="txtemail" required value=""/>
								<p>Password<p>
								<input type="password" class="input-block-level" placeholder="Password" name="txtpass" required value=""/>
								<br>
								<br>
								<div id="html_element"></div>
								<br>
								<br>
								<br>
								<br>
								<br>
					
								<button class="submit disabled" type="submit" id="but" name="btn-login" disabled  onclick='track("Login/Login Submit", {placement: "Login/Main"})'>Sign In</button>
								<br>
								<br>
								<p><a href="./fpass.php">Lost your Password?</a></p>							
							</div>
						</form>
					</p>
				</div>
			</div>
		</div>
    </section>
	
	
    <section id="connect">
        <div class="content">
            <div class="connect-copy-container">
                <h3 class="txt-highlight">Socialize</h3>
                <h2>Connect with us and protect your assets in our Safe Haven</h2>
				<div class="connect-social-container">
					<a href="https://fb.me/SafeHaven.io" target="_blank" onclick='track("Home/Facebook", {placement: "Home/Socialize"})'><i class="fa fa-facebook-official" aria-hidden="true"></i><span>Facebook</span></a>
					<a href="https://twitter.com/safeHavenio" target="_blank" onclick='track("Home/Twitter", {placement: "Home/Socialize"})'><i class="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
					<a href="https://www.reddit.com/r/safehavenio" target="_blank" onclick='track("Home/Reddit", {placement: "Home/Socialize"})'><i class="fa fa-reddit-alien" aria-hidden="true"></i><span>Reddit</span></a>
					<a href="https://t.me/safehavenio" target="_blank" onclick='track("Home/Telegram", {placement: "Home/Socialize"})'><i class="fa fa-telegram" aria-hidden="true"></i><span>Telegram</span></a>
				
					<a href="https://medium.com/@safehavenio" target="_blank" onclick='track("Home/Medium", {placement: "Home/Socialize"})'><i class="fa fa-medium" aria-hidden="true"></i><span>Medium</span></a>
					<a href="https://bitcointalk.org/index.php?topic=2803657.0" target="_blank" onclick='track("Home/Bitcointalk", {placement: "Home/Socialize"})'><i class="fa fa-bitcoin" aria-hidden="true"></i><span>Bitcointalk</span></a>
				</div>
            </div>
            <div class="connect-footer">
                <div class="connect-footer-menu">
					<a href="mailto:info@safehaven.io" class="connect-footer-menu-item">info@safehaven.io</a>
					<a href="terms.html" class="connect-footer-menu-item">Terms</a>
					<a href="privacy.html" class="connect-footer-menu-item">Privacy</a>
					<a href="purchase.html" class="connect-footer-menu-item">Purchase Agreement</a>
				</div>
                <div class="connect-footer-copyright">© 2017 SAFE HAVEN. All Rights Reserved.</div>
            </div>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/application.js"></script>
	
	<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
	
</body>
</html>