"use client";
import { DatePicker } from "@heroui/date-picker";
import { NumberInput } from "@heroui/number-input";
import { Input } from "@heroui/input";
import { Badge, Space, Tooltip } from "antd";
import { Chip } from "@heroui/chip";
import { PiSunDimFill } from "react-icons/pi";
import { BiSolidBookmark } from "react-icons/bi";
import { FaSailboat } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { GiCaptainHatProfile } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { Pagination } from "@heroui/pagination";

import { RippleButton } from "@/components/magicui/ripple-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { FlipWords } from "@/components/ui/flip-words";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

type Props = {
  texte: string; // Définit que "texte" doit être une chaîne de caractères
};

export const MonTexte = ({ texte }: Props) => {
  const maxChars = 7; // Limite à 100 caractères
  const courtTexte = texte.length > maxChars ? texte.slice(0, maxChars) + "..." : texte;

  return <p>{courtTexte}</p>;
};

export const Descritpion = ({ texte }: Props) => {
  const maxChars = 90; // Limite à 100 caractères
  const courtTexte = texte.length > maxChars ? texte.slice(0, maxChars) + "..." : texte;

  return <p>{courtTexte}</p>;
};

export default function NosBateauxPage() {
  const words = [
    "Vivez l'expérience de",
    "Imaginez-vous à bord de",
    "Offrez-vous un moment unique avec",
    "Embarquez avec",
  ];

  return (
    <>
      <section>
        <div className="relative">
          <div className="contentvideohome">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              src="https://res.cloudinary.com/dluqkutu8/video/upload/v1750975848/18682386-uhd_3840_2160_25fps_tavnq6.mp4"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
          <div className="contenttext">
            <div className="flex flex-row space-x-2">
              <div className="text-white">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h1 className="text-6xl font-bold w-[60rem]">
                    <FlipWords className="text-white" words={words} />
                    nos bateaux disponibles à la location
                  </h1>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-lg mt-4 w-[31rem]">
                    Voiliers, catamarans, bateaux à moteur… trouvez le bateau idéal pour votre
                    prochaine aventure en mer, avec ou sans skipper.
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751014902/5615262_z9dztf.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200rem",
        }}
      >
        <div className="pt-20">
          <div className="flex flex-col justify-center items-center pb-20">
            <div>
              <h2 className="text-5xl font-medium mb-5">
                EXPLORER NOTRE FLOTTE DE BATEAUX A LOUER
              </h2>
            </div>
            <div>
              <p className="descriptionallsectionhome text-center">
                Réservez facilement le bateau qui vous ressemble, en quelques clics, partout en
                France et en Europe.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pb-20">
          <div>
            <div className=" mb-8">
              <form action="">
                <div className="grid grid-cols-5 gap-4 place-items-center">
                  <div className="">
                    <Input
                      color="primary"
                      label="Veuillez saisire votre destination"
                      type="text"
                      variant="bordered"
                    />
                  </div>
                  <div className="">
                    <Input color="primary" label="Type de bateau" type="text" variant="bordered" />
                  </div>
                  <div className="">
                    <DatePicker color="primary" label={"Dates de navigation"} variant="bordered" />
                  </div>
                  <div className="">
                    <NumberInput color="primary" label="Nombre de passagers" variant="bordered" />
                  </div>
                  <div>
                    <RippleButton className="py-3.5 text-white bg-black" rippleColor="#ADD8E6">
                      Rechercher
                    </RippleButton>
                  </div>
                </div>
              </form>
            </div>
            <hr className="mb-8 border border-black" />
            <div>
              <div className="grid grid-cols-3 gap-3 place-items-center">
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751018808/parking-marin-de-bateaux-et-yachts-en-turquie-yacht-amarre-dans-le-port-maritime_ecsqlq.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Ocean Breeze 42
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Voilier">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Voilier" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Inclus">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Inclus" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="320€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="320€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Marseille">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Marseille" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="6 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="6 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020033/white-yacht-with-mountains_1_mj6jqe.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Luxor Cat 45
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Catamaran">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Catamaran" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Inclus">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Inclus" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="720€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="720€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Saint-Tropez">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Saint-Tropez" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="12 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="12 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020067/sailing-ship-sea-sunlight-cloudy-sky-daytime_1_ztf587.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Luxor Cat 45
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Bateau à moteur">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Bateau à moteur" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Sans">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Sans" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="310€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="310€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Arcachon">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Arcachon" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="6 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="6 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir le bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020106/view-beautiful-white-yacht-daylight-horizontal-sea-background_bubbsa.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Family Sea 30
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Voilier">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Voilier" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Optionnel">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Optionnel" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="390€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="390€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Hyères">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Hyères" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="8 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="8 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020142/parking-marin-de-bateaux-et-yachts-en-turquie-yacht-amarre-dans-le-port-maritime_1_rsjela.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Serenity 36
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Voilier">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Voilier" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Inclus">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Inclus" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="430/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="430/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Bastia">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Bastia" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="9 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="9 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020192/yachts-de-luxe-dans-un-port-le-soir_1_vmgidd.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Corsica Spirit 40
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Catamaran">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Catamaran" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Inclus">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Inclus" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="680€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="680€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Ajaccio">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Ajaccio" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="10 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="10 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020247/bateau-a-voile-reste-a-bay-a-st-john-iles-vierges_1_valwhy.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Catana Dream 50
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Bateau à moteur">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Bateau à moteur" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Optionnel">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Optionnel" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="270€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="270€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Cannes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Cannes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="5 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="5 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir les bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020334/plage-tropicale-avec-des-bungalows-sur-l-eau-aux-maldives_st17mb.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Sea Harmony 38
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Voilier">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Voilier" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Optionnel">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Optionnel" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="340€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="340€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Toulon">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Toulon" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="7 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="7 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir le bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative carddestinationshome flex flex-col space-y-24"
                  style={{
                    backgroundImage:
                      "url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751020271/yachts-dans-le-port-de-monaco_ivlnh1.jpg)",
                    backgroundPositionX: "center",
                    backgroundSize: "26rem",
                  }}
                >
                  <div className="flex flex-row justify-between mx-4 mt-4 items-center">
                    <div className="bg-glace flex flex-row space-x-4 items-center px-2.5 py-1 rounded-full">
                      <div>
                        <PiSunDimFill className="text-yellow-400 w-6 h-6" />
                      </div>
                      <div className="text-white text-base">
                        25°C en été - <span className="font-bold">France</span>
                      </div>
                    </div>
                    <div className="cursor-pointer z-10">
                      <BiSolidBookmark className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: "100%", gap: "2rem" }}
                    >
                      <Badge.Ribbon
                        className="bg-glacev2"
                        text="Croisières le long de la Côte d'Azur."
                      />
                    </Space>
                  </div>
                  <div className="bg-glace contentinfocarddestination text-left text-base space-y-4 px-2">
                    <div className="space-y-2 px-2">
                      <div>
                        <Chip
                          className="text-white text-lg font-medium mt-2 border-none"
                          color="warning"
                          variant="dot"
                        >
                          Lagoon Sun 46
                        </Chip>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Catamaran">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <FaSailboat />
                                  </div>
                                  <div>
                                    <MonTexte texte="Catamaran" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="Inclus">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiCaptainHatProfile />
                                  </div>
                                  <div>
                                    <MonTexte texte="Inclus" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="650€/jour">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <GiTakeMyMoney />
                                  </div>
                                  <div>
                                    <MonTexte texte="650€/jour" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                        <div className="space-x-2">
                          <Space>
                            <Tooltip color="#000" title="Bormes-les-Mimosas">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <IoMdPin />
                                  </div>
                                  <div>
                                    <MonTexte texte="Bormes-les-Mimosas" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                          <Space>
                            <Tooltip color="#000" title="10 personnes">
                              <Chip className="cursor-pointer" color="warning" variant="shadow">
                                <div className="flex space-x-2 items-center">
                                  <div>
                                    <HiUserGroup />
                                  </div>
                                  <div>
                                    <MonTexte texte="10 personnes" />
                                  </div>
                                </div>
                              </Chip>
                            </Tooltip>
                          </Space>
                        </div>
                      </div>
                      <div
                        className="flex flex-row justify-between items-center"
                        style={{ marginBottom: "1rem" }}
                      >
                        <div>
                          <RippleButton className="bg-white text-black">
                            Voir le bateaux
                          </RippleButton>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-amber-400" />
                          <FaStar className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full mt-8">
                <Pagination showControls initialPage={1} total={10} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
