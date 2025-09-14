import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button as ButtonHeroui } from '@heroui/button';
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
import { NumberInput } from '@heroui/number-input';
import { RippleButton } from '@/components/magicui/ripple-button';
import { IoReloadOutline } from 'react-icons/io5';

export default function FormulaireRecherche() {
  const router = useRouter();
  const [destinationform, setDestinationform] = useState('');
  const [typeBateau, setTypeBateau] = useState('');
  const [passagers, setPassagers] = useState<number | undefined>(undefined);

  const handleSubmit = () => {
    const query = new URLSearchParams({
      destinationform,
      typeBateau,
      passagers: passagers?.toString() ?? '',
    }).toString();

    router.push(`/nosbateaux?${query}`);
  };

  return (
    <div className="bg-glacev2 rounded-md p-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="formhome"
      >
        <div className="grid grid-cols-4 gap-4 place-items-center">
          <div className="w-[13rem]">
            <Selectheroui
              className="max-w-xs"
              placeholder="Veuillez sélectionner un port"
              variant="flat"
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
                <SelectItemheroui key="Livourne (Livorno)">Livourne (Livorno)</SelectItemheroui>
                <SelectItemheroui key="Civitavecchia (Rome)">Civitavecchia (Rome)</SelectItemheroui>
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
                <SelectItemheroui key="Le Pirée (Athènes)">Le Pirée (Athènes)</SelectItemheroui>
                <SelectItemheroui key="Thessalonique (Thessaloniki)">
                  Thessalonique (Thessaloniki)
                </SelectItemheroui>
                <SelectItemheroui key="Héraklion (Crète)">Héraklion (Crète)</SelectItemheroui>
                <SelectItemheroui key="Patras">Patras</SelectItemheroui>
                <SelectItemheroui key="Rhodes">Rhodes</SelectItemheroui>
                <SelectItemheroui key="Corfou (Kerkyra)">Corfou (Kerkyra)</SelectItemheroui>
                <SelectItemheroui key="Volos">Volos</SelectItemheroui>
                <SelectItemheroui key="Mykonos">Mykonos</SelectItemheroui>
                <SelectItemheroui key="Santorin (Santorini)">Santorin (Santorini)</SelectItemheroui>
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
          <div className="w-[13rem] typebateau">
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
              variant="flat"
              classNames={{
                inputWrapper: 'h-4', // réduit la hauteur du wrapper principal
                input: 'text-sm', // réduit la taille du texte
              }}
              value={passagers}
              onChange={(value) => {
                if (typeof value === 'number') {
                  setPassagers(value);
                } else {
                  setPassagers(undefined);
                }
              }}
            />
          </div>
          <div className="w-[13rem]">
            <RippleButton
              rippleColor="#ADD8E6"
              className="py-3.5 text-white bg-black w-[13rem] h-[2.8rem]"
              type="submit"
            >
              Rechercher
            </RippleButton>
          </div>
        </div>
      </form>
    </div>
  );
}
