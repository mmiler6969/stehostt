// ** MUI Imports
import { Link } from 'next/link';
import { Typography, Button, Card ,CardContent} from '@mui/material';


const Cancel = () => {
  return (
    <Card >
      <CardContent>
      <Typography variant="h4" sx={{mb:3}}>Błąd płatności</Typography>
      <Typography variant="body1" sx={{mb:3}}>Wystąpił błąd podczas przetwarzania twojej płatności.</Typography>
        <Button as={Link} href="/"variant="contained" color="primary">Powrót do strony głównej</Button>
        </CardContent>
    </Card>
  )
}

export default Cancel
