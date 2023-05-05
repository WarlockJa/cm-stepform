import useStepFormStore from '../../store/store'
import './finishingup.scss'

const FinishingUp = () => {
    const { setCurrentStep, subscriptionPeriod, plans, activePlan, addons } = useStepFormStore((state) => state)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setCurrentStep(5)
    }

    // finding chosen plan from the store list
    const currentPlan = plans.find(plan => plan.title === activePlan)

    // forming labels based on subscription duration
    const subscriptionPeriodLabel = subscriptionPeriod === 1 ? 'mo' : 'yr'
    // pulling selected addons from the store
    const selectedAddonsArray = addons.filter(addon => addon.isSelected )
    
    // calculating price per item and total price
    const currentPlanPrice = currentPlan?.price ? currentPlan.price : 0
    const sumOfSelectedAddonPricesPerMonth = selectedAddonsArray.reduce((sum, item) => sum += item.price, 0)
    const currentPlanFreeMonthsForYearlySubscription = currentPlan?.freeMonthsForYearlySub ? currentPlan?.freeMonthsForYearlySub : 0
    const totalPaidMonths = subscriptionPeriod === 12 ? subscriptionPeriod - currentPlanFreeMonthsForYearlySubscription : subscriptionPeriod

    const chosenPlanCost = currentPlanPrice * totalPaidMonths
    const totalPrice = (currentPlanPrice + sumOfSelectedAddonPricesPerMonth) * totalPaidMonths

    // creating a list from selected addons array with calculated prices
    const addonsContent = selectedAddonsArray.map(addon => (
        <div key={addon.title} className='orderList__addon'>
            <p>{addon.title}</p>
            <p className='orderList__addon--priceTag'>+{currentPlan?.currency}{addon.price * totalPaidMonths}/{subscriptionPeriodLabel}</p>
        </div>
    ))

    return (
        <form className='stepForm finishingUp' onSubmit={(e) => handleSubmit(e)}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className='stepForm__contentWrapper finishingUp__contentWrapper'>
                <div className='contentWrapper__orderList'>
                    <div className='orderList__plan'>
                        <div className='orderList__plan--planData'>
                            <h2>{currentPlan?.title} ({subscriptionPeriod === 1 ? 'Monthly' : 'Yearly'})</h2>
                            <button className='orderList__plan__planData--changeButton' onClick={() => setCurrentStep(2)}>Change</button>
                        </div>
                        <p>{currentPlan?.currency}{chosenPlanCost}/{subscriptionPeriodLabel}</p>
                    </div>
                    {addonsContent.length > 0 && <div className='divider'></div>}
                    {addonsContent}
                </div>
                <div className='contentWrapper__total'>
                    <p>Total (per {subscriptionPeriod === 1 ? 'month' : 'year'})</p>
                    <p className='contentWrapper__total--priceTag'>+{currentPlan?.currency}{totalPrice}/{subscriptionPeriodLabel}</p>
                </div>
            </div>
            <div className='stepForm__submitWrapper'>
                <button className='stepForm__submitButton stepForm__confirmButton' type='submit'>Confirm</button>
                <button className='stepForm__backButton' type='button' onClick={() => setCurrentStep(3)}>Go Back</button>
            </div>
        </form>
    )
}

export default FinishingUp