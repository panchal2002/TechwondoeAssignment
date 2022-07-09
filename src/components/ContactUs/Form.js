import React from 'react'
import './style.css'
function Form({ formDetail }) {
    return (
        <div className='form-section'>
            <div className='form'>
                <form action="/action_page.php">
                    <label for="name">{formDetail.formName}</label><br />
                    <input type="text" class="text-field w-input" maxlength="256" name="Name-2" data-name="Name 2" placeholder="" id="Name-2" /><br /><br />
                    <label for="email">{formDetail.formEmail}</label><br />
                    <input type="email" class="text-field w-input" maxlength="256" name="Email-2" data-name="Email 2" placeholder="" id="Email-2" required="" /><br /><br />
                    <label for="message">{formDetail.formMessage}</label><br />
                    <textarea name="Text-Area-2" maxlength="5000" id="Text-Area-2" data-name="Text Area 2" placeholder="" class="text-field area w-input"></textarea><br /><br />
                </form>
            </div>
            <div className='form-services'>
                <label for="Text-Area-3" class="field-label-form">{formDetail.formSevicesHeading}</label>
                <div>
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService1}</span>
                    </label><br />

                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService2}</span>
                    </label><br />
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService3}</span>
                    </label><br />
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService4}</span>
                    </label><br />
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService5}</span>
                    </label><br />
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService6}</span>
                    </label><br />

                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService7}</span>
                    </label><br />
                    <label for="vehicle1">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <span>{formDetail.formService8}</span>
                    </label>
                    <br />
                </div>
                <button type='submit'> {formDetail.sendButton}</button>
            </div>
        </div>
    )
}

export default Form