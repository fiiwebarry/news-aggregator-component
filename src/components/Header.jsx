import { SiWebmoney } from "react-icons/si";

const Header = () => {
    return (
        <header>
            <nav className=' container mx-auto w-[990px] shadow-md bg-[white] p-5'>
                <div className="flex justify-center">
                    <h1 className='text-[28px]'>News Aggregator Hub</h1>
                    <span className='text-[28px]'><SiWebmoney /></span>
                </div>

            </nav>

        </header>
    )
}

export default Header
