import useStepFormStore from '../../store/store'
import PlanCard from './PlanCard'
import './planselection.scss'
import PlanSwitch from './PlanSwitch'
import { useEffect } from 'react'

const PlanSelection = () => {
    const { activePlan, setActivePlan, plans, setCurrentStep, setPassedSteps, subscriptionPeriod } = useStepFormStore((state) => state)

    // selecting first plan as active if no active plan selected on component load
    useEffect(() => {
        !activePlan && setActivePlan(plans[0].title)
    },[])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setPassedSteps(3)
        setCurrentStep(3)
    }

    const plansContent = plans.map(plan =>
        <PlanCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
            currency={plan.currency}
            CardIcon={plan.CardIcon}
            freeMonths={plan.freeMonthsForYearlySub}
            subscriptionPeriod={subscriptionPeriod}
            activePlan={activePlan}
            onClick={setActivePlan}
        />
    )

    return (
        <form className='planSelection stepForm' onSubmit={(e) => handleSubmit(e)}>
            <h1>Select your plan</h1>
            <p>You have an option of monthly or yearly billing.</p>
            <div className='planSelection__contentWrapper'>
                {plansContent}
            </div>
            <PlanSwitch />
            <div className='stepForm__submitWrapper'>
                <button
                    className='stepForm__submitButton'
                    type='submit'
                >Next Step</button>
                <button
                    className='stepForm__backButton'
                    type='button'
                    onClick={() => setCurrentStep(1)
                }>Go Back</button>
            </div>
        </form>
    )
}

export default PlanSelection