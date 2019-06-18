
								let mainNav = document.getElementById('js-menu');
								let navBarToggle = document.getElementById('js-navbar-toggle');

								navBarToggle.addEventListener('click', function () {
												mainNav.classList.toggle('active');
								});

								$(window).scroll(function() {
												if ($(document).scrollTop() > 150) {
																console.log($(document).scrollTop());
																$('.navbar').addClass('affix');
																if ($(document).scrollTop() > 370) {
																				document.getElementById("progress-container").style.visibility= "visible";
																				myFunction();    
																}     
												
												} else {
																document.getElementById("progress-container").style.visibility= "hidden";
																$('.navbar').removeClass('affix');
														
												}
								});
								$(document).ready(function(){
												if ($(document).scrollTop() > 150) {
																$('.navbar').addClass('affix');
																if ($(document).scrollTop() > 350) {
																				document.getElementById("progress-container").style.visibility= "visible";
																				myFunction();    
																}     
												
												} else {
																document.getElementById("progress-container").style.visibility= "hidden";
																$('.navbar').removeClass('affix');
														
												}

								});

								function myFunction() {
										var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
										var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
										var scrolled = (winScroll / height) * 100;
										document.getElementById("myBar").style.width = scrolled + "%";
								}
							

