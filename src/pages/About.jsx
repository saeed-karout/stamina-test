import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import { PiFlagBannerFold, PiUserCircleCheckLight } from "react-icons/pi";
import { ImCheckmark } from "react-icons/im";
import CountUp from 'react-countup';

const About = () => {
const { t } = useTranslation(); // Using useTranslation hook

return (
<div className="2xl:container 2xl:mx-auto py-44 lg:px-20 md:px-6 px-4">
    {/* Title Section */}
    <p className="font-bold text-3xl leading-4 text-orange pb-6">
        {t('about.about')}
    </p>

    {/* Main Content */}
    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        {/* Left Section: Text */}
        <div className="w-full lg:w-6/12 dark:text-white">
            <h2 className="w-full font-bold  lg:text-4xl text-3xl lg:leading-10 leading-9">
                {t('about.title')}
            </h2>
            <div className='opacity-80'>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    {t('about.subtitle')}
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    {t('about.subtitle2')}
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                    {t('about.subtitle3')}
                </p>
            </div>
        </div>

        {/* Right Section: Image */} 
        <div className="w-full lg:w-6/12">
            <img className="lg:block hidden w-full"
                src="https://cdn.autonomous.ai/static/upload/images/new_post/top-office-design-companies-in-the-us-6659-1688446366708.webp"
                alt="people discussing on board" />
        </div>
    </div>

    {/* Icon Section */}
    <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            {/* First Icon */}
            <div className="z-20">
                <div
                    className="bg-secondaryDark dark:bg-orange w-12 h-12 rounded-full flex justify-center items-center">
                    <PiFlagBannerFold color="white" size={26} />
                </div>
            </div>

            {/* Second Icon */}
            <div className="z-20">
                <div
                    className="bg-secondaryDark dark:bg-orange w-12 h-12 rounded-full flex justify-center items-center">
                    <PiUserCircleCheckLight color="white" size={26} />
                </div>
            </div>

            {/* Third Icon */}
            <div className="z-20">
                <div
                    className="bg-secondaryDark dark:bg-orange w-12 h-12 rounded-full flex justify-center items-center">
                    <ImCheckmark color="white" size={20} />
                </div>
            </div>
        </div>

        {/* Horizontal Line Between Icons */}
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>

    {/* Text Section Below Icons */}
    <div className="grid sm:grid-cols-3 grid-cols-2 dark:text-white sm:gap-8 gap-4">
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                {t('about.foundedTitle')}
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 opacity-70">
                {t('about.founded')}
            </p>
        </div>

        <div className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            <span className='mx-1 text-[#686260]'>
                <CountUp start={0} end={500} duration={2.75} />
                <sup className='text-orange'>+</sup>
            </span>
            {t('about.happyTitle')}
        <p className="font-normal text-base leading-6 text-gray-600 mt-6 opacity-70">
            {t('about.happy')}
        </p>
        </div>

        {/* الرقم الثاني */}
        <div className="sm:block hidden">
            <div className="flex  font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                <span className='text-[#686260] mx-1'>
                    <CountUp start={0} end={250} duration={2.75} />
                    <sup className='text-orange'>+</sup>
                </span>
                {t('about.projectsTitle')}
            </div>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 opacity-70">
                {t('about.projects')}
            </p>
        </div>
    </div>

    {/* Mission and Vision Section */}
    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        {/* Left Column: Mission and Vision Text */}
        <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 text-orange leading-7 text-gray-800">
                {t('about.Mission.title')}
            </h2>
            <p className="font-normal text-base leading-6 text-gray mt-6 w-full lg:w-10/12 xl:w-9/12">
                {t('about.Mission.desc')}
            </p>

            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 text-orange leading-7 text-gray-800 mt-10">
                {t('about.Vision.title')}
            </h2>
            <p className="font-normal text-base leading-6 text-gray w-full lg:w-10/12 xl:w-9/12 mt-6">
                {t('about.Vision.desc')}
            </p>
        </div>

        {/* Right Column: Cards */}
        <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                {/* First Card */}
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                                stroke="#686260" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                                stroke="#686260" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-orange">Stamina</p>
                        <p className="mt-2 font-normal text-base leading-6 opacity-35 text-white">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                                stroke="#686260" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28.5 10.5L18 18.75L7.5 10.5" stroke="#686260" strokeWidth="2.75"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-orange">Quality
                            Products</p>
                        <p className="mt-2 font-normal text-base leading-6 text-white opacity-35">
                            The quality of our products is guaranteed, backed by years of experience in the industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default About;
