// import React from 'react'
import CommonCard from './common/CommonCard';

export default function UniqueApproachCard() {
    return (
        <CommonCard className={ `w-[400px] h-[390px] px-[25px] py-[45px] flex justify-between flex-col` }>
            <div className="w-[70px] h-[115px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="fit-content" height="fit-content" viewBox="0 0 79 115" fill="none">
                    <g clipPath="url(#clip0_231_1073)">
                        <path d="M79 13.7893H0V0H79V13.7893ZM0.419386 13.3718H78.5806V0.417502H0.419386V13.3718Z" fill="#F06E16" />
                        <path d="M71.583 101.628H7.41699V80.3824L7.47565 80.3211L27.219 59.8839C27.8373 59.247 28.1828 58.396 28.1828 57.5103C28.1828 56.6246 27.8373 55.7736 27.219 55.1367L7.41699 34.6177V13.3718H71.583V34.6177L71.5244 34.6761L51.91 55.1337C51.2977 55.7701 50.9559 56.6174 50.9559 57.4986C50.9559 58.3799 51.2977 59.2271 51.91 59.8635L71.586 80.3824L71.583 101.628ZM7.83638 101.211H71.1637V80.5488L51.6168 60.1438C50.9308 59.4289 50.5481 58.4784 50.5481 57.4899C50.5481 56.5013 50.9308 55.5508 51.6168 54.8359L71.1637 34.4513V13.7893H7.83638V34.4513L27.5241 54.8389C28.2167 55.5544 28.6037 56.5093 28.6037 57.503C28.6037 58.4967 28.2167 59.4516 27.5241 60.1671L7.83638 80.5517V101.211Z" fill="#F06E16" />
                        <path d="M79 115H0V101.211H79V115ZM0.419386 114.582H78.5806V101.628H0.419386V114.582Z" fill="#F06E16" />
                        <path d="M10.6431 101.386H68.3746L51.8866 85.6201C48.0776 81.9761 45.0487 77.6025 42.9823 72.7626C40.9158 67.9227 39.8545 62.7166 39.8622 57.4576V54.7395C39.8647 53.2548 40.1678 51.7859 40.7533 50.4205C41.3389 49.055 42.1948 47.8211 43.2701 46.7923L55.4294 35.1694H23.7555L35.9998 46.8011C37.0867 47.8322 37.9516 49.0726 38.5419 50.4468C39.1323 51.821 39.4358 53.3003 39.4341 54.795V57.4022C39.4276 62.6682 38.3494 67.8783 36.2647 72.718C34.1799 77.5578 31.1317 81.9269 27.3041 85.5617L10.6431 101.386Z" fill="#FC9046" />
                    </g>
                    <defs>
                        <clipPath id="clip0_231_1073">
                            <rect width="79" height="115" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-semibold text-[32px] text-[#172739]">Business First</p>
                <p className="text-[#687887] font-normal text-[20px] leading-[32px]">We focus on what really matter for the business, rather than just moving pixels left & right</p>
            </div>
        </CommonCard>
    );
}
