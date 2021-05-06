import React from 'react'

import Icon1 from '../Recycling/images/compost_200.png';
import Icon2 from '../Recycling/images/donate_200.png';
import Icon3 from '../Recycling/images/craft_200.png';

import {RecyclingContainer, RecyclingH1, RecyclingWrapper, RecyclingCard, RecyclingIcon, RecyclingH2, RecyclingP} from './RecyclingElements';

const Recycling = () => {
    return (
        <RecyclingContainer id="services">
            <RecyclingH1>Not ready to eat?</RecyclingH1>
                <RecyclingWrapper>
                    <RecyclingCard href="http://www.epa.gov/recycle/composting-home" target="_blank" aria-label="Compost">
                        <RecyclingIcon src={Icon1}/>
                        <RecyclingH2>Compost</RecyclingH2>
                        <RecyclingP>Composting is a great way to turn food waste into soil!</RecyclingP>
                    </RecyclingCard>
                    <RecyclingCard href="https://www.feedingamerica.org/find-your-local-foodbank" target="_blank" aria-label="Donate">
                        <RecyclingIcon src={Icon2}/>
                        <RecyclingH2>Donate</RecyclingH2>
                        <RecyclingP>Donate your unused, unexpired dry goods to your local food bank.</RecyclingP>
                    </RecyclingCard>
                    <RecyclingCard href="https://www.pinterest.com/search/pins/?q=dry%20pasta%20crafts&rs=typed&term_meta[]=dry%7Ctyped&term_meta[]=pasta%7Ctyped&term_meta[]=crafts%7Ctyped"
                                  target="_blank" aria-label="Craft">
                        <RecyclingIcon src={Icon3}/>
                        <RecyclingH2>Craft</RecyclingH2>
                        <RecyclingP>Turn your unused pantry items into works of art!</RecyclingP>
                    </RecyclingCard>
                </RecyclingWrapper>
            </RecyclingContainer>
    )
}

export default Recycling
