import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Logo from '../../images/bounchouse.jpg';
import quick from '../../images/logo/Quick-view.svg';
import backyard from '../../images/logo/Backyard party-01.svg';
import wedding from '../../images/logo/Weddings-01.svg';
import check from '../../images/logo/Check-live.svg';
import business from '../../images/logo/Business-01.svg';
import sport from '../../images/logo/Sport-01.svg';
import school from '../../images/logo/School-01.svg';
import community from '../../images/logo/Community-01.svg';
import {FaCaretDown} from 'react-icons/fa';
import { NavbarContainer } from '../navbar/NavbarStyle';
import { CartButton, HomeBackgroungImg, HomepageImg, HomepageImgDiv, HomepageP, HomepageTitleDiv, ImgWrapper, Img, SubTitle, HomepageDivContainer, HomeDiv, FaqLink } from '../InfoSection/InfosectionStyle';
import {Link} from 'react-router-dom';

export default function Homepage() {
  return (
    <>
    <div>
      <HomeDiv>
        
        <HomeBackgroungImg src={Logo} alt='background-img' />
        {/* <div style={{position:'absolute'}}>
        <HomepageCarousel />
        </div> */}
          <div style={{position:'relative'}}>
          <Navbar />
        
        </div>
        <HomepageTitleDiv>
          <div style={{display:'block', position:'relative'}}>
        <h2 style={{color:'RGB(252, 115, 3)'}}>BRISBANE PARTY & EVENT HIRE..<br/>
        MADE EASY</h2>
        <p style={{color:'#fff', fontWeight:'900'}}><FaqLink to='##'>Jumping Castle</FaqLink> Hire | Party & Event Hire | Letter Light Hire</p>
        </div>
        </HomepageTitleDiv>
      </HomeDiv>

        {/* <div style={{position:'relative'}}>
          <img src={Logo} alt='background img' style={{height:'100vh', width:'100%', position:'absolute', top:'0', left:'0'}}/>

        </div> */}

    </div>

    <div style={{padding:'3%'}}>
    <HomepageDivContainer>
      <HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={backyard} alt='logo' />
        <HomepageP>Backyard Parties</HomepageP>
      </HomepageImgDiv>
      <HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={wedding} alt='logo' />
        <HomepageP>Weddings</HomepageP>
      </HomepageImgDiv><HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={business} alt='logo' />
        <HomepageP>Business/Corporate</HomepageP>
      </HomepageImgDiv><HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={sport} alt='logo' />
        <HomepageP>Sporting Clubs</HomepageP>
      </HomepageImgDiv><HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={school} alt='logo' />
        <HomepageP>School Events</HomepageP>
      </HomepageImgDiv><HomepageImgDiv style={{padding:'1%'}}>
        <HomepageImg src={community} alt='logo' />
        <HomepageP>Community/Public</HomepageP>
      </HomepageImgDiv>
    </HomepageDivContainer>
    <div>
      <SubTitle style={{fontSize:'medium'}}>-- PARTY HIRE PRODUCTS --</SubTitle>
      <HomepageDivContainer style={{display:'flex', justifyContent:'space-between'}}>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>MEDIUM BOUNCY CASTLE</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>LARGE COMBO CASTLE</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>OBSTACLE COURSES</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>INFLATABLE WATER SLIDES</HomepageP>
        </ImgWrapper>
      </HomepageDivContainer>
      <HomepageDivContainer style={{display:'flex', justifyContent:'space-between'}}>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>TABLES AND DRY BARS</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>CHAIRS AND STOOLS</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>GLOW FUNTIURES</HomepageP>
        </ImgWrapper>
        <ImgWrapper style={{margin:'0 3%', backgroundColor:'RGB(252, 115, 3)'}} height='250px' width='250px'>
          <Img src={Logo} alt='img' height='200px' />
          <HomepageP style={{color:'#fff'}}>FENCING AND BOLLARDS</HomepageP>
        </ImgWrapper>
      </HomepageDivContainer>
    </div>
    <div>
      <CartButton style={{width:'95%', height:'50px', marginLeft:'3%', padding:'3%', border:'2px solid RGB(252, 115, 3)'}} type='button' >View More <FaCaretDown /></CartButton>
    </div>
    </div>

    <div style={{display:'flex', border:'1px solid grey', height:'350px', width:'90%', margin:'5%', borderRadius:'12px'}}>
      <div style={{width:'50%'}}>
        <Img src={Logo} alt='img' width='100%' height='100%' style={{borderBottomLeftRadius: '12px', borderTopRightRadius:'0'}}/>
      </div>
      <div style={{width:'50%', marginTop:'5%' }}>
        <div style={{paddingLeft:'10%'}}>
        <SubTitle style={{textAlign:'left', fontSize:'x-large'}}>Booking Online Is As<br/>
        Easy As 1,2,3
        </SubTitle>
        <div style={{display:'flex', alignItems:'center', paddingRight:'3%'}}>
          <img src={quick} alt='quick-view' style={{width:'50px', height:'50px'}} />
          <p style={{fontSize:'small'}}>Select Your Item(s)</p>
        </div>
        <div style={{display:'flex', alignItems:'center', paddingRight:'3%'}}>
          <img src={check} alt='quick-view' style={{width:'50px', height:'50px'}} />
          <p style={{fontSize:'small'}}>Check Live Availability</p>
        </div>
        <div style={{display:'flex', alignItems:'center', paddingRight:'3%'}}>
          <img src={quick} alt='quick-view' style={{width:'50px', height:'50px'}} />
          <p style={{fontSize:'small'}}>Book & Pay Online</p>
        </div>
        <p>Seat back and relax and let us do the rest.</p>

      </div>
      </div>
    </div>
    <div>
    <Footer />
    </div>
    </>
  )
}
