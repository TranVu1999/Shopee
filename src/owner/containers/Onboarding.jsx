import React, {useState} from 'react';
import styled from 'styled-components';

// Components
import Header from '../features/Login/Header';
import FormInfo from '../features/Onboarding/FormInfo';
import Step from '../features/Onboarding/Step';
import Welcome from '../features/Onboarding/Welcome';

const WidgetContent = styled.section`
    margin-top: 2.5rem;

    .container {
        padding: 0 1.5rem;
        background-color: #fff;
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
        border-radius: .25rem;
    }
`;

function Onboarding(props) {
    const [indexContent, setIndexContent] = useState(0);
    const [indexStep, setIndexStep] = useState(0);

    // render
    const renderWidgetContent = () => {
        switch(indexContent) {
            case 0: 
                return <FormInfo/>
            default: 
                return <Welcome/>
        }
    }

    return (
        <div>
            <Header/>

            <WidgetContent>
                <div className="container">
                    <Step indexStep = {indexStep}/>
                    {renderWidgetContent()}
                </div>
            </WidgetContent>
            
        </div>
    );
}

export default Onboarding;