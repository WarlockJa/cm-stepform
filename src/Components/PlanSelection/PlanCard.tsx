import { FunctionComponent, SVGProps, useRef } from 'react';
import './plancard.scss'

interface IPlanCard {
    title: string;
    price: number;
    currency: string;
    subscriptionPeriod: 1 | 12;
    CardIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
    freeMonths: number;
    activePlan: string | undefined;
    onClick: (plan: string) => void;
}

const PlanCard = ({ title, price, currency, subscriptionPeriod, CardIcon, freeMonths, activePlan, onClick }: IPlanCard) => {
    const radioButtonRef = useRef<HTMLInputElement>(null)
    const subscriptionPeriodLabel = subscriptionPeriod === 1 ? 'mo' : 'yr'

    const planCardClassName = subscriptionPeriod === 12 && freeMonths > 0
        ? activePlan === title ? 'planCard planCard--selectedPlan' : 'planCard'
        : activePlan === title ? 'planCard planCard--hiddenDetails planCard--selectedPlan' : 'planCard planCard--hiddenDetails'

    const handleFormClick = (title: string) => {
        radioButtonRef.current && radioButtonRef.current.focus()
        onClick(title)
    }

    return (
        <div
            className={planCardClassName}
            onClick={() => handleFormClick(title)}
        >
            <CardIcon />
            <div className='planCard__details'>
                <h2>{title}</h2>
                <p>{currency}{price}/{subscriptionPeriodLabel}</p>
                <p
                    className={subscriptionPeriod === 12 && freeMonths > 0 ? 'planCard__details--discount' : 'planCard__details--discount planCard__details--hidden'}
                >{freeMonths} months free</p>
            </div>
            <input autoFocus={activePlan === title} ref={radioButtonRef} className='planCard--tabNavigationEnabler' type="radio" />
        </div>
    )
}

export default PlanCard