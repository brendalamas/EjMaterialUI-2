import "./App.css";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Link } from "@mui/material";



const App = ()=>{
  return (
    <div className="flex">
      <Toolbar  sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", bgcolor:"#E7EBF0", p:1, width:1315}} position="static" > 
        <Box>
          <Typography color="black" sx={{fontSize:18, fontWeight:"medium"}}> Company name </Typography>
        </Box>

        <Box sx={{display:"flex", color:"#007FFF", fontSize:12}}>
          <Typography sx={{m:1.5, fontWeight:"bold"}} variant="subtitle2">Features</Typography>
          <Typography sx={{m:1.5, fontWeight:"bold"}} variant="subtitle2">Enterprise</Typography>
          <Typography sx={{m:1.5, fontWeight:"bold"}} variant="subtitle2">Support</Typography>
          <Button sx={{fontWeight:"bold"}} variant="outlined">Login</Button>
        </Box>
      </Toolbar >

      <Container sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:500, mt:7}}>
        <Typography sx={{fontWeight:"bold", mb:2}} variant="h4"> Pricing </Typography>
        <Typography sx={{fontWeight:"bold", textAlign:"center"}} variant="h5" color="text.secondary"> Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization. </Typography>
        
        <Box sx={{display:"flex", mt:4}}>

          {/* primera card */}
          <Card sx={{width:250, display:"flex", flexDirection:"column", m:2}} >
            <CardHeader sx={{bgcolor:"#E0E3E7", color:"#007FFF", textAlign:"center"}}
              title="Free"
            />

            <CardContent>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                <Typography variant="h5" fontWeight="bold" fontSize={38}>$0 </Typography>
                <Typography variant="h6">/mo</Typography>
              </Box>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", m:1}}>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 10 users included </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 2 GB of storage </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Help center access </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Email support </Typography>
              </Box>
            </CardContent>

            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button sx={{textTransform:'lowercase', width:230}} variant="outlined">Sign up for free</Button>
            </CardActions>

          </Card>
          {/* segunda card */}
          <Card sx={{width:250, display:"flex", flexDirection:"column", m:2}}>
            <CardHeader sx={{bgcolor:"#E0E3E7", color:"#007FFF", textAlign:"center"}}
              title="Pro"
              subtitle="Most popular"
            />
            
            <CardContent>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                <Typography variant="h5" fontWeight="bold" fontSize={38}> $15 </Typography>
                <Typography variant="h6">/mo</Typography>
              </Box>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", m:1}}>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 20 users included </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 10 GB of storage </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Help center access </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Priority email support </Typography>
              </Box>
            </CardContent>

            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button sx={{textTransform:'lowercase', width:230}} variant="contained">Get started</Button>
            </CardActions>

          </Card>
          {/* tercera card */}
          <Card sx={{width:250, display:"flex", flexDirection:"column", m:2}}>
            <CardHeader sx={{bgcolor:"#E0E3E7", color:"#007FFF", textAlign:"center"}}
              title="Enterprise"
            />
            
            <CardContent>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                <Typography variant="h5" fontWeight="bold" fontSize={38}> $30 </Typography>
                <Typography variant="h6">/mo</Typography>
              </Box>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", m:1}}>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 50 users included </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> 30 GB of storage </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Help center access </Typography>
                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.5}> Phone & email support </Typography>
              </Box>
            </CardContent>

            <CardActions sx={{display:"flex", justifyContent:"center"}}>
              <Button sx={{textTransform:'lowercase', width:230}} variant="outlined">Contact us</Button>
            </CardActions>

          </Card>
        </Box>
      </Container>
      <Box sx={{mt:5, display:"flex", justifyContent:"space-between", fontWeight:"bold"}}>
        <Box sx={{display:"flex", flexDirection:"column", m:6}}>
          <Typography fontWeight="bold" variant="h6" sx={{mb:1}}>Company</Typography>
          <Link underline="none">Team</Link>
          <Link underline="none">History</Link>
          <Link underline="none">Contact us</Link>
          <Link underline="none">Locations</Link>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", m:6}}>
          <Typography fontWeight="bold" variant="h6" sx={{mb:1}}>Features</Typography>
          <Link underline="none">Cool stuff</Link>
          <Link underline="none">Random feature</Link>
          <Link underline="none">Team feature</Link>
          <Link underline="none">Developer stuff</Link>
          <Link underline="none">Another one</Link>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", m:6}}>
          <Typography fontWeight="bold" variant="h6" sx={{mb:1}}>Resources</Typography>
          <Link underline="none">Resource</Link>
          <Link underline="none">Resource name</Link>
          <Link underline="none">Another resource</Link>
          <Link underline="none">Final resource</Link>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", m:6}}>
          <Typography fontWeight="bold" variant="h6" sx={{mb:1}}>Legal</Typography>
          <Link underline="none">Privacy policy</Link>
          <Link underline="none">Terms of use</Link>
        </Box>
      </Box>
      <Typography color="text.secondary" variant="subtitle2"> Copyright © <Link underline="none"> Your Website </Link> 2022. </Typography>
    </div>
    
  )
}

export default App;