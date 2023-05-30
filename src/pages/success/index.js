// ** MUI Imports
import { Link } from 'next/link';
import { Typography, Button, Card,CardContent } from '@mui/material';


const Success = () => {
  return (
    <Card >
      <CardContent>
      <Typography variant="h4" sx={{mb:2}}>Poprawny zakup</Typography>
      <Typography variant="body1" sx={{mb:2}}>Twoja płatność została przetworzona pomyślnie.</Typography>
        <Button as={Link} href="/" variant="contained" color="primary">Powrót do strony głównej</Button>
      </CardContent>
    </Card>
  )
}

export default Success
