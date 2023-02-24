import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import play_1 from '../assets/play_1.png';
import play_2 from '../assets/play_2.png';
import play_3 from '../assets/play_3.png';
import play_4 from '../assets/play_4.png';
import play_5 from '../assets/play_5.png';
import coin from '../assets/coin.png';
import star from '../assets/star.png';
import about from '../assets/about.png';
import mbl from '../assets/mbl.png';
import rocket from '../assets/rocket.png';
import bet from '../assets/bet.png';
import top from '../assets/top.png';
import banner_2 from '../assets/banner_2.png';
import banner_1 from '../assets/banner_1.png';
import Accordion from './Accordion';



export default function Home() {

    const accordionData = [
        {
            numbers: '01',
            title: 'What is shiBet  rocket gambling game? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            numbers: '02',
            title: 'How do I place a bet in the shiBet  rocket game? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            numbers: '03',
            title: 'Is playing BetShiba  rocket gambling game on mobile safe?  ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            numbers: '04',
            title: 'Can a Rocket Money Game Bring a Real Win? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        }
    ];

    return (
        <div className="bg-blue-100 font-inter">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">
                        <div className="lg:w-1/2 w-full">
                            <h2 className='md:text-7xl text-3xl tracking-wider font-russo font-bold text-white-100'>
                                BET
                            </h2>
                            <h2 className='md:text-7xl text-3xl text-outline font-russo font-bold'>
                                SHIBA
                            </h2>
                            <h2 className='md:text-5xl text-3xl tracking-wider font-russo font-bold text-white-100 uppercase'>
                                built on Ethereum
                            </h2>

                            <p className='pt-6 pb-4 text-white-50 font-inter'>$Bshiba is an Ethereum Based project developing a completely Decentralized blockchain gambling game. All transactions are done on the blockchain so there are no hidden fees or odds.</p>

                            <div className="flex items-center gap-8 font-russo">
                                <a href="">
                                    <button className="text-white-100 bg-gradient py-2 lg:px-8 px-4 rounded-sm font-semibold mt-5 uppercase tracking-widest">
                                        Play the game
                                    </button>
                                </a>

                                <a href="">
                                    <button className="text-white-100 font-inter border-2 border-white-100 py-2 lg:px-8 px-4 font-semibold mt-5 uppercase tracking-widest">
                                        White paper
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className="img md:mt-0 mt-12">
                            <img src={top} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">


                        <div className="img">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                        <div className="lg:w-1/2 w-full md:mt-0 mt-12">
                            <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                                About us
                            </h3>

                            <h2 className='md:text-4xl text-3xl tracking-wider font-russo font-semibold text-white-100 uppercase'>
                                What is BET SHIBA?
                            </h2>

                            <p className='pt-6 pb-4 text-white-50 font-inter'>$Bshiba is an Ethereum Based project developing a completely Decentralized blockchain gambling game. All transactions are done on the blockchain so there are no hidden fees or odds.
                            </p>

                            <p className='text-white-50 font-inter'>
                                BetShiba Rocket Gambling game is an exciting, innovative gambling experience. You begin with a rocket that starts rising and must cash out before it stops to get your multiplier applied to your bet. In the best-case scenario when the Rocket reaches 1000x, you win 1,000 times as much as you risked! Take a chance on this thrilling adventure for huge rewards!
                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* Achievement section */}

            <div id='achievement' className="bg-dark-top">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-10/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                            Achievement
                        </h3>

                        <div className='absolute right-20 -mt-52 lg:block hidden'>
                            <img src={star} alt="Logo" className='w-10/12' />
                        </div>

                        <p className='md:text-3xl text-2xl tracking-wider font-russo text-center font-semibold text-white-100 uppercase'>
                            2021 cemented Rocket Gambling Game as one of the
                            most beloved money games, according to 1win and 1xbet casinos.
                        </p>

                    </div>

                </div>

            </div>

            {/* BetSHIBA ROCKET */}

            <div id='updates' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='absolute left-5 lg:block hidden'>
                        <img src={coin} alt="Logo" className='w-10/12' />
                    </div>

                    <div className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                            BetSHIBA ROCKET
                        </h3>

                        <h2 className='md:text-3xl text-2xl tracking-wider font-russo text-center font-semibold text-white-100 uppercase'>
                            Main Features of BetShiba rocket
                        </h2>

                        <p className='text-white-50 mt-6'>
                            The primary variations between other Crash Rocket betting game and BetShiba Rocket Gambling are in structure and design. Common casino activities depend on random number generators which can be
                        </p>

                        <p className='text-white-50 pt-5'>

                            adjusted by the developer, while rocket-style multiplier games work using blockchain technology – comparable to Bitcoin’s framework but more secure and clear. Players can ensure fairness by inspecting the code of the game. Not only does Rocket Ship Money Game stand out from other multipliers with its distinct appearance, but it also provides gamers with 3D graphics, audio and visual influences – just make sure your device has enough power to prevent lagging!
                        </p>

                    </div>

                </div>

            </div>

            {/* How to Place Your Bet  */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div className="lg:w-1/2 w-full">

                            <h2 className='md:text-4xl text-3xl tracking-wider font-russo font-semibold text-white-100 uppercase'>
                                How to Place Your Bet
                            </h2>

                            <p className='pt-6 pb-4 text-white-50 font-inter'>$Bshiba is an Ethereum Based project developing a  In the Manual tab, you have the power to adjust your bet by either increasing or decreasing it with a simple click of a button. If that’s not enough for you, feel free to manually enter in any desired amount using your keyboard! This way, each round will be just as exciting as the last one. Then, select an auto cashout multiplier in the Auto Cashout field. You may increase or decrease the number by your discretion, or manually enter a different value if you prefer. If no selection is made, then it will default to 1000x as its maximum setting.
                            </p>

                        </div>

                        <div className="img">
                            <img src={bet} alt="Logo" className='w-10/12 lg:float-right' />
                        </div>

                    </div>

                </div>
            </div>

            {/* banner_1 */}

            <div className="banner">
                <img src={banner_1} alt="Logo" className='' />
            </div>

            {/* BetSHIBA ROCKET */}

            <div id='play' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                            BetSHIBA ROCKET
                        </h3>

                        <h2 className='md:text-3xl text-2xl tracking-wider font-russo text-center font-semibold text-white-100 uppercase'>
                            How to Play the BetShiba  Rocket Gambling Game
                        </h2>

                        <p className='text-white-50 mt-6'>
                            Even for the most inexperienced players, starting Rocket Money Game is a breeze! To get you off on the right trajectory, here’s an easy ABC guide to launch your journey.
                        </p>

                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 grid-rows-2 items-center justify-center gap-6 mt-12 mb-6'>

                        <div className='rounded-3xl p-8 bg-white-100 lg:flex items-center gap-4 space-y-5'>

                            <div className='lg:w-1/3'>
                                <img src={play_1} alt="Logo" className='' />
                            </div>

                            <div className=' font-montserat lg:w-1/2'>
                                <h4 className='text-2xl tracking-wide font-extrabold text-yellow-100'>
                                    Create Your Account
                                </h4>
                                <p className='text-sm pt-2 font-medium'>
                                    Get started on the platform by registering. Depending on your chosen plan.
                                    You will also need a login and password for your account, some communication means that can be used in order to validate it, as well as a Shiba Inu wallet.

                                </p>
                            </div>

                        </div>

                        <div className='rounded-3xl p-8 bg-white-100  lg:flex items-center gap-4 space-y-5'>

                            <div className='lg:w-1/3'>
                                <img src={play_2} alt="Logo" className='' />
                            </div>

                            <div className=' font-montserat lg:w-1/2'>
                                <h4 className='text-2xl tracking-wide font-extrabold text-yellow-100'>
                                    Make your wager
                                </h4>
                                <p className='text-sm pt-2 font-medium'>
                                    Make your wager and choose whether to play manually or automatically. Manually pick the currency you’d like and when it’s time, cash out whenever you feel comfortable. With manual betting, control is in Your hands!
                                </p>
                            </div>

                        </div>

                        <div className='rounded-3xl p-8 bg-white-100  lg:flex items-center gap-4 space-y-5'>

                            <div className='lg:w-1/3'>
                                <img src={play_3} alt="Logo" className='' />
                            </div>

                            <div className=' font-montserat lg:w-1/2'>
                                <h4 className='text-2xl tracking-wide font-extrabold text-yellow-100'>
                                    AutoBet
                                </h4>
                                <p className='text-sm pt-2 font-medium'>
                                    With AutoBet, you can set the amount of shiba Inu to be wagered each time as well as customize the cashout ratio. Easily design your own betting pattern that suits your needs!
                                </p>
                            </div>

                        </div>

                        <div className='rounded-3xl p-8 bg-white-100  lg:flex items-center gap-4 space-y-5'>

                            <div className='lg:w-1/3'>
                                <img src={play_4} alt="Logo" className='' />
                            </div>

                            <div className=' font-montserat lg:w-1/2'>
                                <h4 className='text-2xl tracking-wide font-extrabold text-yellow-100'>
                                    Cash-out
                                </h4>
                                <p className='text-sm pt-2 font-medium'>
                                    Cash-out by pushing a corresponding game. Your fixed multiplier will influence your bet, to ensure the best possible outcome. When it comes time to withdraw money, cryptocurrency transactions are incredibly swift compared to traditional methods. That’s why we recommend using this method for a quick and secure payout everytime!
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-center mb-6'>

                        <div className='rounded-3xl p-8 bg-white-100  lg:flex items-center gap-4 space-y-5 lg:w-1/2'>

                            <div className='lg:w-1/3'>
                                <img src={play_5} alt="Logo" className='' />
                            </div>

                            <div className=' font-montserat lg:w-1/2'>
                                <h4 className='text-2xl tracking-wide font-extrabold text-yellow-100'>
                                    Kick off
                                </h4>
                                <p className='text-sm pt-2 font-medium'>
                                    Kick off a new round by submitting an additional stake and waiting until the countdown for launch starts.
                                </p>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

            {/* BetShiba Rocket Game on Mobile */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">


                        <div className="img">
                            <img src={mbl} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                        <div className="lg:w-1/2 w-full md:mt-0 mt-12 lg:text-right">
                            <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                                BetSHIBA ROCKET
                            </h3>

                            <h2 className='md:text-4xl text-3xl tracking-wider font-russo font-semibold text-white-100 uppercase'>
                                BetShiba Rocket Game on Mobile
                            </h2>

                            <p className='pt-6 pb-4 text-white-50 font-inter'>Cutting-edge crypto gaming platforms have already established apps and even optimized controls for mobile devices. To ensure a swift, smooth gambling experience on your device of choice, make sure that your connection is strong enough to handle the game with no lag. Not only did playing games from a cellphone become increasingly convenient; it’s also more secure if you run them through an internet browser than any other platform.

                            </p>

                        </div>

                    </div>

                </div>
            </div>

            {/* banner_2 */}

            <div className="banner">
                <img src={banner_2} alt="Logo" className='' />
            </div>

            {/* BetSHIBA ROCKET */}

            <div id='conclusion' className="">

                <div className="lg:py-20 py-8 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-7/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                            BetSHIBA ROCKET
                        </h3>

                        <h2 className='text-3xl tracking-wider font-russo text-center font-semibold text-white-100 uppercase'>
                            CONCLUSION
                        </h2>

                        <p className='text-white-50 mt-6'>
                            If you’re looking for an exciting and safe gambling experience, BetShiba  rocket betting game principle is a stellar alternative to traditional casinos. With Shiba Inu  in your pocket, you can count on thrilling moments that only this game offers. Plus, its transparency guarantees security so there’s nothing to worry about! Before diving into this incredible experience though, make sure to read  terms of use first – as it will help determine if the game suits your style or not.

                        </p>

                    </div>

                </div>

            </div>

            {/* faq section */}

            <div id='faq' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='absolute left-0 -mt-24 lg:block hidden'>
                        <img src={rocket} alt="Logo" className='w-10/12' />
                    </div>

                    <div className='lg:w-8/12 text-center flex flex-col mx-auto'>

                        <h3 className='text-xl tracking-widest font-russo font-semibold text-yellow-100 uppercase mb-6'>
                            Questions
                        </h3>

                        <h2 className='text-3xl tracking-wider font-russo text-center font-semibold text-white-100 uppercase'>
                            FAq
                        </h2>

                        <div className="accordion space-y-5 py-12">
                            {accordionData.map(({ numbers, title, content }) => (
                                <Accordion title={title} content={content} numbers={numbers} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
