import './thankyou.scss'
import Icons from '../../assets/images/Icons'

const ThankYou = () => {
    return (
        <form className='thankYou stepForm'>
            <div className='stepForm__contentWrapper thankYou__contentWrapper'>
                <Icons.ThankYou/>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com.</p>
            </div>
        </form>
    )
}

export default ThankYou