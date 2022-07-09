import React, { useState } from 'react'
import Slide from './slide';
import './style.css'
function TestimonialCarousel({ testiCont }) {
    const [btn1, setBtn1] = new useState(true);
    const [btn2, setBtn2] = new useState(false);
    const [btn3, setBtn3] = new useState(false);
    const clientDetail1 = {
        clientName: testiCont.clientName1,
        clientCompany: testiCont.clientCompany1,
        clientDesc: testiCont.clientDesc1,
        clientImage: testiCont.image1.fields.file.url
    }
    const clientDetail2 = {
        clientName: testiCont.clientName2,
        clientCompany: testiCont.clientCompany2,
        clientDesc: testiCont.clientDesc2,
        clientImage: testiCont.image2.fields.file.url
    }
    const clientDetail3 = {
        clientName: testiCont.clientName3,
        clientCompany: testiCont.clientCompany3,
        clientDesc: testiCont.clientDesc3,
        clientImage: testiCont.image3.fields.file.url
    }
    function handleBtn1() {
        setBtn1(true);
        setBtn2(false);
        setBtn3(false);
    }
    function handleBtn2() {
        setBtn1(false);
        setBtn2(true);
        setBtn3(false);
    }
    function handleBtn3() {
        setBtn1(false);
        setBtn2(false);
        setBtn3(true);
    }
    return (
        <>
            <div class="slider-box">
                <div id='slider' className={btn1 ? 'btn1Active' : btn2 ? 'btn2Active' : 'btn3Active'}>
                    <Slide clientDetail={clientDetail1} testiCS={testiCont.testimonialCaseStudies} />
                    <Slide clientDetail={clientDetail2} testiCS={testiCont.testimonialCaseStudies} />
                    <Slide clientDetail={clientDetail3} testiCS={testiCont.testimonialCaseStudies} />
                </div>
            </div>
            <div class="indicators">
                <button id="btn1" className={btn1 ? 'active' : ''} onClick={() => handleBtn1()}></button>
                <button id="btn2" className={btn2 ? 'active' : ''} onClick={() => handleBtn2()}></button>
                <button id="btn3" className={btn3 ? 'active' : ''} onClick={() => handleBtn3()}></button>
            </div>
        </>
    )
}

export default TestimonialCarousel;