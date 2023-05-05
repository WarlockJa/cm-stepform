import './App.scss'
import FinishingUp from './Components/FinishingUp/FinishingUp'
import ThankYou from './Components/ThankYou/ThankYou'
import Header from './Components/Header/Header'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import PickAddons from './Components/PickAddons/PickAddons'
import PlanSelection from './Components/PlanSelection/PlanSelection'
import useStepFormStore from './store/store'
import { useEffect } from 'react'
import Icons from './assets/images/Icons'

const CURRENT_ADDONS = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
    isSelected: false,
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud space',
    price: 2,
    isSelected: false,
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
    isSelected: false,
  },
]

const CURRENT_PLANS = [
  {
    title: 'Arcade',
    price: 9,
    currency: '$',
    CardIcon: Icons.Arcade,
    freeMonthsForYearlySub: 2
  },
  {
    title: 'Advanced',
    price: 12,
    currency: '$',
    CardIcon: Icons.Advanced,
    freeMonthsForYearlySub: 2
  },
  {
    title: 'Pro',
    price: 15,
    currency: '$',
    CardIcon: Icons.Pro,
    freeMonthsForYearlySub: 2
  },
]

function App() {
  const {currentStep, setAddons, setPlans } = useStepFormStore(state => state)

  // emulating fetching addons data from external source
  useEffect(() => {
    setAddons(CURRENT_ADDONS)
    setPlans(CURRENT_PLANS)
  },[])

  let content
  switch (currentStep) {
    case 2:
      content = <PlanSelection />
      break;
    case 3:
      content = <PickAddons />
      break;
    case 4:
      content = <FinishingUp />
      break;
    case 5:
      content = <ThankYou />
      break;
  
    default:
      content = <PersonalInfo />
      break;
  }

  return (
    <main>
        <Header />
        {content}
    </main>
  )
}

export default App
