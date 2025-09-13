'use client';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Button as Buttonheroui } from '@heroui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from '@heroui/user';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chip } from '@heroui/chip';
import { FaUserEdit } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa6';
import { SiAmericanexpress } from 'react-icons/si';
import { FaCcPaypal } from 'react-icons/fa';
import { Alert } from '@heroui/alert';
import { ElementType } from 'react';
import { RippleButton } from '@/components/magicui/ripple-button';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@heroui/drawer';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@heroui/modal';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { Tooltip } from '@heroui/tooltip';
import { Image } from '@heroui/image';
import { Avatar, AvatarGroup, AvatarIcon } from '@heroui/avatar';
import { Link } from '@heroui/link';
import { Divider, Steps } from 'antd';
import { BateauPrefere } from '@/components/pages/bateauprefere';
import { NotificationsUsers } from '@/components/pages/notificationUser';
import { ZonesFavorites } from '@/components/pages/zonesfavorites';
import { FaqUser } from '@/components/pages/faquser';
import ChatUI from '@/components/pages/chatui';
import { Divider as Dividerhenoui } from '@heroui/divider';
import { jwtDecode } from 'jwt-decode';
import { DashboardStats } from '@/components/stats-cards';
import { addToast, ToastProvider } from '@heroui/toast';
import ReservationsTable from '@/components/pages/ReservationsTable';

type Token = {
  userId: number;
  email: string;
  role: string;
  nom: string;
  prenom: string;
  telephone: string | null;
  photoProfil: string | null;
  iat: number;
  exp: number;
};

interface JwtPayload {
  userId: string;
  // ajoute d’autres champs si nécessaires (email, role, etc.)
}

type ToastPlacement =
  | 'top-center'
  | 'top-right'
  | 'top-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-left';

interface Utilisateur {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  photoProfil?: string;
  role?: string;
}

function decodeJWT(token: string): Token | null {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded as Token;
  } catch (e) {
    console.error('Erreur decoding JWT :', e);
    return null;
  }
}

