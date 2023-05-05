import useStepFormStore from '../../store/store'
import './planswitch.scss'

const PlanSwitch = () => {
    const { subscriptionPeriod, setSubscriptionPeriod } = useStepFormStore((state) => state)

    return (
        <div className='planSwitch'>
            <p className={subscriptionPeriod === 1 ? 'planSwitch--p planSwitch--selected' : 'planSwitch--p' }>Monthly</p>
            <label className='planSwitch__switch'>
                <input
                    className='planSwitch__switch--input'
                    type="checkbox"
                    checked={subscriptionPeriod === 1 ? false : true}
                    onChange={() => subscriptionPeriod === 1 ? setSubscriptionPeriod(12) : setSubscriptionPeriod(1)}
                />
                <span className="planSwitch__switch--slider"></span>
            </label>
            <p className={subscriptionPeriod === 12 ? 'planSwitch--p planSwitch--selected' : 'planSwitch--p' }>Yearly</p>
        </div>
    )
}

export default PlanSwitch