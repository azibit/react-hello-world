import React from 'react';
import {render} from 'react-dom';
import Logo from './Logo.jsx';
import MainDescription from './MainDescription.jsx';
import MoreDescription from './MoreDescription.jsx';
import ImagesWithWritings from './ImagesWithWritings.jsx';
import CompanyBio from './CompanyBio.jsx';
import Links from './Links.jsx';
import Footer from './Footer.jsx';
import HeaderDescription from './HeaderDescription.jsx';
import ImageDescription from './ImageDescription.jsx';



class App extends React.Component {
  render () {
    return (
    	<div>
    		<Logo/>
    		<MainDescription/>

    		<HeaderDescription icon_name = "web" header = "My Current Interests"/>
		      <div className="container section row">

		      		<MoreDescription icon_name = "sort_by_alpha" 
		      			header = "Algorithmics" body = "As the human population continues to grow exponentially,
		      				algorithms for solving basic problems become overwhelmed and therefore the need for 
		      					improving current Algorithms and building new ones."/>

		      		<MoreDescription icon_name = "https" header = "Enterprise Apps" 
		      			body = "Applications to manage the day to day affairs of human needs to be handled with a high 
		      				degree of security and accuracy. The need to develop enterprise 
		      					applications that cater for these."/>

		      		<MoreDescription icon_name = "library_books" header = "Academics" body = "Working in the industry is something 
		      			I cherish and love to do. However, I also love to always give back what I know through the Academic line.
		      				So I am currently seeking scholarships to help achieve this."/>

		      </div>

      		<ImagesWithWritings img = "img/background2.jpg" description = "Seek to always be better than you were yesterday. "/>

      		<div id = "Contact_Us" className = " section scrollspy">
      			<HeaderDescription icon_name = "shopping_cart" header = "What I Can Do For You"/>
		      <div className="container section row">

		      		<MoreDescription icon_name = "view_column" 
		      			header = "Mentorship" body = "I can always take you through any technology in my area
		      			of specialization that you feel you want to learn or improve on. I am not saying I know it all,
		      			but we could both work together to get better. Just let me know when you need me."/>

		      		<MoreDescription icon_name = "language" header = "Web Apps/Design" 
		      			body = "Need a good web application in no time. Call on me. You need a world class website for 
		      			your organization. Am your guy. I assure you you would love the experience. Feel free to check me out."/>

		      		<MoreDescription icon_name = "library_books" header = "Consultancy" body = "Need to work on any aspect of 
		      		Information technology. My connections and experience will definitely help start you in the right direction.
		      		I assure you that your project will only wax and not wane."/>

		      </div>
      		</div>

      		<div id = "Contact_Us" className = " section scrollspy">
      			<HeaderDescription icon_name = "shopping_cart" header = "Projects I have Worked On or Currently Working On"/>
		      <div className="container section row">

		      		<ImageDescription card_title = "SAFSMS" img = "img/safsms_1.svg" link = "http://safsms.com" 
		      		desc = "We’ve helped many clients overcome their peculiar challenges with 
		      			our indigenous experience and world-class expertise"/>

		      		<ImageDescription card_title = "SKOOLS" img = "img/skools.png" link = "http://skools.ng" 
		      		desc = "We have taken the school directory feature and transformed it into a platform 
		      		where parents can find befitting schools for their wards' or children"/>

		      		<ImageDescription card_title = "SRMS" img = "img/srms.png" link = "http://srms.com" desc = "Conceived from the need to address typical Nigerian problems, 
								SRMS has since 2007 housed over 100,000 Students Records 
									effortlessly and with a daily growing user base."/>


		      </div>
      		</div>


      		<footer className="page-footer teal">
   		 		<div className="container">
      				<div className="row">
      					<CompanyBio/>
      					<Links/>
      				</div>
      			</div>

      		<Footer/>
      		</footer>

    	</div>
    	)
    
  }
}

render(<App/>, document.getElementById('app'));