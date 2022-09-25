// import { Box, Grid, Typography, Button, } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import Carousel from 'react-material-ui-carousel';
// import Hero1 from '../../../../assets/HomePage/Hero1.png';
// import Hero2 from '../../../../assets/HomePage/Hero2.png';
// import Hero3 from '../../../../assets/HomePage/Hero3.png';

// const useStyles = makeStyles((theme) => ({
//   valueBox: {
//     color: 'white',
//     background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(4,47,104,1) 0%, rgba(9,150,254,1) 100%, rgba(0,212,255,1) 100%)',
//     borderTopLeftRadius: '40px', 
//     borderTopRightRadius: '40px', 
//     position: 'relative', 
//     top: '-75px', 
//     zIndex: '1',
//   },
//   vRule: {
//     borderLeft: '3px solid #5189b9',
//     height: '100px',
//     marginLeft: '5vw',
//     [theme.breakpoints.down('md')]: { display: 'none', },
//   },
//   hRule: {
//     borderBottom: '3px solid #5189b9',
//     width: '100px',
//     marginLeft: '5vw',
//     marginTop: '10px',
//     marginBottom: '10px',
//     [theme.breakpoints.up('md')]: { display: 'none', },
//   },
//   accentWord: {
//     fontSize: '1.8em',
//     fontWeight: '400',
//   },
// }));

// const getFontSize = () => {
//   let screenSize = window.innerWidth;
//   if (screenSize <= 600) {
//     return '1.25em'
//   } else {
//     return '2em'
//   }
// }

// function HeroCarousel(props)
// {
//     var items = [
//         {
//           name: "Technologists",
//           description: "MadeLabs is a technology strategy and development company specializing in software product development and digital modernization.",
//           image: `${Hero1}`,
//         },
//         {
//           name: "Partners",
//           description: "We've been on both sides: as internal technology professionals building products and improving companies and now as partners to help others.",
//           image: `${Hero2}`,
//         },
//         {
//           name: "Problem Solvers",
//           description: "We want to offer our experience and a potential fresh perspective to you while backing it up with a talented team of engineers, product owners, business analysts, and architects.",
//           image: `${Hero3}`,
//         },
//     ]

//     return (
//         <Carousel duration='1000' interval='7000' autoPlay='true' indicators='false' navButtonsAlwaysInvisible='true'> 
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//       <Box sx={{ backgroundImage: `url(${props.item.image})`, color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: '30% 50%', height: '700px', }}>
//         <Grid container sx={{ maxWidth: '75%', paddingLeft: '5vw' }}>
//           <Grid item xs={12}>
//             <Typography variant='h2' sx={{ fontSize: '1.75em', letterSpacing: '.2em', }}>We Are<br /><Box sx={{ fontSize: `${getFontSize()}`, fontWeight: '500', }}>{props.item.name}</Box></Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant='subtitle1' sx={{ letterSpacing: '.1em', paddingY: '50px', }}>
//               {props.item.description}
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', }}>
//             <Button variant="contained" size='large' href='/about'>Learn More</Button>
//           </Grid>
//         </Grid>
//       </Box>
//     )
// }

function HomeHero() {

    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
  }
  
export default HomeHero;