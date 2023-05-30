// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MuiCardContent from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Imports
import PricingCTA from 'src/views/pages/pricing/PricingCTA'
import PricingTable from 'src/views/pages/pricing/PricingTable'
import PricingPlans from 'src/views/pages/pricing/PricingPlans'
import PricingHeader from 'src/views/pages/pricing/PricingHeader'
import PricingFooter from 'src/views/pages/pricing/PricingFooter'

// ** Styled Components
const CardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: `${theme.spacing(20, 36)} !important`,
  [theme.breakpoints.down('xl')]: {
    padding: `${theme.spacing(20)} !important`
  },
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(10, 5)} !important`
  }
}))

const data = {
  pricingPlans: [
    {
      id:0,
      imgWidth: 100,
      title: 'Basic',
      imgHeight: 100,
      monthlyPrice: 20,
      currentPlan: false,
      popularPlan: false,
      subtitle: 'Najprostszy plan dla małych i średnich firm',
      imgSrc: '/images/pages/pricing-illustration-1.png',
      yearlyPlan: {
        perMonth: 18,
        totalAnnual: 216
      },
      planBenefits: [
        '50 GB SSD',
        'Nielimitowany transfer',
        'Kopia zapasowa wykonywana co 24h / dostępna do 14 dni wstecz',
        'Lokalizacja serwerów stron www w Polsce',
        'darmowe certyfikaty Lets Encrypt'
      ]
    },
    {
      id:1,
      imgWidth: 100,
      imgHeight: 100,
      monthlyPrice: 49,
      title: 'Standard',
      popularPlan: true,
      currentPlan: false,
      subtitle: 'Najprostszy plan dla małych i średnich firm potrzebujących trochę większej pojemności',
      imgSrc: '/images/pages/pricing-illustration-2.png',
      yearlyPlan: {
        perMonth: 40,
        totalAnnual: 480
      },
      planBenefits: [
        '150 GB SSD',
        'Nielimitowany transfer',
        'Kopia zapasowa wykonywana co 24h / dostępna do 14 dni wstecz',
        'Lokalizacja serwerów stron www w Polsce',
        'darmowe certyfikaty Lets Encrypt'
      ]
    },
    {
      id:2,
      imgWidth: 100,
      imgHeight: 100,
      monthlyPrice: 99,
      popularPlan: false,
      currentPlan: false,
      title: 'Enterprise',
      subtitle: 'Dla dużych organizacji Moc chmury w przyjaznym wydaniu ',
      imgSrc: '/images/pages/pricing-illustration-3.png',
      yearlyPlan: {
        perMonth: 80,
        totalAnnual: 960
      },
      planBenefits: [
        'Łatwe zarządzanie hostingiem',
        'Unikalne rozwiązanie hostingowe',
        'Bezpieczeństwo danych',
        'RAM (dostępny/gwarantowany) 8 GB / 4 GB    ',
        'Autoskaler'
      ]
    }
  ],
  faq: [
    {
      id: 'general-settings',
      question: 'Czym są ustawienia ogólne?',
      answer:
        'Ustawienia ogólne to zestawienie podstawowych konfiguracji dla konta hostingowego, które wpływają na działanie serwisu. Można w nich znaleźć opcje dotyczące języka, strefy czasowej, preferencji wyświetlania, itp.'
    },
    {
      id: 'users',
      question: 'Ile użytkowników mogę obsłużyć na swoim koncie hostingowym?',
      answer:
        'Liczba użytkowników, które można obsłużyć na koncie hostingowym, zależy od wybranego planu. W przypadku planu Enterprise nie ma limitu użytkowników, więc możesz obsłużyć dowolną liczbę użytkowników.'
    },
    {
      id: 'advanced-settings',
      question: 'Jakie są zaawansowane ustawienia?',
      answer:
        'Zaawansowane ustawienia to dodatkowe opcje konfiguracyjne dostępne na koncie hostingowym, które pozwalają na bardziej zaawansowane dostosowanie serwisu do indywidualnych potrzeb. Można w nich znaleźć opcje dotyczące zaawansowanych ustawień bezpieczeństwa, zarządzania bazami danych, konfiguracji serwera, itp.'
    }
  ],
  pricingTable: {
    header: [
      {
        title: 'Funkcje',
        subtitle: 'Funkcje podstawowe'
      },
      {
        title: 'Basic',
        subtitle: '20 PLN/miesiąc'
      },
      {
        isPro: true,
        title: 'Standard',
        subtitle: '49 PLN/miesiąc'
      },
      {
        title: 'Enterprise',
        subtitle: '99 PLN/miesiąc'
      }
    ],
    rows: [
      {
        pro: true,
        basic: true,
        enterprise: true,
        feature: '14-dniowy darmowy okres próbny'
      },
      {
        pro: false,
        basic: false,
        enterprise: true,
        feature: 'Brak limitu użytkowników'
      },
      {
        pro: true,
        basic: false,
        enterprise: true,
        feature: 'Wsparcie produktowe'
      },
      {
        basic: false,
        enterprise: true,
        pro: 'Dostępne jako dodatek',
        feature: 'Wsparcie mailowe'
      },
      {
        pro: true,
        basic: false,
        enterprise: true,
        feature: 'Integracje'
      },
      {
        basic: false,
        enterprise: true,
        pro: 'Dostępne jako dodatek',
        feature: 'Usunięcie marki Front'
      },
      {
        pro: false,
        basic: false,
        enterprise: true,
        feature: 'Aktywne wsparcie i konserwacja'
      },
      {
        pro: false,
        basic: false,
        enterprise: true,
        feature: 'Przechowywanie danych przez 365 dni'
      }
    ]
  }
}


const Pricing = ({ apiData }) => {
  // ** States
  const [plan, setPlan] = useState('annually')

  const handleChange = e => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }



  return (
    <Card>
      <CardContent>
        <PricingHeader plan={plan} handleChange={handleChange} />
        <PricingPlans plan={plan} data={apiData.pricingPlans} />
      </CardContent>
      <PricingCTA />
      <CardContent>
        <PricingTable data={apiData} />
      </CardContent>
      <CardContent sx={{ backgroundColor: 'action.hover' }}>
        <PricingFooter data={apiData} />
      </CardContent>
    </Card>
  )
}

export const getStaticProps = async () => {
  const apiData = data

  return {
    props: {
      apiData
    }
  }
}

export default Pricing
