// ** MUI Imports
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icon Import
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomChip from 'src/@core/components/mui/chip'

const PricingHeader = props => {
  // ** Props
  const { plan, handleChange } = props

  // ** Hook
  const hidden = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ mb: [10, 17.5], textAlign: 'center' }}>
      <Typography variant='h4'>Dostępne plany hostingowe</Typography>
      <Box sx={{ mt: 2.5, mb: 10.75 }}>
        <Typography variant='body2'>
        Przetestuj ofertę bez zobowiązań przez 30 dni        </Typography>
        <Typography variant='body2'>Wybierz najlepszy dla ciebie plan</Typography>
      </Box>
      <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
        <InputLabel
          htmlFor='pricing-switch'
          sx={{ fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem', color: 'text.secondary' }}
        >
Miesięczny        </InputLabel>
        <Switch color='secondary' id='pricing-switch' onChange={handleChange} checked={plan === 'annually'} />
        <InputLabel htmlFor='pricing-switch' sx={{ fontWeight: 500, cursor: 'pointer', fontSize: '0.875rem' }}>
          Roczny
        </InputLabel>
        {!hidden && (
          <Box
            sx={{
              top: -30,
              left: '50%',
              display: 'flex',
              position: 'absolute',
              transform: 'translateX(35%)',
              '& svg': { mt: 2, mr: 1, color: 'text.disabled' }
            }}
          >
            <Icon icon='mdi:arrow-down-left' />
            <CustomChip size='small' skin='light' color='primary' label='Zaoszczędź do 10%' />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PricingHeader
