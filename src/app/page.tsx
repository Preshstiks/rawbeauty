import Image from "next/image";
import Logo from "../assets/Logo.svg";
import Flag from "../assets/Flag.svg";
import HeroBottle from "../assets/bottle1.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#131B17] py-2 text-center text-white">
        <p className="text-[1rem] font-interRegular">
          Free shipping in Kano. Free shipping worldwide over 60 EUR, GBP & 70
          USD
        </p>
      </div>
      <div className=" font-interRegular flex items-start justify-between pt-3 pb-4 px-[2.5%]">
        <div className="flex gap-8">
          <div>Shop</div>
          <div>About</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div>
          <Image src={Logo} width={96} height={96} alt="logo" />
        </div>
        <div className="flex gap-5">
          <div className="flex items-center space-x-1">
            <Image src={Flag} width={22} height={22} alt="flag" />
            <p>USD</p>
            <div className="text-[1.2rem]">
              <RiArrowDownSLine />
            </div>
          </div>
          <div className="text-[1.5rem]">
            <CiUser />
          </div>
          <div className="relative inline-block">
            <div className="text-[1.5rem]">
              <HiOutlineShoppingBag />
            </div>
            <div className="text-[0.54169rem] h-[0.67706rem] w-[0.67706rem] bg-[#366653] text-white rounded-full flex items-center justify-center absolute bottom-0 right-0">
              4
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-hero-bg h-screen w-full relative bg-cover">
        <div className="text-center pt-[40px]">
          <h1 className=" uppercase text-[4.1875rem] font-zodiakRegular text-white">
            Skin repairs begins here.
          </h1>
          <p className="text-[1.125rem] px-[28%] font-interRegular text-white">
            Our Plant based ingredients are ethically sourced to produce clean
            and safe beauty products for You
          </p>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="flex w-[634px] items-start px-[12px] py-[20px] relative backdrop-blur-[5px] backdrop-filter bg-opacity-30 bg-[rgba(255,255,255,1.0)] [background:linear-gradient(180deg,rgba(255,255,255,0.45)_0%,rgba(93.5,93.5,93.5,0.45)_0.01%,rgba(94,94,94,0.4)_100%)]">
            <div className="items-center flex-1 self-stretch grow flex relative">
              <Image
                className="relative self-stretch w-[138.65px] object-cover"
                alt="herobottle"
                src={HeroBottle}
              />
              <div className="flex-col items-start gap-[38px] flex-1 grow flex relative">
                <div className="flex-col items-start gap-[20px] self-stretch w-full flex-[0_0_auto] flex relative">
                  <div className="flex-col items-start gap-[3px] self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative w-fit mt-[-1.00px] font-zodiakRegular text-white text-[1.125rem] tracking-[0] leading-[32px] whitespace-nowrap">
                      REPAIR & RENEW FACE CREAM
                    </div>
                    <p className="relative self-stretch font-interRegular text-[#979797] text-[0.8125rem] tracking-[-1.00px] leading-[20px]">
                      Enhanced with active ingredients that increase skin
                      density, restore skin elasticity, smoothen out wrinkles,
                      strengthen collagen matrix, promote radiance and alleviate
                      blemishes and acne
                    </p>
                  </div>
                  <div className="relative w-fit font-interSemiBold font-semibold text-white text-[1.3125rem] tracking-[-1.00px] leading-[20px] whitespace-nowrap">
                    NGN 58,750
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
