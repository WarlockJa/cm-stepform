import './addoncard.scss'

interface IAddonCard {
    title: string;
    description: string;
    price: number;
    currency: '$';
    isSelected: boolean;
    subscriptionPeriod: 1 | 12;
    freeMonths: number | undefined;
    onClick: (title: string) => void;
}

const AddonCard = ({ title, description, price, currency, isSelected, subscriptionPeriod, freeMonths, onClick }: IAddonCard) => {
    // chancgin labels based on subscription length
    const subscriptionPeriodLabel = subscriptionPeriod === 1 ? 'mo' : 'yr'
    // preparing free months for eyarly subscription, provided with a plan data, for addon price calculations
    const freeMonthsCalculationsData = subscriptionPeriod === 12
        ? freeMonths ? freeMonths : 0
        : 0
    
    return (
        <div
            className={isSelected ? 'addonCard cardSelected' : 'addonCard'}
            onClick={() => onClick(title)}
        >
            <label className="addonCard__checkboxWrapper">
                {/* input has onChange to prevent console warnings about inmutable checkbox input */}
                <input className='addonCard__checkbox' type="checkbox" checked={isSelected} onChange={() => onClick(title)} />
                <span className="addonCard__checkmark" onClick={(e) => e.stopPropagation()}></span>
            </label>
            <div className='addonCard__details'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='addonCard__pricing'>+{currency}{price * subscriptionPeriod - price * freeMonthsCalculationsData}{subscriptionPeriodLabel}</div>
        </div>
    )
}

export default AddonCard