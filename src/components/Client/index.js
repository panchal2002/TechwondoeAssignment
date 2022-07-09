import React from 'react'
import './style.css'
function Client({ homeClientCont }) {
    return (
        <div className='clients wf-section'>
            <div className='heading-client'>
                <h1 className='h1'>{homeClientCont.clientHeading1}
                    <span className='text-gradient'>{homeClientCont.clientHeading2}</span></h1>

            </div>
            <div className='clients-images'>
                <img src={homeClientCont.clientImage1.fields.file.url} loading="lazy" alt="" class="image-1 images" />
                <img src={homeClientCont.clientImage2.fields.file.url} loading="lazy" id="w-node-_78d542d2-65f6-eab6-1d12-55f18d32b3fb-059e42a0" alt="" class="image-2 images" />
                <img src={homeClientCont.clientImage3.fields.file.url} loading="lazy" className='images image-3' alt="" />
                <img src={homeClientCont.clientImage4.fields.file.url} loading="lazy" className='images image-4' alt="" />
                <img src={homeClientCont.clientImage5.fields.file.url} loading="lazy" className='images image-5' alt="" />
                <img src={homeClientCont.clientImage6.fields.file.url} loading="lazy" className='images image-6' alt="" />
                <img src={homeClientCont.clientImage7.fields.file.url} loading="lazy" className='images image-7' alt="" />
                <img src={homeClientCont.clientImage8.fields.file.url} loading="lazy" className='images image-8' alt="" />
                <img src={homeClientCont.clientImage9.fields.file.url} loading="lazy" className='images image-9' alt="" />
                <img src={homeClientCont.clientImage10.fields.file.url} loading="lazy" className='images image-10' alt="" />
                <img src={homeClientCont.clientImage11.fields.file.url} loading="lazy" className='images image-11' alt="" />
                <img src={homeClientCont.clientImage12.fields.file.url} loading="lazy" className='images image-12' alt="" />

            </div>
        </div>
    )
}

export default Client