import useStepFormStore from '../../store/store'
import AddonCard from './AddonCard'
import './pickaddons.scss'

const PickAddons = () => {
    const { subscriptionPeriod, addons, activePlan, plans, setAddons, setCurrentStep, setPassedSteps } = useStepFormStore((state) => state)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setPassedSteps(4)
        setCurrentStep(4)
    }

    const handleUpdateAddons = (title: string) => {
        setAddons(addons.map(addon => (
            addon.title === title ? { ...addon, isSelected: !addon.isSelected } : addon
        )))
    }

    const addonsContent = addons.map(addon => <AddonCard
        key={addon.title}
        title={addon.title}
        description={addon.description}
        price={addon.price}
        isSelected={addon.isSelected}
        currency='$'
        subscriptionPeriod={subscriptionPeriod}
        freeMonths={plans.find(plan => plan.title === activePlan)?.freeMonthsForYearlySub}
        onClick={handleUpdateAddons}
    />)

    return (
        <form className='pickAddons stepForm' onSubmit={(e) => handleSubmit(e)}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className='pickAddons__contentWrapper'>
                {addonsContent}
            </div>
            <div className='stepForm__submitWrapper'>
                <button className='stepForm__submitButton' type='submit'>Next Step</button>
                <button className='stepForm__backButton' type='button' onClick={() => setCurrentStep(2)}>Go Back</button>
            </div>
        </form>
    )
}

export default PickAddons