export default function ProfilPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque');
  const [user, setUser] = useState<Utilisateur | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [utilisateurId, setUtilisateurId] = useState<number>(0);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [role, setRole] = useState('');
  const [urlProfileDefault, setUrlProfileDefault] = useState('');
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [decoded, setDecoded] = useState<JwtPayload | null>(null);
  const [preview, setPreview] = useState(
    'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757771997/3d-ship-with-sea-landscape_qutwk2.jpg'
  );
  const [placement, setPlacement] = React.useState<ToastPlacement>('top-center');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0])); // affichage de l'aperçu
    }
  };

  useEffect(() => {
    const sessionData = localStorage.getItem('token');
    if (sessionData) {
      const decodedToken = decodeJWT(sessionData);
      if (decodedToken) {
        setUtilisateurId(Number(decodedToken.userId));
      }
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let token: string | null = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');

        if (!token) {
          setError('Vous devez être connecté');
          setLoading(false);
          return;
        }

        const fetchMe = async (jwt: string) => {
          const res = await fetch('https://sailingloc-back.vercel.app/api/utilisateur/me', {
            headers: { Authorization: `Bearer ${jwt}` },
          });
          return res;
        };

        let res = await fetchMe(token);

        if (res.status === 401 && refreshToken) {
          // accessToken expiré, appeler /refresh
          const refreshRes = await fetch('https://sailingloc-back.vercel.app/api/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
          });

          if (!refreshRes.ok) throw new Error('Votre session a expiré, veuillez vous reconnecter');

          const refreshData = await refreshRes.json();
          token = refreshData.token;
          localStorage.setItem('token', token!);

          // Retenter /me avec le nouveau token
          res = await fetchMe(token!);
        }

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Erreur serveur');
        }

        const data = await res.json();
        setUser(data);
        setDecoded(jwtDecode(token!));

        setNom(data.nom || '');
        setPrenom(data.prenom || '');
        setEmail(data.email || '');
        setRole('CLIENT');
        setTelephone(data.telephone || '');
        setPreview(
          data.photoProfil ||
            'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757771997/3d-ship-with-sea-landscape_qutwk2.jpg'
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    setIsLoading(true);

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('role', role);

    // N’envoie le mot de passe que si l’utilisateur en a saisi un nouveau
    if (motDePasse.trim()) {
      formData.append('motDePasse', motDePasse);
    }
    console.log('motDePasse avant append:', motDePasse);

    // N’envoie la photo que si elle a été modifiée
    if (imageFile) {
      formData.append('photoProfil', imageFile);
    }

    try {
      const res = await fetch(`https://sailingloc-back.vercel.app/api/utilisateur/${decoded?.userId}`, {
        method: 'PUT',
        body: formData, // fetch gère automatiquement le Content-Type ici
      });

      if (!res.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }

      const data = await res.json();
      console.log('Utilisateur mis à jour :', data);
      addToast({
        title: 'Modification réussie !',
        description: 'Utilisateur mis à jour avec succès !',
        color: 'success',
      });
      window.location.href = '/profil';
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (loading) return <p>Chargement...</p>;
  console.log(user);
  if (error)
    return (
      <main>
        <p style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>{error}</p>
      </main>
    );

  const handleBackdropChange = (backdrop: string) => {
    setBackdrop(backdrop);
    onOpen();
  };
  // console.log(decoded.userId);
  return (
    <main>
      <ToastProvider
        placement={placement}
        toastOffset={placement.includes('top') ? 60 : 0}
        toastProps={{
          radius: 'lg',
          color: 'primary',
          variant: 'flat',
          timeout: 9000,
        }}
      />
      <section className="relative">
        <div
          className="absolute top-0"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dv19l9qkz/image/upload/v1757676921/9551504_hfwrim.jpg)',
            height: '56vh',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div className="mx-auto max-w-6xl mt-48 text-white font-bold text-5xl">
            <div>
              <h1>Bienvenue sur votre espace personnel.</h1>
            </div>
          </div>
        </div>
        <div
          className="pb-10 pt-[21rem]"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dluqkutu8/image/upload/v1751362027/4847236_rplbu1.jpg)',
          }}
        >
          <div>
            <Tabs defaultValue="account" className="w-[87rem]">
              <div className="bg-glacev2 flex justify-between w-[77rem] p-4 ml-[9rem] items-center rounded-lg">
                <div>
                  <div>
                    <User
                      avatarProps={{
                        src:
                          user?.photoProfil ||
                          'https://res.cloudinary.com/dv19l9qkz/image/upload/v1757771997/3d-ship-with-sea-landscape_qutwk2.jpg', // photo si dispo sinon avatar par défaut
                      }}
                      name={user ? `${user.prenom} ${user.nom}` : 'Utilisateur'} // Affiche prénom + nom ou "Utilisateur" par défaut
                      className="avatarProfil"
                    />
                  </div>
                </div>

                <TabsList>
                  <TabsTrigger value="account">Présentation & Informations</TabsTrigger>
                  <TabsTrigger value="chat">chat</TabsTrigger>
                  <TabsTrigger value="parametre">Paramètres du compte</TabsTrigger>
                </TabsList>
              </div>
              <div className="ml-[9rem]">
                <TabsContent value="account">
                  <div className="flex flex-col space-y-8 mt-8">
                    <div>
                      <Chip variant="dot" className="border-none contenttitresectionprofile mb-4">
                        <div className="text-lg font-bold">Profil & bateau favori</div>
                      </Chip>
                      <div className="flex flex-row space-x-3">
                        <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[30rem] rounded-lg h-[16rem]">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg text-black font-bold underline underline-offset-8">
                              Présentation de l&apos;utilisateur
                            </h2>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline">
                                  <FaUserEdit /> Modifier mes informations
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <form onSubmit={handleSubmit}>
                                  <DialogHeader>
                                    <DialogTitle>Modifier votre profile</DialogTitle>
                                    <DialogDescription>
                                      Modifiez vos informations personnelles pour garder votre
                                      profil à jour et améliorer votre expérience sur notre
                                      plateforme.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4">
                                    <div className="items-cente grid gap-3">
                                      <label
                                        htmlFor="photoProfil"
                                        style={{
                                          cursor: 'pointer',
                                          width: '120px',
                                          height: '120px',
                                        }}
                                      >
                                        <img
                                          src={
                                            preview ||
                                            'https://res.cloudinary.com/dluqkutu8/image/upload/v1755118569/15558_jdfeoh.jpg'
                                          }
                                          alt="Avatar"
                                          className="w-24 h-24 rounded-full object-cover"
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid #ccc',
                                          }}
                                        />
                                        <input
                                          id="photoProfil"
                                          type="file"
                                          accept="image/*"
                                          style={{ display: 'none' }}
                                          onChange={handleFileChange}
                                        />
                                      </label>
                                    </div>
                                    <div className="grid gap-3">
                                      <Label htmlFor="nom">Nom</Label>
                                      <Input
                                        id="nom"
                                        name="nom"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid gap-3">
                                      <Label htmlFor="prenom">Prénom</Label>
                                      <Input
                                        id="prenom"
                                        name="prenom"
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid gap-3">
                                      <Label htmlFor="Email">E-mail</Label>
                                      <Input
                                        id="Email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                      />
                                    </div>
                                    <div className="grid gap-3">
                                      <Label htmlFor="password">Mot de passe</Label>
                                      <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={motDePasse}
                                        onChange={(e) => setMotDePasse(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                      <Button variant="outline">Annuler</Button>
                                    </DialogClose>
                                    <Button type="submit">
                                      {isLoading ? 'Chargement...' : 'modifier'}
                                    </Button>
                                  </DialogFooter>
                                </form>
                              </DialogContent>
                            </Dialog>
                          </div>

                          <div className="flex flex-col space-y-2">
                            <span>
                              <span className="text-gray-500">Nom complet :</span>{' '}
                              <span>{user ? `${user.nom} ${user.prenom}` : 'Utilisateur'}</span>
                            </span>
                            <span>
                              <span className="text-gray-500">Email :</span>{' '}
                              <span>{user ? `${user.email}` : 'Email'}</span>
                            </span>
                            <span>
                              <span className="text-gray-500">Mot de passe :</span>{' '}
                              <span>*************</span>
                            </span>
                            <span>
                              <span className="text-gray-500">Statut :</span>{' '}
                              <span>{user ? `${user.role}` : 'Role'}</span>
                            </span>
                            <span className="flex justify-end w-full">
                              <Chip color="success" variant="dot">
                                Connecté
                              </Chip>
                            </span>
                          </div>
                        </div>
                        <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[46.4rem] rounded-lg h-[16rem] overflow-y-scroll">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg text-black font-bold underline underline-offset-8">
                              Bateau préféré
                            </h2>
                          </div>
                          <div>
                            <BateauPrefere />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Chip variant="dot" className="border-none contenttitresectionprofile mb-4">
                        <div className="text-lg font-bold">Mes préférences et alertes</div>
                      </Chip>

                      <div className="flex flex-row space-x-3">
                        <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[36rem] rounded-lg h-[21rem] overflow-y-scroll mt-2 contentswitch">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg text-black font-bold underline underline-offset-8">
                              Notifications
                            </h2>
                          </div>
                          <div>
                            <NotificationsUsers />
                          </div>
                        </div>
                        <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[40.4rem] rounded-lg h-[21rem] overflow-y-scroll mt-2">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg text-black font-bold underline underline-offset-8">
                              Zones de navigation favorites
                            </h2>
                          </div>

                          <div className="flex flex-col space-y-2">
                            <ZonesFavorites />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Chip variant="dot" className="border-none contenttitresectionprofile mb-4">
                        <div className="text-lg font-bold">Aide & Paiements enregistrés</div>
                      </Chip>

                      <div className="flex flex-row space-x-3">
                        <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[38.2rem] rounded-lg h-[21rem] overflow-y-scroll mt-2">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg text-black font-bold underline underline-offset-8">
                              FAQ
                            </h2>
                          </div>

                          <div>
                            <FaqUser />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${user?.role === 'PROPRIETAIRE' || user?.role === 'ADMIN' ? '' : 'hidden'}`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg text-black font-bold underline underline-offset-8">
                          Vos statistiques en un coup d œil
                        </h2>
                        <div className="space-x-4">
                          <Buttonheroui
                            color="primary"
                            variant="solid"
                            onClick={() => router.push('/dashboard/gestiondesbateaux')}
                          >
                            Voir tous les bateaux
                          </Buttonheroui>
                          <Buttonheroui
                            color="primary"
                            variant="solid"
                            onClick={() => router.push('/dashboard/reservations')}
                          >
                            Gérer mes réservations
                          </Buttonheroui>
                          <Buttonheroui
                            color="primary"
                            variant="bordered"
                            onClick={() => router.push('/dashboard')}
                          >
                            Plus de détails
                          </Buttonheroui>
                        </div>
                      </div>
                      <DashboardStats
                        proprietaireId={utilisateurId}
                        userId={utilisateurId}
                        role={user?.role as "ADMIN" | "PROPRIETAIRE" | "CLIENT" | undefined}
                      />
                    </div>

                    <div>
                      <Chip variant="dot" className="border-none contenttitresectionprofile mb-4">
                        <div className="text-lg font-bold">Vos réservations</div>
                      </Chip>

                      <div className="bg-glacev2 flex flex-col space-y-4 p-4 w-[76.4rem] rounded-lg mt-2 contentswitch">
                        <div className="flex justify-between items-center">
                          <h2 className="text-lg text-black font-bold underline underline-offset-8">
                            Mes réservations / locations
                          </h2>
                        </div>

                        <div>
                          <div className="w-full">
                            <div className="flex justify-center items-center py-4">
                              <ReservationsTable
                                userId={utilisateurId}
                                token={localStorage.getItem('token') ?? ""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="chat">
                  <ChatUI />
                </TabsContent>
                <TabsContent value="parametre">
                  <div className="h-[20rem] bg-glacev2 p-4 rounded-lg">
                    <div className="space-y-1">
                      <h4 className="text-medium font-medium">Paramètres du compte</h4>
                      <p className="text-small text-default-400">
                        Gérez les options liées à votre compte. Cette section vous permet de
                        désactiver temporairement votre compte si vous ne souhaitez plus l'utiliser
                        pour le moment, ou de le supprimer définitivement si vous ne souhaitez plus
                        bénéficier de nos services. Veuillez noter que la suppression est
                        irréversible.
                      </p>
                    </div>
                    <Dividerhenoui className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-small">
                      <div>
                        <p className="pt-24">
                          En désactivant votre compte, vous ne pourrez plus accéder à votre profil
                          ni effectuer de réservations. Vous pourrez réactiver votre compte
                          ultérieurement en vous reconnectant.{' '}
                        </p>
                        <RippleButton className="mt-4 bg-gray-700 text-white font-medium">
                          Désactiver mon compte
                        </RippleButton>
                      </div>
                      <Dividerhenoui orientation="vertical" />
                      <div>
                        <p className="pt-24">
                          Attention: cette action est irréversible. Toutes vos données, réservations
                          et préférences seront définitivement supprimées.
                        </p>
                        <RippleButton className="mt-4 bg-red-700 text-white font-medium">
                          Supprimer mon compte définitivement
                        </RippleButton>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
}
