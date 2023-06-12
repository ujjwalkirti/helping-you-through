import React from "react";
import 'tailwindcss/tailwind.css';
import { montserrat } from "@/utils/Fonts";
import { poppins } from "@/utils/Fonts";
import Link from 'next/link';


function WhatWeDo(): JSX.Element {
  return  ( 
  <>
  <div className=" bg-white dark:bg-black ">

      <div className="text-center sm:text-left pt-4 mt-6">

        <div className={"text-dgreen dark:text-dgreen text-2xl font-medium mt-1 ml-3 mr-3 mb-1 " +
          montserrat.className}>
          What We Do
        </div>

        <div className={" text-black dark:text-white text-xl font-semibold mt-1 ml-3 mr-3 mb-1 sm:max-w-xs " + poppins.className }>
          We provide you a platform where you can sell ,buy your old products!
      </div>

    </div>
    <div className=" flex-1 md:flex pt-3 pb-3 mt-3 mb-1 sm:py-16 sm:px-16">

        <div className="py-0 px-0 sm:px-10 sm:py-10 flex-1 text-center sm:text-left ">

          <div className="justify-center">
           <svg className="max-w-full sm:max-w-none h-auto sm:mx-0 mx-auto" width="108" height="108" viewBox="0 0 108 108" fill="none">
              <rect x="0.743767" y="0.566406" width="106.983" height="106.983" rx="22.925" fill="#20B15A" />
              <path fillRule="evenodd" clipRule="evenodd" d="M68.3756 44.8598C70.3848 44.8598 72.1959 43.6512 72.9632 41.7984C73.7305 39.9456 73.3027 37.8139 71.8796 36.3987C70.4564 34.9835 68.3186 34.5639 66.4643 35.3359C64.61 36.1078 63.4049 37.919 63.4117 39.9238C63.421 42.6526 65.6407 44.8598 68.3756 44.8598ZM68.3756 37.7843C69.5598 37.7843 70.5199 38.7422 70.5199 39.9238C70.5199 41.1054 69.5598 42.0633 68.3756 42.0633C67.1914 42.0633 66.2313 41.1054 66.2313 39.9238C66.2313 38.7422 67.1914 37.7843 68.3756 37.7843ZM37.9509 61.6896C37.9509 67.2827 41.0406 70.3488 46.6292 70.3488C47.4087 70.3579 48.0383 70.9862 48.0474 71.7639C48.0382 72.5389 47.4059 73.1622 46.6292 73.1622C39.538 73.1622 35.1313 68.7652 35.1313 61.6896V47.9259C35.1313 40.8335 39.538 36.4365 46.6292 36.4365H59.0557C59.8324 36.4457 60.4571 37.0766 60.4571 37.8516C60.4571 38.2254 60.3072 38.5836 60.0407 38.8463C59.7742 39.109 59.4134 39.2544 59.0388 39.2499H46.6292C41.0406 39.2499 37.9509 42.3328 37.9509 47.9259V61.6896ZM57.8063 58.0171C57.5698 58.3084 57.2325 58.5008 56.8608 58.5562C56.491 58.5937 56.1211 58.4848 55.8309 58.253L50.6476 54.1929L45.9876 60.2409C45.7654 60.5425 45.4312 60.7426 45.06 60.7965C44.6887 60.8503 44.3112 60.7533 44.0122 60.5273C43.4019 60.0498 43.2891 59.1718 43.7589 58.5562L49.28 51.3795C49.5103 51.082 49.8498 50.8881 50.2236 50.8407C50.5973 50.7933 50.9747 50.8962 51.2723 51.1268L56.4556 55.1869L61.0143 49.3748C61.5146 48.9 62.287 48.8597 62.8343 49.2798C63.3816 49.6999 63.5407 50.4551 63.2092 51.0594L57.8063 58.0171ZM70.5874 47.9258C69.8135 47.9258 69.1861 48.5519 69.1861 49.3241V61.6896C69.1354 67.2826 66.0457 70.3487 60.4571 70.3487H54.8179C54.0384 70.3578 53.4087 70.9861 53.3996 71.7639C53.4089 72.5388 54.0411 73.1622 54.8179 73.1621H60.4571C67.5483 73.1621 71.9719 68.7652 71.9719 61.6896V49.3241C71.972 48.5584 71.3548 47.9351 70.5874 47.9258Z" fill="#130F26" />
            </svg>
          </div>
          <div className={" text-black dark:text-white text-xl font-semibold mt-1 mb-1 ml-1 mr-1"+ poppins.className}>
            previous year papers
          </div>

          <div className={" sm:max-w-xs text-black dark:text-white text-xs font-normal mt-1 mb-3 ml-1 mr-1"}>
            We help you to download the previous year papers department wise
          </div>

          <div className=" mt-1 mb-1 ml-1 mr-1">
            <Link href="/">
              <button className="hover:bg-orange px-3 py-3 rounded-xl text-xs font-normal text-black dark:text-white">
                Learn More    <svg className=" inline " width="17" height="12" viewBox="0 0 22 19" fill="none">
                  <path className=" stroke-black dark:stroke-white" d="M12.0912 1.68591L20.1149 9.70966L12.0912 17.7334M1.7749 9.70966H20.1149H1.7749Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </Link>
          </div>

        </div>

        <div className="text-center sm:px-10 sm:py-10 sm:text-left py-0 px-0 flex-1">


          <div className="justify-center">
            <svg className="max-w-full sm:max-w-none h-auto sm:mx-0 mx-auto" width="108" height="108" viewBox="0 0 108 108" fill="none">
              <rect x="0.0563965" y="0.566406" width="106.964" height="106.476" rx="22.925" fill="#20B15A" />
              <path fillRule="evenodd" clipRule="evenodd" d="M65.3602 39.8846H61.6101C61.2548 37.1069 58.8763 34.9539 56.0049 34.9539H51.0722C48.2009 34.9539 45.8224 37.105 45.4671 39.8827L41.736 39.8846C37.7146 39.8846 34.444 43.1476 34.444 47.1576V53.781C34.444 54.2624 34.6847 54.7114 35.0878 54.9769C39.0213 57.5732 43.677 59.3021 48.5505 59.9803C49.2745 60.0873 49.9394 59.6345 50.1304 58.9391C50.5564 57.3898 51.9224 56.3486 53.529 56.3486C55.1185 56.3486 56.4978 57.4127 56.8837 58.9315C57.0461 59.5734 57.625 60.0128 58.2707 60.0128C58.3376 60.0128 58.4025 60.009 58.4694 59.9994C63.3753 59.3212 68.052 57.5827 71.9913 54.9769C72.3925 54.7095 72.6332 54.2624 72.6332 53.781V47.1576C72.6332 43.1476 69.3702 39.8846 65.3602 39.8846ZM69.7676 52.9978C66.6288 54.9483 63.0104 56.3143 59.2011 56.9848C58.1541 54.87 55.9763 53.4831 53.529 53.4831C51.1009 53.4831 48.9135 54.8662 47.8379 56.9677C44.0514 56.3009 40.4446 54.9426 37.3096 52.9978V47.1577C37.3096 44.7276 39.2945 42.7503 41.7379 42.7503L46.854 42.7465C47.2361 42.7465 47.5991 42.5956 47.8685 42.3262C48.1359 42.0549 48.2868 41.692 48.2868 41.3118L48.2849 40.6049C48.2849 39.069 49.5363 37.8195 51.0722 37.8195H56.0049C57.2906 37.8195 58.3777 38.6964 58.6967 39.8847H53.5386C52.7477 39.8847 52.1058 40.5266 52.1058 41.3175C52.1058 42.1084 52.7477 42.7503 53.5386 42.7503H65.3602C67.7903 42.7503 69.7676 44.7276 69.7676 47.1577V52.9978ZM54.971 60.5218V62.9939C54.971 63.7848 54.3291 64.4267 53.5382 64.4267C52.7472 64.4267 52.1053 63.7848 52.1053 62.9939V60.5218C52.1053 59.7309 52.7472 59.089 53.5382 59.089C54.3291 59.089 54.971 59.7309 54.971 60.5218ZM71.1526 59.2646C70.4018 59.2646 69.8038 59.8492 69.7465 60.5828C69.7465 60.5828 69.4523 63.9241 69.3912 64.9786C69.3205 66.1459 68.8467 67.4163 68.1838 68.213C67.2496 69.3401 66.2142 69.7814 64.491 69.7852C63.36 69.7872 57.26 69.7891 52.6521 69.7891C51.8593 69.7891 51.2174 70.431 51.2174 71.2219C51.2174 72.0128 51.8593 72.6547 52.6502 72.6547C57.0976 72.6547 63.4288 72.6528 64.4967 72.6509C67.0452 72.6451 68.9193 71.816 70.3903 70.0432C71.4468 68.7708 72.1422 66.9425 72.2511 65.1506C72.2944 64.4136 72.4425 62.5015 72.525 61.4367C72.5588 61 72.5816 60.7058 72.5816 60.6936C72.5816 59.9046 71.9416 59.2646 71.1526 59.2646ZM42.5865 69.7848C42.9609 69.7867 43.7366 69.7867 44.7548 69.7867C45.5457 69.7867 46.1934 70.4286 46.1934 71.2195C46.1934 72.0105 45.5438 72.6524 44.751 72.6524C43.7194 72.6524 42.9667 72.6524 42.5827 72.6505C40.0323 72.6447 38.1581 71.8156 36.6871 70.0408C35.6326 68.7704 34.9353 66.9421 34.8283 65.1502C34.7842 64.4238 34.6394 62.5564 34.5562 61.4832C34.5203 61.0208 34.4959 60.7058 34.4959 60.6931C34.4959 59.9041 35.1359 59.2642 35.9249 59.2642C36.6757 59.2642 37.2717 59.8487 37.3309 60.5843C37.3309 60.5843 37.6251 63.9256 37.6882 64.9782C37.7589 66.1455 38.2307 67.4159 38.8937 68.2106C39.8298 69.3416 40.8652 69.781 42.5865 69.7848Z" fill="#130F26" />
            </svg>
          </div>


          <div className={" text-black dark:text-white text-xl font-semibold mt-1 mb-1 ml-1 mr-1 "+poppins.className}>
            old book and stationary
          </div>


          <div className={"sm:max-w-xs text-black dark:text-white text-xs font-regular mt-1 mb-3 ml-1 mr-1 "}>
            We help to sell your old books or any stationary items
          </div>


          <div className=" mt-1 mb-1 ml-1 mr-1">
            <Link href="/">
              <button className={"hover:bg-orange px-3 py-3 rounded-xl text-xs font-normal text-black dark:text-white"}>
                Learn More   <svg className=" inline " width="17" height="12" viewBox="0 0 22 19" fill="none">
                  <path className=" stroke-black dark:stroke-white" d="M12.0912 1.68591L20.1149 9.70966L12.0912 17.7334M1.7749 9.70966H20.1149H1.7749Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </Link>
          </div>

        </div>

        <div className="text-center sm:px-10 sm:py-10 sm:text-left py-0 px-0 flex-1">

          <div className="justify-center">
            <svg className="max-w-full sm:max-w-none h-auto sm:mx-0 mx-auto" width="108" height="106" viewBox="0 0 108 106" fill="none">
              <rect x="0.900085" y="0.566406" width="106.983" height="105.073" rx="22.925" fill="#20B15A" />
              <path fillRule="evenodd" clipRule="evenodd" d="M64.9385 35.5321C68.0223 36.4912 70.5865 38.694 72.0351 41.6285C73.729 45.1852 73.9596 49.2835 72.6757 53.0141C71.494 56.4485 69.5566 59.5618 67.0118 62.1158C65.3433 63.8307 63.5454 65.4097 61.6345 66.8383L61.5334 66.9242C60.8986 67.3515 60.0449 67.1837 59.6117 66.5464C59.3915 66.2386 59.3031 65.853 59.3666 65.4777C59.4301 65.1023 59.6402 64.7692 59.9489 64.5543C61.7419 63.2033 63.4323 61.7165 65.0059 60.1065C67.272 57.8765 69.0026 55.1438 70.0629 52.1211C71.0828 49.1092 70.8764 45.8067 69.4898 42.9508C68.374 40.7042 66.408 39.0176 64.0451 38.2798C61.0311 37.3197 57.7475 37.9017 55.229 39.8425C54.7283 40.2204 54.044 40.2204 53.5433 39.8425C51.026 37.899 47.741 37.3167 44.7273 38.2798C42.3484 39.0013 40.3629 40.6828 39.232 42.9337C37.8767 45.7874 37.6828 49.071 38.6925 52.0696C39.7573 55.085 41.4874 57.8111 43.7496 60.0378C47.0921 63.3029 50.7779 66.1825 54.7401 68.6243C55.2441 68.9804 55.4657 69.6265 55.2891 70.2249C55.1125 70.8233 54.5779 71.2378 53.9647 71.2517C53.6883 71.2534 53.418 71.1696 53.1893 71.0113C49.0618 68.4682 45.2232 65.4676 41.7436 62.0642C39.1847 59.5187 37.2402 56.4032 36.0629 52.9626C34.8234 49.2372 35.0778 45.1638 36.7709 41.6285C38.2195 38.694 40.7838 36.4912 43.8676 35.5321C47.4131 34.4165 51.2599 34.9306 54.403 36.9403C57.5461 34.9306 61.3929 34.4165 64.9385 35.5321ZM63.5562 48.6866C63.4858 47.0996 62.4484 45.727 60.9603 45.2521C60.407 44.9002 60.1613 44.2088 60.3652 43.5776C60.569 42.9464 61.1697 42.5387 61.82 42.5903C64.3335 43.3986 66.1225 45.6684 66.3544 48.3432C66.402 48.7172 66.3003 49.0949 66.0722 49.3919C65.844 49.6889 65.5085 49.8802 65.1408 49.9231C64.3688 50.0247 63.661 49.4724 63.5562 48.6866Z" fill="#130F26" />
            </svg>
          </div>


          <div className={" text-black dark:text-white text-xl font-semibold mt-1 mb-1 ml-1 mr-1"+poppins.className }>
            vehicles for sell
          </div>


          <div className={"sm:max-w-xs text-black dark:text-white text-xs font-regular mt-1 mb-3 ml-1 mr-1"}>
            We help you to sell your old cycles or vehicles
          </div>


          <div className=" mt-1 mb-1 ml-1 mr-1">
            <Link href="/">
              <button className={"hover:bg-orange px-3 py-3 rounded-xl text-xs font-normal text-black dark:text-white"}>
                Learn More   <svg className=" inline " width="17" height="12" viewBox="0 0 22 19" fill="none">
                  <path className=" stroke-black dark:stroke-white" d="M12.0912 1.68591L20.1149 9.70966L12.0912 17.7334M1.7749 9.70966H20.1149H1.7749Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </Link>
          </div>

        </div>
      </div><div className="flex-1 md:flex pt-3 pb-3 mt-3 mb-1 mr-auto ml-auto">
        <div className="py-0 px-0 flex-1 text-center  ">
          <div>
            <svg className="max-w-full  h-auto  mx-auto" fill="#808080" height="100px" width="100px" version="1.1" id="Capa_1" viewBox="0 0 300.25 300.25" stroke="#808080" strokeWidth="0.0030025000000000004">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.201">
              </g>
              <g id="SVGRepo_iconCarrier">
                <path d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273 c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979 c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141 c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166 c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12 c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201 c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508 c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051 c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289 c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547 S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062 c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478 h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626 c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655 c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642 c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461 c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785 c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977 c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z">
                </path>
              </g>
            </svg>
          </div>
          <div className={" text-black dark:text-white text-base font-semibold mt-1 mb-3 ml-1 mr-1"+ poppins.className}>
            vehicles for sell
          </div>
          <div className={" text-dgreen dark:text-dgreen text-xl mt-1 mb-3 ml-1 mr-1"}>
            100+
          </div>
        </div>
        <div className=" md:w-0.5 md:h-auto w-auto h-0.5 bg-grey dark:bg-grey"></div>
        <div className="py-0 px-0 flex-1 text-center ">
          <div>
            <svg className="max-w-full  h-auto  mx-auto" fill="#808080" version="1.1" id="Capa_1" width="100px" height="100px" viewBox="0 0 478.248 478.248" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M456.02,44.821H264.83c-12.26,0-22.232,9.972-22.232,22.229v98.652c0,12.258,9.974,22.23,22.232,22.23h16.787v39.161 c0,2.707,1.58,5.165,4.043,6.292c0.92,0.42,1.901,0.627,2.875,0.627c1.631,0,3.244-0.576,4.523-1.685l51.383-44.396h111.576 c12.26,0,22.23-9.973,22.23-22.23V67.05C478.25,54.792,468.277,44.821,456.02,44.821z M319.922,112.252l-10.209,9.953 l2.41,14.054c0.174,1.015-0.242,2.038-1.076,2.643c-0.469,0.342-1.027,0.516-1.588,0.516c-0.428,0-0.861-0.103-1.256-0.31 l-12.621-6.635l-12.619,6.635c-0.912,0.478-2.016,0.398-2.848-0.206s-1.248-1.628-1.074-2.643l2.41-14.054l-10.211-9.953 c-0.734-0.718-1.002-1.792-0.685-2.769c0.317-0.978,1.164-1.691,2.183-1.839l14.11-2.05l6.31-12.786 c0.457-0.923,1.396-1.507,2.424-1.507s1.969,0.584,2.422,1.507l6.312,12.786l14.107,2.05c1.02,0.148,1.863,0.861,2.184,1.839 C320.924,110.46,320.658,111.535,319.922,112.252z M384.766,112.252l-10.211,9.953l2.412,14.054 c0.172,1.015-0.244,2.038-1.076,2.643c-0.469,0.342-1.025,0.516-1.588,0.516c-0.43,0-0.859-0.103-1.26-0.31l-12.619-6.635 l-12.619,6.635c-0.912,0.478-2.014,0.398-2.846-0.206c-0.834-0.604-1.25-1.628-1.076-2.643l2.41-14.054l-10.209-9.953 c-0.734-0.718-1.002-1.792-0.684-2.769c0.316-0.978,1.16-1.691,2.182-1.839l14.109-2.05l6.311-12.786 c0.455-0.923,1.396-1.507,2.422-1.507c1.029,0,1.967,0.584,2.422,1.507l6.312,12.786l14.109,2.05 c1.021,0.148,1.863,0.861,2.182,1.839C385.768,110.46,385.5,111.535,384.766,112.252z M449.607,112.252l-10.211,9.953 l2.408,14.054c0.176,1.015-0.238,2.038-1.072,2.643c-0.471,0.342-1.027,0.516-1.59,0.516c-0.43,0-0.859-0.103-1.258-0.31 l-12.621-6.635l-12.621,6.635c-0.908,0.478-2.012,0.398-2.844-0.206c-0.834-0.604-1.248-1.628-1.076-2.643l2.412-14.054 l-10.211-9.953c-0.734-0.718-1-1.792-0.684-2.769c0.316-0.978,1.164-1.691,2.182-1.839l14.111-2.05l6.311-12.786 c0.453-0.923,1.395-1.507,2.42-1.507c1.027,0,1.971,0.584,2.426,1.507L434,105.594l14.109,2.05 c1.018,0.148,1.861,0.861,2.182,1.839C450.609,110.46,450.344,111.535,449.607,112.252z"></path>
                <path d="M152.844,112.924c-46.76,0-72.639,24.231-72.166,70.921c0.686,63.947,27.859,102.74,72.166,102.063 c0,0,72.131,2.924,72.131-102.063C224.975,137.155,200.605,112.924,152.844,112.924z"></path>
                <path d="M280.428,334.444l-72.074-28.736l-16.877-14.223c-4.457-3.766-11.041-3.488-15.178,0.621l-23.463,23.336l-23.533-23.342 c-4.137-4.104-10.713-4.369-15.164-0.615l-16.881,14.223l-72.074,28.739C1.975,343.69,1.995,425.884,0,433.427h305.646 C303.656,425.9,303.646,343.679,280.428,334.444z"></path>
              </g> </g> </g> </g>
            </svg>
          </div>
          <div className={" text-black dark:text-white text-base font-semibold mt-1 mb-3 ml-1 mr-1"+ poppins.className}>
            Testimonials
          </div>
          <div className={" text-dgreen dark:text-dgreen text-xl mt-1 mb-3 ml-1 mr-1"}>
            100+
          </div>
        </div>
        <div className=" md:w-0.5 md:h-auto w-auto h-0.5 bg-grey dark:bg-grey"></div>
        <div className="py-0 px-0 flex-1 text-center">
          <div>
            <svg className="max-w-full  h-auto  mx-auto " fill="#808080" height="100px" width="100px" viewBox="-8 0 32 32" version="1.1" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
              </g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
              </g>
              <g id="SVGRepo_iconCarrier">
                <path d="M13.52 5.72h-7.4c-0.36 0-0.56 0.2-0.6 0.24l-5.28 5.28c-0.040 0.040-0.24 0.24-0.24 0.56v12.2c0 1.24 1 2.24 2.24 2.24h11.24c1.24 0 2.24-1 2.24-2.24v-16.040c0.040-1.24-0.96-2.24-2.2-2.24zM5.28 8.56v1.8c0 0.32-0.24 0.56-0.56 0.56h-1.84l2.4-2.36zM14.080 24.040c0 0.32-0.28 0.56-0.56 0.56h-11.28c-0.32 0-0.56-0.28-0.56-0.56v-11.36h3.040c1.24 0 2.24-1 2.24-2.24v-3.040h6.52c0.32 0 0.56 0.24 0.56 0.56l0.040 16.080z">
                </path>
              </g>
            </svg>
          </div>
          <div className={" text-black dark:text-white text-base font-semibold mt-1 mb-3 ml-1 mr-1"+ poppins.className}>
            previous year paper
          </div>
          <div className={" text-dgreen dark:text-dgreen text-xl mt-1 mb-3 ml-1 mr-1"}>
            2015-2023
          </div>

        </div>
        <div className=" md:w-0.5 md:h-auto w-auto h-0.5 bg-grey dark:bg-grey"></div>
        <div className="py-0 px-0 flex-1 text-center">
          <div>
            <svg className="max-w-full  h-auto  mx-auto" version="1.0" id="Layer_1" width="80px" height="80px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" fill="#808080" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
              </g><g id="SVGRepo_iconCarrier"> <g>
                <path fill="#808080" d="M31,7.663L2.516,0.067c-0.17-0.045-0.343-0.066-0.515-0.066c-0.437,0-0.866,0.142-1.22,0.413 C0.289,0.793,0,1.379,0,2v41.495l31,8.206V7.663z M24.43,40.274C24.304,40.714,23.903,41,23.469,41 c-0.092,0-0.184-0.013-0.275-0.038L8.727,36.829c-0.531-0.152-0.839-0.705-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.133C24.273,39.19,24.581,39.743,24.43,40.274z M24.43,33.274C24.304,33.714,23.903,34,23.469,34 c-0.092,0-0.184-0.013-0.275-0.038L8.727,29.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,32.19,24.581,32.744,24.43,33.274z M24.43,26.274C24.304,26.714,23.903,27,23.469,27 c-0.092,0-0.184-0.013-0.275-0.038L8.727,22.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.834,1.236-0.688 l14.467,4.134C24.273,25.19,24.581,25.744,24.43,26.274z M24.43,19.274C24.304,19.714,23.903,20,23.469,20 c-0.092,0-0.184-0.013-0.275-0.038L8.727,15.828c-0.531-0.152-0.839-0.706-0.688-1.236c0.152-0.532,0.709-0.833,1.236-0.688 l14.467,4.134C24.273,18.19,24.581,18.744,24.43,19.274z"></path>
                <path fill="#808080" d="M63.219,0.414c-0.354-0.271-0.784-0.413-1.221-0.413c-0.172,0-0.345,0.022-0.514,0.066L33,7.663v44.038 l31-8.206V2C64,1.379,63.711,0.793,63.219,0.414z M39.424,32l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 c0.151,0.53-0.156,1.084-0.688,1.236l-14.467,4.134c-0.092,0.025-0.184,0.038-0.275,0.038c-0.435,0-0.835-0.286-0.961-0.726 C38.585,32.706,38.893,32.152,39.424,32z M54.742,36.829l-14.467,4.133C40.184,40.987,40.092,41,40,41 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.531,0.156-1.084,0.688-1.236l14.467-4.133c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,36.124,55.273,36.677,54.742,36.829z M54.742,22.828l-14.467,4.134C40.184,26.987,40.092,27,40,27 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.146,1.084,0.155,1.236,0.688 C55.581,22.122,55.273,22.676,54.742,22.828z M54.742,15.828l-14.467,4.134C40.184,19.987,40.092,20,40,20 c-0.435,0-0.835-0.286-0.961-0.726c-0.151-0.53,0.156-1.084,0.688-1.236l14.467-4.134c0.528-0.145,1.084,0.155,1.236,0.688 C55.581,15.122,55.273,15.676,54.742,15.828z"></path>
                <polygon fill="#808080" points="31,53.77 0,45.564 0,47.495 31,55.701 "></polygon>
                <polygon fill="#808080" points="33,55.701 64,47.495 64,45.564 33,53.77 "></polygon>
                <path fill="#808080" d="M35,58.034c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-0.266,0.046-0.52,0.11-0.765L0,49.564v2.435 c0,0.906,0.609,1.699,1.484,1.933l25.873,6.899C28.089,62.685,29.887,64,32,64s3.911-1.315,4.643-3.169l25.873-6.899 C63.391,53.698,64,52.905,64,51.999v-2.435L34.89,57.27C34.954,57.515,35,57.769,35,58.034z"></path>
              </g> </g></svg>
          </div>
          <div className={" text-black dark:text-white text-base font-semibold mt-1 mb-3 ml-1 mr-1"+ poppins.className}>
            old book and stationary
          </div>
          <div className={" text-dgreen dark:text-dgreen text-xl mt-1 mb-3 ml-1 mr-1"}>
            100+
          </div>
        </div>
      </div>
  </div>
  </>
 );
}

export default WhatWeDo;

