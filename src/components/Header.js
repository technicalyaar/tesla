import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux"

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    
    return (
        <Container>
        <a href="#"> 
         <img src="/images/logo.svg" alt="logo"/>
        </a>
        <Menu>
        {cars && cars.map((car, index) =>
            <a key={index} href="#"> {car}</a>
            )}
         
        
        </Menu>
           
        <RightMenu>
        <a href="#"> Shop </a>
        <a href="# "> Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
       
        </RightMenu>

        <BurgerNav show={burgerStatus}>
        <Closewrapper> 
        <CustomClose onClick={()=>setBurgerStatus(false)} />
        </Closewrapper>
        {cars && cars.map((car, index) =>
           <li> <a key={index} href="#"> {car}</a></li>
            )}
         

         <li><a href="#">ROADSTER </a> </li>
         <li><a href="#">SEMI </a> </li>
         <li><a href="#">CHARGING </a> </li>
         <li><a href="#">POWERWALL </a> </li>
         <li><a href="#">Cybertruck </a> </li>
         <li><a href="#">COMMERCIAL ENERGY </a> </li>
         <li><a href="#"> UTILITIES </a> </li>
         <li><a href="#">COMMERCIAL ENERGY </a> </li>
         <li><a href="#">TEST DRIVE </a> </li>
         <li><a href="#">FIND US</a> </li>
         <li><a href="#"> SUPPORT </a> </li>
         <li><a href="#">Hamburger Mobile Secondary </a> </li>
         <li><a href="#">UNITED STATES </a> </li>


         
         
         
         
         
        
         
         
        
         
         

        </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px;
top:0;

right:0;
left:0;
justify-content:space-between;
z-index:1;
`

const Menu = styled.div`
display:flex;
justify-content:center;
flex:1;
align-items:center;

a{
    font-weight:600;
    text-transfrom:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media (max-width: 768px) {
    display:none;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;

text-transform:uppercase;
a{
    font-weight:600;
    text-transfrom:uppercase;
    
    margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav =  styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
text-align:start;
display:flex;
flex-direction:column;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);
    a{
        font-width:600;
    }
}

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;

`

const Closewrapper = styled.div`
display:flex;
justify-content: flex-end;

`
