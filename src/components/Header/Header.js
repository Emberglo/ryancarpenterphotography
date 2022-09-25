// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
// import { AppBar, Box, IconButton, Toolbar, Menu, MenuItem, Link, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import logo from "../../assets/Header/logo.png";
// import twitterlogo from "../../assets/Header/twitter.svg";
// import linkedinlogo from "../../assets/Header/linkedin.svg";
// import { useLocation } from "@reach/router";
import logo from '../../assets/logo.png';

// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         '& a': {
//             color: 'white',
//         }
//     },
//     menuBar: {
//         justifyContent: 'space-between',
//     },
//     logo: {
//         width: '250px',
//         height: 'auto',
//         marginLeft: '5vw',
//         marginTop: '10px',
//         marginBottom: '10px',
//     },
//     desktopMenu: {
//         [theme.breakpoints.down('lg')]: { display: 'none', },
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     mobileMenu: {
//         [theme.breakpoints.up('lg')]: { display: 'none', },
//     },
//     dtNavLink: {
//       [theme.breakpoints.down('lg')]: { display: 'none', },
//       display: 'flex', 
//       padding: '0px 10px',
//       margin: '0px 35px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       alignContent: 'center',
//       '&:nth-of-type(1)': {
//         marginRight: '0px',
//       }
//     },
//     dtSocialLink: {
//         [theme.breakpoints.down('lg')]: { display: 'none', },
//         width: '25px',
//         height: 'auto',
//         padding: '10px',
//     },
//     mobSocialLink: {
//         width: '25px',
//         height: 'auto',
//         paddingRight: '5px',
//     },
//     subMenu: {
//         '& a': {
//             color: 'black',
//         }
//     }
//   }));

function Header(props) {
    // const classes = useStyles();
    // const location = useLocation();

    // // hacky, but a way to show the app nav background when no hero image is present
    // const nonHeroPages = ['/privacy-policy', '/terms-and-conditions'];

    // // Logic for expanding menu on mobile nav
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const open1 = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // let listener = null
    // const determineHeaderState = () => {
    //     const scrolled = document.scrollingElement.scrollTop;
    //     const currentPage = location.pathname;
    //     const isNotHeroPage = nonHeroPages.indexOf(currentPage) != -1;
        
    //     let scrollState = 'top';
    //     if (scrolled >= 120 || isNotHeroPage) {
    //       scrollState = 'notTop';
    //     } 

    //     return scrollState;
    // };

    // const [scrollState, setScrollState] = useState(determineHeaderState());
    // useEffect(() => {
    //   listener = document.addEventListener('scroll', e => {
    //     setScrollState(determineHeaderState);
    //   })
    //   return () => {
    //     document.removeEventListener('scroll', listener);
    //   }
    // }, [scrollState])

    // const background = () => {
    //     let color = '';
    //     switch (scrollState) {
    //         case 'top':
    //             color = 'transparent';
    //             break;
    //         case 'notTop':
    //             color = 'rgba(27, 34, 52, 0.9)';
    //             break;
    //         default:
    //             break;
    //     }
    //     return color;
    // }

    return (
        <div>
            <img src={logo} alt="Stooping Falcon Logo" />
            <h1>Ryan Carpenter Photography</h1>
        </div>
    )
}

export default Header;