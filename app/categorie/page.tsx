'use client';

import { Input } from '@heroui/input';
import { DatePicker } from '@heroui/date-picker';
import { NumberInput } from '@heroui/number-input';
import Image from 'next/image';

import { BoxReveal } from '@/components/magicui/box-reveal';
import { RippleButton } from '@/components/magicui/ripple-button';

const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' },
];

const LogoBoar = () => {
  let boar =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759920/sailing-boat_lamzbe.png';

  return <Image alt="iconeBoar" className="allogo" height={100} src={boar} width={100} />;
};

const LogoCatamarans = () => {
  let catamarans =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759969/catamaran_eja4iy.png';

  return (
    <Image alt="iconeCatamarans" className="allogo" height={100} src={catamarans} width={100} />
  );
};

const LogoCap = () => {
  let cap = 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759922/sailor-cap_l4uaje.png';

  return <Image alt="iconeCap" className="allogo" height={100} src={cap} width={100} />;
};

const LogoMap = () => {
  let map = 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759957/map_yoqtxl.png';

  return <Image alt="iconeMap" className="allogo" height={100} src={map} width={100} />;
};

const LogoZeus = () => {
  let zeus = 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759969/zeus_kpa4xy.png';

  return <Image alt="iconeZeus" className="allogo" height={100} src={zeus} width={100} />;
};

function LogoSailingTime() {
  let sailingtime =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757788472/sun_jnxowb.png';

  return (
    <Image alt="iconeSailingTime" className="allogo" height={100} src={sailingtime} width={100} />
  );
}

function LogoBateauSansPermis() {
  let bateauSansPermis =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759921/small_vtvaqc.png';

  return (
    <Image
      alt="iconebateauSansPermis"
      className="allogo"
      height={100}
      src={bateauSansPermis}
      width={100}
    />
  );
}

function LogoBateauSale() {
  let bateauSale = 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759921/sale_ht3xrk.png';

  return (
    <Image alt="iconebateauSale" className="allogo" height={100} src={bateauSale} width={100} />
  );
}

function LogoIdealFamille() {
  let idealFamille =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759921/family_lymmwc.png';

  return (
    <Image alt="iconeidealFamille" className="allogo" height={100} src={idealFamille} width={100} />
  );
}

function LogoSoleil() {
  let soleil = 'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759920/sunset_nlphxa.png';

  return <Image alt="iconesoleil" className="allogo" height={100} src={soleil} width={100} />;
}
function LogoSeminaire() {
  let seminaire =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759920/seminar_hlkli9.png';

  return <Image alt="iconeseminaire" className="allogo" height={100} src={seminaire} width={100} />;
}
function LogoPMR() {
  let PMR =
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759920/disabled-person_ggggie.png';

  return <Image alt="iconePMR" className="allogo" height={100} src={PMR} width={100} />;
}

