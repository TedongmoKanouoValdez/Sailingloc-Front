"use client";
import React from "react";
import { PiSunDimFill } from "react-icons/pi";
import { Badge, Space, Tooltip } from "antd";
import { BiSolidBookmark } from "react-icons/bi";
import { Chip } from "@heroui/chip";
import { FaSailboat } from "react-icons/fa6";
import { GiCaptainHatProfile } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdPin } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

import { RippleButton } from "@/components/magicui/ripple-button";

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

export default function BateauSimilaireSection() {
  return (
    <div className="mx-auto max-w-6xl grid grid-cols-2 gap-2 place-items-center">
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
          <Space direction="vertical" size="middle" style={{ width: "100%", gap: "2rem" }}>
            <Badge.Ribbon className="bg-glacev2" text="Croisières le long de la Côte d&apos;Azur." />
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
                <RippleButton className="bg-white text-black">Voir les bateaux</RippleButton>
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
          <Space direction="vertical" size="middle" style={{ width: "100%", gap: "2rem" }}>
            <Badge.Ribbon className="bg-glacev2" text="Croisières le long de la Côte d&apos;Azur." />
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
                <RippleButton className="bg-white text-black">Voir les bateaux</RippleButton>
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
          <Space direction="vertical" size="middle" style={{ width: "100%", gap: "2rem" }}>
            <Badge.Ribbon className="bg-glacev2" text="Croisières le long de la Côte d&apos;Azur." />
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
                <RippleButton className="bg-white text-black">Voir le bateaux</RippleButton>
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
  );
}
