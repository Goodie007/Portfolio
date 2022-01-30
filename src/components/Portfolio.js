import React from 'react';

import '../App.css'



function Portfolio() {
    return (
        <div>
            <section class="s1">
                <div class="main-container">
                    {/*Rounded switch */} 
                    <label class="switch">
                        <input type="checkbox" />
			            <span class="slider round"></span>
	                </label>
			        <div class="greeting-wrapper">
                        <h1>Hi, I'm Aruoture Goodness</h1>
			        </div>
                
                
                    <div class="intro-wrapper">
                        <div class="nav-wrapper">
                            {/* Link around dots-wrapper added after tutorial video */}
					        <a href="index.html">
                                <div class="dots-wrapper">
                                    <div id="dot-1" class="browser-dot"></div>
							        <div id="dot-2" class="browser-dot"></div>
							        <div id="dot-3" class="browser-dot"></div>
						        </div>
					        </a>
					

					        
				        </div>

				        <div class="left-column">
                            <img id="profile_pic" src={require("../images/LinkedIn.jpg")} alt="port" />
                            <h5 style={{textAlign: "center", lineHeight: 0}}>Personalize Theme</h5>

					        <div id="theme-options-wrapper">
                                <div data-mode="light" id="light-mode" class="theme-dot"></div>
						        <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
						        <div data-mode="green" id="green-mode" class="theme-dot"></div>
						        <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
					        </div>

					        <p id="settings-note">*Theme settings will be saved for<br />your next vist</p>
				        </div>

				        <div class="right-column">
                        
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" class="corner"></div>
							        <div id="corner-tr" class="corner"></div>
							        <h3>What I Do</h3>
							        <p>I'm a Fullstack developer</p>
							        <div id="corner-br" class="corner"></div>
							        <div id="corner-bl" class="corner"></div>
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </section>

	        <section class="s2">
                <div class="main-container">
                    </div><div class="about-wrapper">
                        <div class="about-me">
                            <h4>More about me</h4>

					        <p>I build new projects and discover how new things work.</p>

					        <p>I'm in search of a great team & projects that interest me.</p>


					        <hr />

					       <h4>TOP EXPERTISE</h4>

					       <p>Fullstack developer with primary focus on Django + React: <a target="_blank" href="Resume.pdf">Download Resume</a></p>

					       <div id="skills">
						    <ul>
							    <li>Python</li>
							    <li>Django</li>
							    <li>JavaScript</li>
							    <li>React</li>
							    <li>Postgres</li>
						    </ul>

						    <ul>
							    <li>Google Maps API</li>
							    <li>JS Charts</li>
							    <li>Heroku</li>
							    <li>HTML/CSS</li>
						    </ul>

					    </div>

				    </div>

				
				

		        </div>
	        </section>

	        <section class="s1">
				<div class="main-container">
					<h3 style={{textAlign: "center"}}>Some of my past projects</h3>

			        <div class="post-wrapper">

			        </div>
		        </div>
	        </section>

	        <section class="s2">
		        <div class="main-container">
			        
			        <h3 style={{textAlign: "center"}}>Get In Touch</h3>

			        <form id="contact-form">
						<a name="contact"></a>

				        <label>Name</label>
				        <input class="input-field" type="text" name="name" />

				        <label>Subject</label>
				        <input class="input-field" type="text" name="subject" />

				        <label>Email</label>
				        <input class="input-field" type="text" name="email" />

				        <label>Message</label>
				        <textarea class="input-field" name="message"></textarea>

				        <input id="submit-btn" type="submit" value="Send" />
			        </form>
		        </div>
	        </section> 
        </div>
    )
}

export default Portfolio;