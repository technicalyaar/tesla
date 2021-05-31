import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            
        <Section
        title= "Model S"
        description="Order Onlie For Touchless Delivery"
        backgoundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing-order"
       
        
        />
        <Section 
        
        title= "Model Y"
        description="Order Onlie For Touchless Delivery"
        backgoundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing-order"
        />
        <Section
        title= "Model 3"
        description="Order Onlie For Touchless Delivery"
        backgoundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing-order"
        />
        
        
        <Section
        title= "Lowest Cost solar panels in America"
        description="Moneyback guarantee"
        backgoundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
        />


        <Section
        title= "Solar for new roofs"
        description="Solar roof cost less then a new Roof plus solor panel"
        backgoundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
        />


        <Section
        title= "Accessories"
        description=""
        backgoundImg="accessories.jpg"
        leftBtnText="Shop now"
    
        />
        </Container>
    )
}

export default Home

const Container = styled.div`

height: 100vh;
`
