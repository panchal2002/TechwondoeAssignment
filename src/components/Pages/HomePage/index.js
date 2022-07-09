import React from 'react';
import Landing from '../../../components/Landing';
import Header from '../../Header/Header';
import Services from '../../../components/Services';
import Client from '../../../components/Client';
import WhyUs from '../../../components/WhyUs';
import Testimonials from '../../../components/Testimonials';
import ContactUs from '../../ContactUs';
import Blog from '../../Blog';
import Footer from '../../Footer';
import Top from '../../Top';
function Home({ homeContent }) {
    // console.log(homeContent)
    return (
        <div className="HomePage">
            <Header headerCont={homeContent[2].fields} />
            <Landing landingContent={homeContent[9].fields} />
            <Services homeServCont={homeContent[8].fields} />
            <Client homeClientCont={homeContent[7].fields} />
            <WhyUs whyUsCont={homeContent[6].fields} />
            <Testimonials testiCont={homeContent[5].fields} />
            <ContactUs contactCont={homeContent[4].fields} />
            <Blog blogCont={homeContent[3].fields} />
            <Footer footerCont={homeContent[1].fields} />
            <Top />
        </div>
    );
}

export default Home;

