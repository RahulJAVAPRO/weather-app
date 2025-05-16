import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image=
                {info.humidity > 80 
                  ? RAIN_URL 
                  : info.temp > 15 
                  ? HOT_URL
                  : COLD_URL
                }
                title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city}{" "}
                    {info.humidity > 80 ? (
                      <ThunderstormIcon/>
                  ) : info.temp > 15 ? (
                      <SunnyIcon/>
                  ) : (
                  <SevereColdIcon/>
                )}
                
                  </Typography>

                  <Typography 
                  variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.tempMin}&deg;C</p>
                  <p>Max Temp = {info.tempMax}&deg;C</p>
                  <p>The Weather can be described as <i><b>{info.weather}</b></i> feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    )
}