export default function CategoriesPage() {
  const words = ['aventure', 'voyage', 'périple', 'épopée', 'exploration'];

  return (
    <>
      <section>
        <div className="relative">
          <div
            className="relative contentvideohome"
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757787819/vue-aerienne-des-yachts-amarres-a-port-olimpic-barcelone_rugdss.jpg)',
              width: '100%',
              height: '85vh',
              objectFit: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '97rem',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="absolute left-[1rem] md:left-[10rem] top-[14rem]">
            <div className="flex flex-col items-center md:items-start md:flex-row space-x-2">
              <div className="Textheader text-white">
                <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                  <h1 className="text-6xl font-bold h-[5rem]">Nos Categories de navigation</h1>
                </BoxReveal>

                <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                  <p className="text-lg mt-4">
                    Choisissez la categorie de bateau ou de service <br /> qui vous convient le
                    mieux pour vivre <br /> une experience en mer inoubliable.
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="py-24"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dluqkutu8/image/upload/v1750525392/5594016_ntbb0p.jpg)',
          }}
        >
          <div className="flex flex-col justify-center items-center pb-20">
            <div>
              <h2 className="text-5xl font-medium mb-5">EMBARQUEZ POUR UNE AVENTURE SUR MESURE</h2>
            </div>
            <div>
              <p className="descriptionallsectionhome text-center w-[63rem]">
                Découvrez notre sélection de bateaux adaptés à tous les styles de navigation. Que
                vous recherchiez une escapade paisible à bord d&apos;un voilier, une croisière
                conviviale en catamaran, ou une sortie guidée avec skipper, trouvez
                l&apos;expérience idéale pour voguer à votre rythme..
              </p>
            </div>
          </div>
          <div className="contentcategoriehome">
            <div className="grid grid-cols-3 gap-1">
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoBoar />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757759976/vue-d-un-voilier-sur-l-eau_aea82f.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Voiliers</div>
                    <div>
                      Naviguez à l&apos;ancienne et ressentez chaque brise pour une expérience
                      authentique.
                    </div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Explorer les voiliers
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoCatamarans />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757763416/image-de-bateau-generee-par-ai_1_u2zznt.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Catamarans</div>
                    <div>
                      Stables et confortables, parfaits pour les familles ou les longs séjours.
                    </div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Voir les catamarans
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoCap />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757763506/homme-voyageant-en-bateau-a-san-sebastian_1_evi98t.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Excursions avec Skipper</div>
                    <div>
                      Partez sans permis : un professionnel vous accompagne tout au long de votre
                      navigation.
                    </div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Réserver une excursion
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoMap />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757763692/belle-jeune-femme-relaxante-dans-ses-vacances_1_anzaqg.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Destinations Populaires</div>
                    <div>
                      Explorez les spots les plus réservés par nos utilisateurs, testés et
                      approuvés.
                    </div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Voir les destinations
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoZeus />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757764387/tir-vertical-d-un-yacht-sur-un-plan-d-eau-en-nouvelle-zelande_imkwo3.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Bateaux à Moteur</div>
                    <div>Vitesse, liberté et adrénaline pour vos journées en mer.</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Choisir un bateau à moteur
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoSailingTime />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757765100/man-travelling-by-boat-san-sebastian_1_qgtiyq.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Location à la Journée</div>
                    <div>Idéal pour une escapade rapide sans engagement</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Louer à la journée
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoBateauSansPermis />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757789401/sourire-jeune-homme-derriere-le-volant-d-un-bateau_1_swgwen.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Bateaux sans permis</div>
                    <div>Naviguez librement sans avoir besoin de licence</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Partir sans permis
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoBateauSale />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757789564/belle-jeune-femme-dans-un-manteau-rouge-buvant-du-champagne-sur-un-yacht_1_1_slptfm.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Offre de derniere minute</div>
                    <div>Profitez des prix reduits sur les locations recentes</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Profiter des offres
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoIdealFamille />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757789694/famille-heureuse-avec-des-gilets-de-sauvetage-a-voile-sur-la-riviere_1_cy4tga.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Ideal en Famille</div>
                    <div>Bateaux spacieux et securisés pour tous ages</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Voir pour la famille
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoSoleil />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757789772/bateaux-en-mer-au-coucher-du-soleil_1_ab9s2d.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Coucher de soleil</div>
                    <div>Petites Croisières romantiques à l&apos;heure dorée</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Réserver au coucher du soleil
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoSeminaire />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757789848/gros-plan-sur-des-amis-qui-applaudissent_ralutg.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Séminaires & Team building</div>
                    <div>Organisez un evenement pro en mer</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Organiser un événement
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative cardcategorie">
                <div className="logocategrie1 flex justify-center items-center">
                  <LogoPMR />
                </div>
                <div
                  className="cardcategoriecontent"
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757790024/femme-s-amusant-avec-son-ami-handicape_1_ymrdhx.jpg)',
                  }}
                >
                  <div className="relative contentdescriptioncategorie flex flex-col justify-center px-6 py-16 z-10 space-y-4 text-white">
                    <div className="text-xl font-bold">Accessibilité PMR</div>
                    <div>Bateaux adaptés aux personnes à mobilité reduite</div>
                    <div>
                      <RippleButton
                        className="rounded-full bg-glace text-white font-medium"
                        rippleColor="#ADD8E6"
                      >
                        Voir les bateaux accessibles
                      </RippleButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
