'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Alert } from '@heroui/alert';
import { Checkbox } from '@heroui/checkbox';
import { Button as ButtonHeroui } from '@heroui/button';
import { Link } from '@heroui/link';
import { IoIosLink } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { Chip } from '@heroui/chip';
import dayjs from 'dayjs';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Input } from '@/components/ui/input';
import VeiwsGalerieBoatDashbordSectionOne from '@/components/pages/veiwsgalerieboatdashbordsectionone';
import { CalendarDashboardBoat } from '@/components/pages/calendardashboardcreateboat';

export default function GestionDesBateauxCreerPage() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const [selected, setSelected] = useState<string[]>([]);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [selectedPolicy, setSelectedPolicy] = useState<string>('');
  const [customDescription, setCustomDescription] = useState<string>('');
  const [noCertificat, setNoCertificat] = useState(false);
  const [unavailableDates, setUnavailableDates] = useState<Dayjs[]>([]);

  const [bateau, setBateau] = useState<any>(null);
  const params = useParams();
  const slug = params?.slug as string;

  const handleSelect = (value: string) => {
    if (value === 'Aucun') {
      setSelected(['Aucun']);
      setInputs({});

      return;
    }

    if (selected.includes('Aucun')) {
      setSelected([value]);
    } else if (!selected.includes(value)) {
      setSelected([...selected, value]);
    }
  };

  const handleRemove = (value: string) => {
    setSelected((prev) => prev.filter((v) => v !== value));
    setInputs((prev) => {
      const newInputs = { ...prev };

      delete newInputs[value];

      return newInputs;
    });
  };

  useEffect(() => {
    const fetchBateau = async () => {
      try {
        const res = await fetch(`https://sailingloc-back.vercel.app/api/bateaux/slug/${slug}`);
        const data = await res.json();

        setBateau(data.bateau);
      } catch (err) {
        console.error('Erreur chargement bateau :', err);
      }
    };

    if (slug) fetchBateau();
  }, [slug]);

  useEffect(() => {
    if (bateau?.datesIndisponibles) {
      try {
        const parsed = JSON.parse(bateau.datesIndisponibles);
        const converted = Array.isArray(parsed) ? parsed.map((date: string) => dayjs(date)) : [];

        setUnavailableDates(converted);
      } catch (e) {
        console.error('Erreur parsing datesIndisponibles :', e);
        setUnavailableDates([]);
      }
    } else {
      setUnavailableDates([]);
    }
  }, [bateau?.datesIndisponibles]);

  console.log(bateau);

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="text-lg font-bold mb-4">
                    Bateau - <span>{bateau?.nom || ''}</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Informations générales</div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Nom du bateau</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.nom || ''}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Type de bateau à louer</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.typeBateau || ''}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Modèle / marque</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.modele || ''}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Année de construction</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.anneeConstruction || ''}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Longueur (en mètres)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.longueur || ''}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Largeur (en mètres)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.largeur || ''}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Tirant d'eau (en mètres)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.tirantEau || ''}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Capacité maximale (nombre de personnes)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.capaciteMax || ''}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Nombre de cabines</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.nombreCabines || ''}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Nombre de couchages</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.nombreCouchages || ''}
                        </Chip>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Description & équipement</div>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Description détaillée</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.description || ''}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 mb-4">
                      <div className="grid gap-3">
                        <span>Équipements inclus</span>
                        <Chip color="warning" variant="dot">
                          {(() => {
                            const raw = bateau?.details?.equipements;
                            let list: string[] = [];

                            if (Array.isArray(raw)) {
                              list = raw;
                            } else if (typeof raw === 'string') {
                              try {
                                const parsed = JSON.parse(raw);

                                if (Array.isArray(parsed)) list = parsed;
                              } catch (e) {
                                list = [];
                              }
                            }

                            return list.join(', ');
                          })()}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 mb-4">
                      <div className="grid gap-3">
                        <span>Options payantes ou en supplément</span>
                        <Chip color="warning" variant="dot">
                          {(() => {
                            const raw = bateau?.details?.optionsPayantes;
                            let list: { label: string; detail?: string }[] = [];

                            if (typeof raw === 'string') {
                              try {
                                const parsed = JSON.parse(raw);

                                if (Array.isArray(parsed)) list = parsed;
                              } catch (e) {
                                list = [];
                              }
                            }

                            return list
                              .map((item) => `${item.label} (${item.detail} €)`)
                              .join(', ');
                          })()}
                        </Chip>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Ports & zones de navigation</div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Port d'attache (ville, marina)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.portdefault || 'Aucun port d&apos;attache défini'}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Zones de navigation autorisées ou recommandées</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.zonesNavigation || 'Non définie'}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Port de départ (optionnel)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.portdarriver || 'Non défini'}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <span>Port d'arrivé (optionnel)</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.portdedepart || 'Non défini'}
                        </Chip>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Conditions de location</div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Tarif journalier, hebdomadaire, etc.</span>
                        <div className="grid grid-cols-2 gap-2">
                          <Chip color="warning" variant="dot">
                            {(() => {
                              const raw = bateau?.details?.tarifications;
                              let list: { label: string; detail?: string }[] = [];

                              if (typeof raw === 'string') {
                                try {
                                  const parsed = JSON.parse(raw);

                                  if (Array.isArray(parsed)) list = parsed;
                                } catch (e) {
                                  list = [];
                                }
                              }

                              return list
                                .map((item) => `${item.type} (${item.montant} €)`)
                                .join(', ');
                            })()}
                          </Chip>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <span>Dépôt de garantie</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.Depotgarantie || 'Non défini'}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="grid gap-3">
                        <span>Durée minimale / maximale de location</span>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.DureeLocation || 'Non défini'}
                        </Chip>
                      </div>
                      <div className="grid gap-3">
                        <div className="grid gap-3">
                          <span>Politique d'annulation</span>
                        </div>
                        <Chip color="warning" variant="dot">
                          {bateau?.details?.politiqueAnnulation || 'Non défini'}
                        </Chip>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <Checkbox
                        isDisabled
                        defaultChecked={bateau?.details?.locationSansPermis || false}
                      >
                        Le bateau peut être loué sans certificat / permis
                      </Checkbox>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Photos & médias</div>
                    <div>
                      <VeiwsGalerieBoatDashbordSectionOne images={bateau?.medias || []} />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Indisponibilités</div>
                    <div className="flex items-center justify-center w-full mb-4">
                      <div className="flex flex-col w-full">
                        <div className="w-full flex items-center my-3">
                          <Alert
                            color="warning"
                            title="Sélectionnez les jours où votre bateau ne sera pas disponible à la location. Cliquez sur un jour pour l'ajouter comme indisponible; cliquez à nouveau pour l'enlever. Les dates sélectionnées apparaîtront ci-dessous."
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <CalendarDashboardBoat
                        editable={false}
                        setUnavailableDates={setUnavailableDates}
                        unavailableDates={unavailableDates}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Informations administratives</div>
                    <div className="grid gap-3 mb-4">
                      <span>Attestation d'assurance (PDF ou image)</span>
                      <Link
                        isExternal
                        showAnchorIcon
                        anchorIcon={<IoIosLink />}
                        href="https://github.com/heroui-inc/heroui"
                        underline="always"
                      >
                        Informations administratives.pdf
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-3 mb-4">
                        <span>Numéro de police d'assurance</span>
                        <Input
                          disabled
                          id="numero-police"
                          placeholder="Ex : 12345678-AB"
                          type="text"
                        />
                      </div>

                      <div className="grid gap-3 mb-4">
                        <span>Attestation d'assurance (PDF ou image)</span>
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<IoIosLink />}
                          href="https://github.com/heroui-inc/heroui"
                          underline="always"
                        >
                          Attestation d'assurance.pdf
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="grid gap-3 mb-4">
                        <span>Certificat de navigation (si applicable)</span>
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<IoIosLink />}
                          href="https://github.com/heroui-inc/heroui"
                          underline="always"
                        >
                          Certificat de navigation.pdf
                        </Link>
                        <div className="flex items-center mt-2">
                          <Checkbox
                            checked={noCertificat}
                            onChange={(e) => setNoCertificat(e.target.checked)}
                          >
                            Je ne possède pas de certificat
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-4">Contact propriétaire</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-3 mb-4">
                        <span>Nom du propriétaire</span>
                        <Input
                          disabled
                          required
                          id="nom-proprietaire"
                          placeholder="Ex : Jean Dupont"
                          type="text"
                        />
                      </div>

                      <div className="grid gap-3 mb-4">
                        <span>Téléphone</span>
                        <Input
                          disabled
                          required
                          id="telephone-proprietaire"
                          placeholder="+33 6 12 34 56 78"
                          type="tel"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="grid gap-3 mb-4">
                        <span>Email</span>
                        <Input
                          disabled
                          required
                          id="email-proprietaire"
                          placeholder="exemple@domaine.com"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <ButtonHeroui color="primary" variant="shadow">
                    Enregistrer
                  </ButtonHeroui>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
