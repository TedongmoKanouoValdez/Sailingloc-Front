'use client';
import { useEffect, useState } from 'react';
import { SplitText } from '@/components/split-text';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { FlipWords } from '@/components/ui/flip-words';
import { DatePicker } from '@heroui/date-picker';
import { RippleButton } from '@/components/magicui/ripple-button';
import { NumberInput } from '@heroui/number-input';
import { Input } from '@heroui/input';
import { Badge, Space, Tooltip, Divider, Button } from 'antd';
import { Chip } from '@heroui/chip';
import { PiSunDimFill } from 'react-icons/pi';
import { BiSolidBookmark } from 'react-icons/bi';
import { FaSailboat } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { IoMdPin } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi2';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { useSearchParams, useRouter } from 'next/navigation';
import { Empty } from 'antd';
import { User } from '@heroui/user';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';
import {
  Select as Selectheroui,
  SelectSection as SelectSectionheroui,
  SelectItem as SelectItemheroui,
} from '@heroui/select';
import { IoReloadOutline } from 'react-icons/io5';
import { Pagination, PaginationItem, PaginationCursor } from '@heroui/pagination';
import { Button as ButtonHeroui } from '@heroui/button';
import Description from '@/components/Descritpion';
import MonTexte from '@/components/MonTexte';

interface OptionPayante {
  id: string;
  [key: string]: any; // si d’autres champs existent
}

interface Tarif {
  montant: string;
  type: string;
}

type Props = {
  texte: string; // Définit que 'texte' doit être une chaîne de caractères
};

interface Media {
  id: number;
  url: string;
  type: string;
  titre: string;
}

interface DetailBateau {
  optionsPayantes?: string; // JSON string
  tarifications?: string; // JSON string
  capaciteMax?: number;
  [key: string]: any; // pour tout le reste
}

interface Bateau {
  id: number;
  header: string;
  slug: string | number;
  modele: string;
  type: string;
  port: string;
  target: string;
  detail?: DetailBateau;
  description: string;
  datesIndisponibles: any[];
  proprietaireId: number;
  medias: Media[];
  nomproprietaire: string;
  prenomproprietaire: string;
  profilproprietaire: string;
  capacite: number;
}

const typeToLabel: Record<string, string> = {
  Aucun: '',
  'Par heure': '/ heure',
  'Par demi-journée': '/ demi-journée',
  'Par jour (journalier)': '/ jour',
  'Par week-end': '/ week-end',
  'Par semaine (hebdomadaire)': '/ semaine',
  'Par mois (mensuel)': '/ mois',
  'Par séjour (forfait global, peu importe la durée)': '/ séjour',
};

