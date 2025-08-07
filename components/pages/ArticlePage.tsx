'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Timeline } from 'antd';
import { Checkbox } from '@heroui/checkbox';
import { Chip } from '@heroui/chip';
import { Alert } from '@heroui/alert';
import { FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { BiSolidBookmark } from 'react-icons/bi';
import { Tooltip } from '@heroui/tooltip';
import { FaWifi } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { IoBed } from 'react-icons/io5';
import { TbAirConditioningDisabled } from 'react-icons/tb';
import { RiSailboatFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkPreview } from '@/components/ui/link-preview';
import { SingleCarousselBoat } from '@/components/pages/singlecarousselboat';
import { SingleCaracteristiqueBoat } from '@/components/pages/singlecaracteristiqueboat';
import { GalerieSingleBoat } from '@/components/pages/galeriesingleboat';
import { CalendarSingleBoat } from '@/components/pages/calendarsingleboat';
import { useDateRange } from '@/context/DateRangeContext';
import CommentsSection from '@/components/pages/CommentsSection';

export default function ArticlePage() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setSticky] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [divTopOffset, setDivTopOffset] = useState<number | null>(null);
  const { date1, date2 } = useDateRange();

  useEffect(() => {
    if (divRef.current) {
      // On récupère la position initiale de la div dans la page
      setDivTopOffset(divRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (divTopOffset === null) return;

      // La position verticale actuelle du scroll
      const scrollY = window.scrollY;

      if (scrollY >= divTopOffset && !isSticky) {
        setSticky(true);
      } else if (scrollY < divTopOffset && isSticky) {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [divTopOffset, isSticky]);

  return (
    <>
      <section
        className="pt-16"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751624019/5601165_vw0d54.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingBottom: '5rem',
        }}
      >
        <SingleCarousselBoat />
        <SingleCaracteristiqueBoat />
        <div>
          <div className="mx-auto max-w-6xl">
            <div className="mb-4">
              <Chip className="border-none contentTitleBoat" variant="dot">
                <h1 className="text-4xl">
                  Full Day Adventure : Entre Île du Frioul et Calanques d&apos;Ensues
                </h1>
              </Chip>
            </div>
            <div className="flex flex-row space-x-4 justify-between">
              <div className="flex flex-col space-y-4 w-[40rem]">
                <div className="flex flex-row space-x-4">
                  <div className="text-gray-600">Port L&apos;Estaque, Marseille, France</div>
                  <Chip className="p-2.5 bgBlue text-white" variant="shadow">
                    <div className="flex flex-row space-x-4 items-center">
                      <div>
                        <RiSailboatFill />
                      </div>
                      <div>catamaran</div>
                    </div>
                  </Chip>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-row space-x-2">
                    <FaStar className="text-amber-400 w-6 h-6" />
                    <FaStar className="text-amber-400 w-6 h-6" />
                    <FaStar className="text-white w-6 h-6" />
                    <FaStar className="text-white w-6 h-6" />
                    <FaStar className="text-white w-6 h-6" />
                  </div>
                  <div className="flex flex-row space-x-4">
                    <Tooltip color="secondary" content="Partager" offset={15}>
                      <div className="flex justify-center items-center cursor-pointer p-2.5 bg-glacev2 rounded-full w-12 h-12">
                        <IoMdShare className="w-8 h-8" />
                      </div>
                    </Tooltip>
                    <Tooltip color="secondary" content="Mettre en favorie" offset={15}>
                      <div className="flex justify-center items-center cursor-pointer p-2.5 bg-glacev2 rounded-full w-12 h-12">
                        <BiSolidBookmark className="w-8 h-8" />
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <div className="text-xl text-black font-bold underline underline-offset-8">
                    Description
                  </div>
                  <div className="text-gray-600 mt-2">
                    Louez notre bateau sans permis à Marseille - Tout le confort d&apos;un grand !
                    Vous rêvez de naviguer en toute liberté sans avoir besoin de permis ? Notre
                    bateau est fait pour vous ! Partez à la découverte des magnifiques calanques de
                    Marseille, explorez des criques secrètes aux eaux turquoise et admirez les
                    splendides côtes méditerranéennes, le tout avec le confort et l&apos;équipement
                    d&apos;un grand bateau.
                  </div>
                </div>
                <div className="mt-[3rem]">
                  <div className="text-xl text-black font-bold underline underline-offset-8">
                    Équipements à bord
                  </div>
                  <div className="flex flex-wrap space-x-4 mt-4">
                    <Chip className="p-2.5 bgBlue text-white" variant="shadow">
                      <div className="flex flex-row space-x-4 items-center">
                        <div>
                          <FaWifi />
                        </div>
                        <div>Wi-Fi</div>
                      </div>
                    </Chip>
                    <Chip className="p-2.5 bgBlue text-white" variant="shadow">
                      <div className="flex flex-row space-x-4 items-center">
                        <div>
                          <FaKitchenSet />
                        </div>
                        <div>cuisine équipée</div>
                      </div>
                    </Chip>
                    <Chip className="p-2.5 bgBlue text-white" variant="shadow">
                      <div className="flex flex-row space-x-4 items-center">
                        <div>
                          <IoBed />
                        </div>
                        <div>literie</div>
                      </div>
                    </Chip>
                    <Chip className="p-2.5 bgBlue text-white" variant="shadow">
                      <div className="flex flex-row space-x-4 items-center">
                        <div>
                          <TbAirConditioningDisabled />
                        </div>
                        <div>climatisation</div>
                      </div>
                    </Chip>
                  </div>
                </div>

                <div className="mt-[3rem]">
                  <div className="text-xl text-black font-bold underline underline-offset-8">
                    Informations de navigation
                  </div>
                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="text-lg text-gray-700">Port de départ et d&apos;arrivée</div>
                    <div className="flex items-center justify-start w-full">
                      <LinkPreview
                        className="font-bold"
                        url="https://maps.google.com/?q=Port+de+Nice"
                      >
                        <Alert
                          color="default"
                          description="Port de Nice"
                          icon={<FaLocationDot />}
                          title="Départ"
                          variant="faded"
                        />
                      </LinkPreview>
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <LinkPreview
                        className="font-bold"
                        url="https://maps.google.com/?q=Port+de+Cannes"
                      >
                        <Alert
                          color="default"
                          description="Port de Cannes"
                          icon={<FaLocationDot />}
                          title="Arrivée"
                          variant="faded"
                        />
                      </LinkPreview>
                    </div>
                    <div className="mt-[3rem]">
                      <div className="text-xl text-black font-bold underline underline-offset-8 mb-4">
                        Disponibilités
                      </div>
                      <div className="flex items-center justify-center w-full mb-4">
                        <div className="flex flex-col w-full">
                          <div className="w-full flex items-center my-3">
                            <Alert
                              color="warning"
                              title="Sélectionnez la plage de dates souhaitée pour commencer votre réservation."
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <CalendarSingleBoat />
                      </div>
                    </div>
                    <div className="text-lg text-gray-700 mt-4">Zones de navigation autorisées</div>
                    <div className="text-base text-gray-600 mt-2 pl-2">
                      Méditerranée occidentale
                    </div>
                    <Timeline
                      items={[
                        {
                          children: 'Côte d Azur',
                        },
                        {
                          children: 'Corse',
                        },
                        {
                          children: 'Baléares',
                        },
                      ]}
                    />
                    <div>
                      <div className="text-lg text-gray-700 mt-2">Conditions de location</div>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Caution : 3000 € (empreinte bancaire ou virement).</li>
                        <li>Permis bateau côtier obligatoire.</li>
                        <li>Assurance incluse ou proposée en option.</li>
                        <li>Contrat de location signé avant le départ.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-[3rem]">
                  <div className="text-xl text-black font-bold underline underline-offset-8 mb-4">
                    Galerie
                  </div>
                  <div>
                    <GalerieSingleBoat />
                  </div>
                </div>
              </div>
              <div>
                <div
                  ref={divRef}
                  style={{
                    // background: 'lightblue',
                    // padding: '20px',
                    // width: '100%',
                    ...(isSticky
                      ? {
                          position: 'fixed',
                          top: '6rem',
                          left: '58rem',
                          right: 0,
                          zIndex: 30,
                        }
                      : {}),
                  }}
                >
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Réservez votre bateau en quelques clics</CardTitle>
                      <CardDescription>
                        <div className="flex items-center justify-center w-full mb-4">
                          <div className="flex flex-col w-full">
                            <div className="w-full flex items-center my-3">
                              <Alert
                                color="warning"
                                title="En cas d'annulation plus de 30 jours avant le départ, remboursement intégral. Passé ce délai, voir nos conditions d'annulation."
                              />
                            </div>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="flex flex-col gap-6">
                          <div className="grid gap-2">
                            <Label htmlFor="datedebut">Date de début</Label>
                            <Input
                              disabled
                              id="datedebut"
                              value={date1 ? date1.format('YYYY-MM-DD') : 'Non définie'}
                              //   placeholder='m@example.com'
                              //   required
                              type="text"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="datefin">Date de fin</Label>
                            <Input
                              disabled
                              id="datefin"
                              type="text"
                              value={date2 ? date2.format('YYYY-MM-DD') : 'Non définie'}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Checkbox
                              isSelected={isAccepted}
                              radius="full"
                              onValueChange={setIsAccepted}
                            >
                              J&apos;accepte les conditions de location et la politique
                              d&apos;annulation.
                            </Checkbox>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      <Button className="w-full" disabled={!isAccepted} type="submit">
                        Réserver maintenant
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentsSection />
        {/* <BateauSimilaireSection /> */}
      </section>
    </>
  );
}