export default function NosBateauxPage({
  searchParams,
}: {
  searchParams?: { destination?: string };
}) {
  const words = [
    "Vivez l'expérience de",
    'Imaginez-vous à bord de',
    'Offrez-vous un moment unique avec',
    'Embarquez avec',
  ];
  const [data, setData] = useState<Bateau[]>([]);
  const [allBateaux, setAllBateaux] = useState<Bateau[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const [destination, setDestination] = useState<string | null>(null);
  const params = useSearchParams();

  // Récupère la destination dans l’URL sans boucle infinie
  useEffect(() => {
    const dest = params.get('destination');
    if (dest) {
      setDestination(dest);
    }
  }, [params]); // récupère la destination depuis l'URL

  // états pour filtres
  const [destinationform, setDestinationform] = useState('');
  const [typeBateau, setTypeBateau] = useState('');
  const [passagers, setPassagers] = useState<number | undefined>(undefined);

  useEffect(() => {
    const dest = params.get('destinationform') || '';
    const type = params.get('typeBateau') || '';
    const pax = params.get('passagers') || '';

    setDestinationform(dest);
    setTypeBateau(type);
    setPassagers(pax ? parseInt(pax, 10) : undefined);

    appliquerFiltres(); // applique directement
  }, [params]);

  useEffect(() => {
    setLoading(true);
    fetch('https://sailingloc-back.vercel.app/api/bateaux')
      .then((res) => res.json())
      .then((json) => {
        if (!json || !Array.isArray(json.bateaux)) {
          console.error('Format de données inattendu :', json);
          setLoading(false);
          return;
        }
        console.log(json.bateaux);

        const bateauxMapped: Bateau[] = json.bateaux.map((bateau: any) => ({
          id: bateau.id,
          header: bateau.nom ?? 'Nom inconnu',
          slug: bateau.slug ?? 0,
          modele: bateau.modele ?? 'Modèle inconnu',
          type: bateau.typeBateau ?? 'Modèle inconnu',
          port: bateau.portdefault ?? 'Port inconnu',
          target: bateau.prix ?? '0',
          detail: bateau.details ?? [],
          description: bateau.description ?? '',
          datesIndisponibles: bateau.datesIndisponibles ?? [],
          proprietaireId: bateau.proprietaireId ?? 0,
          medias: bateau.medias ?? [],
          nomproprietaire: bateau.proprietaire?.nom ?? '',
          prenomproprietaire: bateau.proprietaire?.prenom ?? '',
          profilproprietaire: bateau.proprietaire?.photoProfil ?? '',
          capacite: bateau.details?.capaciteMax ?? 0,
        }));

        // Mapping destination → ports
        const destinationsMapping: Record<string, string[]> = {
          France: [
            'Marseille',
            'Le Havre',
            'Dunkerque',
            'Nantes - Saint-Nazaire',
            'Bordeaux',
            'Toulon',
            'Nice',
            'La Rochelle',
            'Brest',
            'Calais',
          ],
          Espagne: [
            'Barcelone',
            'Valence',
            'Algeciras',
            'Bilbao',
            'Las Palmas (Canaries)',
            'Santa Cruz de Tenerife (Canaries)',
            'Malaga',
            'Santander',
            'Vigo',
            'Palma de Majorque',
          ],
          Italie: [
            'Gênes (Genova)',
            'Trieste',
            'Naples (Napoli)',
            'Livourne (Livorno)',
            'Civitavecchia (Rome)',
            'La Spezia',
            'Palerme (Palermo)',
            'Venise (Venezia)',
            'Bari',
            'Messine (Messina)',
          ],
          Portugal: [
            'Lisbonne (Lisboa)',
            'Porto de Leixões',
            'Sines',
            'Funchal (Madère)',
            'Ponta Delgada (Açores)',
            'Setúbal',
            'Aveiro',
            'Faro',
            'Viana do Castelo',
            'Portimão',
          ],
          Grèce: [
            'Le Pirée (Athènes)',
            'Thessalonique (Thessaloniki)',
            'Héraklion (Crète)',
            'Patras',
            'Rhodes',
            'Corfou (Kerkyra)',
            'Volos',
            'Mykonos',
            'Santorin (Santorini)',
            'Kavala',
          ],
          Croatie: [
            'Rijeka',
            'Split',
            'Dubrovnik',
            'Zadar',
            'Ploče',
            'Šibenik',
            'Rovinj',
            'Pula',
            'Umag',
            'Makarska',
          ],
        };

        const allowedPorts = destination ? destinationsMapping[destination] || [] : [];

        const filteredBateaux = destination
          ? bateauxMapped.filter((bateau) => allowedPorts.includes(bateau.port))
          : bateauxMapped;

        setData(filteredBateaux);
        setAllBateaux(filteredBateaux);
        setLoading(false);
        setTotalPages(Math.ceil(bateauxMapped.length / itemsPerPage));
      })
      .catch((err) => {
        console.error('Erreur lors du rafraîchissement :', err);
        setLoading(false);
      });
  }, [destination]);

  const pagedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // filtrage dynamique
  const appliquerFiltres = () => {
    let results = allBateaux;

    if (destinationform) {
      results = results.filter((b) => b.port.toLowerCase().includes(destinationform.toLowerCase()));
    }

    if (typeBateau) {
      results = results.filter((b) => b.type.toLowerCase().includes(typeBateau.toLowerCase()));
    }

    if (passagers !== undefined) {
      results = results.filter((b) => (b.capacite ?? 0) >= passagers);
    }

    setData(results);
  };

  // Quand les bateaux sont chargés ou que les filtres changent
  useEffect(() => {
    appliquerFiltres();
  }, [allBateaux, destinationform, typeBateau, passagers]);

  const effacerFiltres = () => {
    setDestinationform('');
    setTypeBateau('');
    setPassagers(undefined);
    setData(allBateaux); // reset avec la liste complète
  };

  if (loading) return <p>Chargement…</p>;

  console.log(data);

  return (
    <>
      <section className="">
        <div className="relative">
          <div className="contentvideohome">
            <video
              muted
              autoPlay
              loop
              playsInline
              controls={false}
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              src="https://res.cloudinary.com/dv19l9qkz/video/upload/v1757610566/18682386-uhd_3840_2160_25fps_wni2mx.mp4"
            />
          </div>
          <div className="contenttext">
            <div className="flex flex-row space-x-2">
              <div className="text-white">
                <BoxReveal boxColor={'#5046e6'} duration={0.5} onClick={appliquerFiltres}>
                  <h1 className="text-6xl font-bold w-[60rem]">
                    <FlipWords words={words} className="text-white" />
                    nos bateaux disponibles à la location
                  </h1>
                </BoxReveal>

                <BoxReveal boxColor={'#5046e6'} duration={0.5}>
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
            'url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751014902/5615262_z9dztf.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200rem',
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
            <div className={`mb-8 ${params.get('destination') ? 'hidden' : ''}`}>
              <div className="grid grid-cols-5 gap-4 place-items-center">
                <ButtonHeroui
                  isIconOnly
                  aria-label="Take a photo"
                  color="warning"
                  variant="faded"
                  onClick={effacerFiltres}
                >
                  <IoReloadOutline />
                </ButtonHeroui>
                <div className="w-[13rem]">
                  <Selectheroui
                    className="max-w-xs"
                    placeholder="Veuillez sélectionné un port"
                    variant="bordered"
                    value={destinationform}
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys)[0] as string; // récupère la première clé
                      setDestinationform(selected);
                    }}
                  >
                    <SelectSectionheroui showDivider title="France">
                      <SelectItemheroui key="Marseille">Marseille</SelectItemheroui>
                      <SelectItemheroui key="Le Havre">Le Havre</SelectItemheroui>
                      <SelectItemheroui key="Dunkerque">Dunkerque</SelectItemheroui>
                      <SelectItemheroui key="Nantes - Saint-Nazaire">
                        Nantes - Saint-Nazaire
                      </SelectItemheroui>
                      <SelectItemheroui key="Bordeaux">Bordeaux</SelectItemheroui>
                      <SelectItemheroui key="Toulon">Toulon</SelectItemheroui>
                      <SelectItemheroui key="Nice">Nice</SelectItemheroui>
                      <SelectItemheroui key="La Rochelle">La Rochelle</SelectItemheroui>
                      <SelectItemheroui key="Brest">Brest</SelectItemheroui>
                      <SelectItemheroui key="Calais">Calais</SelectItemheroui>
                    </SelectSectionheroui>
                    <SelectSectionheroui showDivider title="Espagne">
                      <SelectItemheroui key="Barcelone">Barcelone</SelectItemheroui>
                      <SelectItemheroui key="Valence">Valence</SelectItemheroui>
                      <SelectItemheroui key="Algeciras">Algeciras</SelectItemheroui>
                      <SelectItemheroui key="Bilbao">Bilbao</SelectItemheroui>
                      <SelectItemheroui key="Las Palmas (Canaries)">
                        Las Palmas (Canaries)
                      </SelectItemheroui>
                      <SelectItemheroui key="Santa Cruz de Tenerife (Canaries)">
                        Santa Cruz de Tenerife (Canaries)
                      </SelectItemheroui>
                      <SelectItemheroui key="Malaga">Malaga</SelectItemheroui>
                      <SelectItemheroui key="Santander">Santander</SelectItemheroui>
                      <SelectItemheroui key="Vigo">Vigo</SelectItemheroui>
                      <SelectItemheroui key="Palma de Majorque">Palma de Majorque</SelectItemheroui>
                    </SelectSectionheroui>
                    <SelectSectionheroui showDivider title="Italie">
                      <SelectItemheroui key="Gênes (Genova)">Gênes (Genova)</SelectItemheroui>
                      <SelectItemheroui key="Trieste">Trieste</SelectItemheroui>
                      <SelectItemheroui key="Naples (Napoli)">Naples (Napoli)</SelectItemheroui>
                      <SelectItemheroui key="Livourne (Livorno)">
                        Livourne (Livorno)
                      </SelectItemheroui>
                      <SelectItemheroui key="Civitavecchia (Rome)">
                        Civitavecchia (Rome)
                      </SelectItemheroui>
                      <SelectItemheroui key="La Spezia">La Spezia</SelectItemheroui>
                      <SelectItemheroui key="Palerme (Palermo)">Palerme (Palermo)</SelectItemheroui>
                      <SelectItemheroui key="Venise (Venezia)">Venise (Venezia)</SelectItemheroui>
                      <SelectItemheroui key="Bari">Bari</SelectItemheroui>
                      <SelectItemheroui key="Messine (Messina)">Messine (Messina)</SelectItemheroui>
                    </SelectSectionheroui>
                    <SelectSectionheroui showDivider title="Portugal">
                      <SelectItemheroui key="Lisbonne (Lisboa)">Lisbonne (Lisboa)</SelectItemheroui>
                      <SelectItemheroui key="Porto de Leixões">Porto de Leixões</SelectItemheroui>
                      <SelectItemheroui key="Sines">Sines</SelectItemheroui>
                      <SelectItemheroui key="Funchal (Madère)">Funchal (Madère)</SelectItemheroui>
                      <SelectItemheroui key="Ponta Delgada (Açores)">
                        Ponta Delgada (Açores)
                      </SelectItemheroui>
                      <SelectItemheroui key="Setúbal">Setúbal</SelectItemheroui>
                      <SelectItemheroui key="Aveiro">Aveiro</SelectItemheroui>
                      <SelectItemheroui key="Faro">Faro</SelectItemheroui>
                      <SelectItemheroui key="Viana do Castelo">Viana do Castelo</SelectItemheroui>
                      <SelectItemheroui key="Portimão">Portimão</SelectItemheroui>
                    </SelectSectionheroui>
                    <SelectSectionheroui showDivider title="Grèce">
                      <SelectItemheroui key="Le Pirée (Athènes)">
                        Le Pirée (Athènes)
                      </SelectItemheroui>
                      <SelectItemheroui key="Thessalonique (Thessaloniki)">
                        Thessalonique (Thessaloniki)
                      </SelectItemheroui>
                      <SelectItemheroui key="Héraklion (Crète)">Héraklion (Crète)</SelectItemheroui>
                      <SelectItemheroui key="Patras">Patras</SelectItemheroui>
                      <SelectItemheroui key="Rhodes">Rhodes</SelectItemheroui>
                      <SelectItemheroui key="Corfou (Kerkyra)">Corfou (Kerkyra)</SelectItemheroui>
                      <SelectItemheroui key="Volos">Volos</SelectItemheroui>
                      <SelectItemheroui key="Mykonos">Mykonos</SelectItemheroui>
                      <SelectItemheroui key="Santorin (Santorini)">
                        Santorin (Santorini)
                      </SelectItemheroui>
                      <SelectItemheroui key="Kavala">Kavala</SelectItemheroui>
                    </SelectSectionheroui>
                    <SelectSectionheroui title="Croatie">
                      <SelectItemheroui key="Rijeka">Rijeka</SelectItemheroui>
                      <SelectItemheroui key="Split">Split</SelectItemheroui>
                      <SelectItemheroui key="Dubrovnik">Dubrovnik</SelectItemheroui>
                      <SelectItemheroui key="Zadar">Zadar</SelectItemheroui>
                      <SelectItemheroui key="Ploče">Ploče</SelectItemheroui>
                      <SelectItemheroui key="Šibenik">Šibenik</SelectItemheroui>
                      <SelectItemheroui key="Rovinj">Rovinj</SelectItemheroui>
                      <SelectItemheroui key="Pula">Pula</SelectItemheroui>
                      <SelectItemheroui key="Umag">Umag</SelectItemheroui>
                      <SelectItemheroui key="Makarska">Makarska</SelectItemheroui>
                    </SelectSectionheroui>
                  </Selectheroui>
                </div>
                <div className="w-[13rem]">
                  <Select value={typeBateau} onValueChange={setTypeBateau}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type de bateau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Type de bateau à louer</SelectLabel>
                        <SelectItem value="voilier">Voilier</SelectItem>
                        <SelectItem value="catamaran">Catamaran</SelectItem>
                        <SelectItem value="yacht à voile">Yacht à voile</SelectItem>
                        <SelectItem value="yacht à moteur">Yacht à moteur</SelectItem>
                        <SelectItem value="bateau à moteur">Bateau à moteur</SelectItem>
                        <SelectItem value="semi-rigide">Semi-rigide</SelectItem>
                        <SelectItem value="Goelétte">Goélette</SelectItem>
                        <SelectItem value="trimaran">Trimaran</SelectItem>
                        <SelectItem value="péniche">Péniche</SelectItem>
                        <SelectItem value="jet-ski">Jet-ski</SelectItem>
                        <SelectItem value="houseboat (péniche habitable)">
                          Houseboat (péniche habitable)
                        </SelectItem>
                        <SelectItem value="bateau de pêche">Bateau de pêche</SelectItem>
                        <SelectItem value="vedette rapide">Vedette rapide</SelectItem>
                        <SelectItem value="catamaran à moteur">Catamaran à moteur</SelectItem>
                        <SelectItem value="dinghy / annexe">Dinghy / Annexe</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-[13rem]">
                  <NumberInput
                    placeholder="Nombre de passagers"
                    variant="bordered"
                    color="primary"
                    value={passagers}
                    onChange={(value) => {
                      if (typeof value === 'number') {
                        setPassagers(value);
                      } else {
                        setPassagers(undefined);
                      }
                    }}
                    classNames={{
                      inputWrapper: 'h-8', // réduit la hauteur du wrapper principal
                      input: 'text-sm', // réduit la taille du texte
                    }}
                  />
                </div>
                <div className="w-[13rem]">
                  <RippleButton
                    rippleColor="#ADD8E6"
                    className="py-3.5 text-white bg-black"
                    onClick={appliquerFiltres}
                  >
                    Rechercher
                  </RippleButton>
                </div>
              </div>
            </div>
            <hr className="mb-8 border border-black" />
            <div>
              <div
                className={`grid ${pagedData && pagedData.length > 0 ? 'grid-cols-1 gap-4 md:grid-cols-3 md:gap-4' : 'grid-cols-1 gap-1'} place-items-center`}
              >
                {pagedData && pagedData.length > 0 ? (
                  pagedData.map((bateau) => {
                    const cover = bateau.medias.find((m: any) => m.type === 'COVER');

                    let optionsPayantes: OptionPayante[] = [];
                    if (bateau?.detail?.optionsPayantes) {
                      try {
                        optionsPayantes = JSON.parse(
                          bateau.detail.optionsPayantes
                        ) as OptionPayante[];
                      } catch {
                        optionsPayantes = [];
                      }
                    }

                    const hasSkipper = optionsPayantes.some(
                      (option: OptionPayante) => option.id === 'Skipper'
                    );

                    if (!bateau?.detail?.tarifications) return null;

                    let affichage = '';

                    try {
                      const tarifs = JSON.parse(bateau.detail.tarifications || '[]') as Tarif[];

                      affichage = tarifs
                        .map((tarif: Tarif) => {
                          const montant = parseFloat(tarif.montant);
                          const label = typeToLabel[tarif.type] || '';
                          return `${montant}€ ${label}`;
                        })
                        .join(', ');
                    } catch (error) {
                      console.error(`Erreur parsing tarifications pour ${bateau.header} :`, error);
                    }

                    return (
                      <div key={bateau.id} className="flex flex-col gap-6">
                        <div
                          className="relative flex object-cover justify-start items-end"
                          style={{
                            backgroundImage: `url(${cover?.url || 'https://res.cloudinary.com/dluqkutu8/image/upload/v1754741102/view-boat-water_razzxb.jpg'})`,
                            backgroundPositionX: 'center',
                            backgroundSize: '31rem',
                            height: '20rem',
                            borderRadius: '15px',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          <div className="absolute flex flex-row space-x-3 top-[1rem] right-[2rem]">
                            <Chip color="warning" variant="shadow">
                              {bateau.port}
                            </Chip>
                          </div>
                          <div className="absolute bottom-0 degrade"></div>
                          <div className="flex flex-col text-white mb-6 gap-3 mx-8 z-10 w-full">
                            <div>
                              <div className="text-lg font-semibold">{bateau.header}</div>
                              <div className="mt-1">
                                <div className="pr-[1rem]">
                                  <Description texte={bateau.description} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div
                              className="bg-glacev2 flex flex-wrap gap-3 p-4"
                              style={{ borderRadius: '15px' }}
                            >
                              <Space>
                                <Tooltip title={bateau.type} color="#000">
                                  <Chip color="warning" className="cursor-pointer" variant="shadow">
                                    <div className="flex space-x-2 items-cenyter">
                                      <div>
                                        <FaSailboat />
                                      </div>
                                      <div>
                                        <MonTexte texte={bateau.type} />
                                      </div>
                                    </div>
                                  </Chip>
                                </Tooltip>
                              </Space>
                              <Space>
                                <Tooltip title={hasSkipper ? 'Inclus' : 'Non inclus'} color="#000">
                                  <Chip color="warning" className="cursor-pointer" variant="shadow">
                                    <div className="flex space-x-2 items-center">
                                      <div>
                                        <GiCaptainHatProfile />
                                      </div>
                                      <div>
                                        <MonTexte texte={hasSkipper ? 'Inclus' : 'Non inclus'} />
                                      </div>
                                    </div>
                                  </Chip>
                                </Tooltip>
                              </Space>
                              <Space>
                                <Tooltip title={affichage} color="#000">
                                  <Chip color="warning" className="cursor-pointer" variant="shadow">
                                    <div className="flex space-x-2 items-center">
                                      <div>
                                        <GiTakeMyMoney />
                                      </div>
                                      <div>
                                        <MonTexte texte={affichage} />
                                      </div>
                                    </div>
                                  </Chip>
                                </Tooltip>
                              </Space>
                              <Space>
                                <Tooltip title={bateau.port} color="#000">
                                  <Chip color="warning" className="cursor-pointer" variant="shadow">
                                    <div className="flex space-x-2 items-center">
                                      <div>
                                        <IoMdPin />
                                      </div>
                                      <div>
                                        <MonTexte texte={bateau.port} />
                                      </div>
                                    </div>
                                  </Chip>
                                </Tooltip>
                              </Space>
                              <Space>
                                <Tooltip
                                  title={`${bateau?.detail?.capaciteMax} personnes`}
                                  color="#000"
                                >
                                  <Chip color="warning" className="cursor-pointer" variant="shadow">
                                    <div className="flex space-x-2 items-center">
                                      <div>
                                        <HiUserGroup />
                                      </div>
                                      <div>
                                        <MonTexte
                                          texte={`${bateau?.detail?.capaciteMax} personnes`}
                                        />
                                      </div>
                                    </div>
                                  </Chip>
                                </Tooltip>
                              </Space>
                            </div>
                          </div>
                          <div
                            className="bg-glacev2 flex flex-wrap justify-between gap-3 p-4 items-center"
                            style={{ borderRadius: '15px' }}
                          >
                            <div>
                              <User
                                avatarProps={{
                                  src:
                                    bateau.profilproprietaire &&
                                    bateau.profilproprietaire.trim() !== ''
                                      ? bateau.profilproprietaire
                                      : 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                                }}
                                description="Propriétaire"
                                name={`${bateau.nomproprietaire} ${bateau.prenomproprietaire}`}
                              />
                            </div>
                            <div className="flex flex-row space-x-2 justify-end">
                              <FaStar className="text-amber-400" />
                              <FaStar className="text-amber-400" />
                              <FaStar className="text-amber-400" />
                              <FaStar className="text-amber-400" />
                              <FaStar className="text-white" />
                            </div>
                          </div>
                          <div className="flex justify-center w-full mt-2">
                            <div>
                              <RippleButton
                                onClick={() => router.push(`/boat/${bateau.slug}`)}
                                className="bg-white text-black w-[23rem]"
                              >
                                Réserver
                              </RippleButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Empty description={false} />
                )}
              </div>
              <div className="flex justify-end w-full mt-8">
                {/* <Pagination showControls initialPage={1} total={10} /> */}
                {totalPages > 1 && (
                  <Pagination
                    page={page}
                    onChange={setPage}
                    total={totalPages}
                    showControls
                    initialPage={1}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
