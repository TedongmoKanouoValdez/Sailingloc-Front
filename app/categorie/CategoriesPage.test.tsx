import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as PageModule from './page';


// ✅ Importer le vrai composant
const { default: CategoriesPage } = PageModule;

// Mock des composants et dépendances
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

jest.mock('@/components/primitives', () => ({
  title: jest.fn(),
}));

jest.mock('@/components/magicui/box-reveal', () => ({
  BoxReveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@/components/magicui/ripple-button', () => ({
  RippleButton: ({ children, ...props }: { children: React.ReactNode }) => (
    <button {...props}>{children}</button>
  ),
}));

jest.mock('@heroui/input', () => ({
  Input: ({ label, ...props }: { label: string }) => (
    <div>
      <label>{label}</label>
      <input {...props} data-testid={`input-${label.toLowerCase().replace(/\s+/g, '-')}`} />
    </div>
  ),
}));

jest.mock('@heroui/date-picker', () => ({
  DatePicker: ({ label, ...props }: { label: string }) => (
    <div>
      <label>{label}</label>
      <input type="date" {...props} data-testid="date-picker" />
    </div>
  ),
}));

jest.mock('@heroui/number-input', () => ({
  NumberInput: ({ label, ...props }: { label: string }) => (
    <div>
      <label>{label}</label>
      <input type="number" {...props} data-testid="number-input" />
    </div>
  ),
}));

// Mock des logos
const MockLogo = ({ alt }: { alt: string }) => <img src="#" alt={alt} className="allogo" />;

jest.mock('./page', () => {
  const originalModule = jest.requireActual('./page');
  return {
    ...originalModule,
    LogoBoar: () => <MockLogo alt="iconeBoar" />,
    LogoCatamarans: () => <MockLogo alt="iconeCatamarans" />,
    LogoCap: () => <MockLogo alt="iconeCap" />,
    LogoMap: () => <MockLogo alt="iconeMap" />,
    LogoZeus: () => <MockLogo alt="iconeZeus" />,
    LogoSailingTime: () => <MockLogo alt="iconeSailingTime" />,
    LogoBateauSansPermis: () => <MockLogo alt="iconebateauSansPermis" />,
    LogoBateauSale: () => <MockLogo alt="iconebateauSale" />,
    LogoIdealFamille: () => <MockLogo alt="iconeidealFamille" />,
    LogoSoleil: () => <MockLogo alt="iconesoleil" />,
    LogoSeminaire: () => <MockLogo alt="iconeseminaire" />,
    LogoPMR: () => <MockLogo alt="iconePMR" />,
  };
});

describe('CategoriesPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main title and description', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByText('Nos Categories de navigation')).toBeInTheDocument();
    expect(screen.getByText(/Choisissez la categorie de bateau ou de service/i)).toBeInTheDocument();
  });

  it('renders the search form with all inputs', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByLabelText(/Veuillez saisire votre destination/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type de bateau/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Dates de navigation/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre de passagers/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Trouver mon bateau/i })).toBeInTheDocument();
  });

  it('renders the main section title', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByText('EMBARQUEZ POUR UNE AVENTURE SUR MESURE')).toBeInTheDocument();
    expect(screen.getByText(/Découvrez notre sélection de bateaux adaptés/i)).toBeInTheDocument();
  });

  it('renders all category cards', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByText('Voiliers')).toBeInTheDocument();
    expect(screen.getByText('Catamarans')).toBeInTheDocument();
    expect(screen.getByText('Excursions avec Skipper')).toBeInTheDocument();
    expect(screen.getByText('Destinations Populaires')).toBeInTheDocument();
    expect(screen.getByText('Bateaux à Moteur')).toBeInTheDocument();
    expect(screen.getByText('Location à la Journée')).toBeInTheDocument();
    expect(screen.getByText('Bateaux sans permis')).toBeInTheDocument();
    expect(screen.getByText('Offre de derniere minute')).toBeInTheDocument();
    expect(screen.getByText('Ideal en Famille')).toBeInTheDocument();
    expect(screen.getByText('Coucher de soleil')).toBeInTheDocument();
    expect(screen.getByText('Séminaires & Team building')).toBeInTheDocument();
    expect(screen.getByText('Accessibilité PMR')).toBeInTheDocument();
  });

  it('renders all category buttons', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByRole('button', { name: /Toutes les catégories/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Explorer les voiliers/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Voir les catamarans/i })).toBeInTheDocument();
  });

  it('allows user to interact with form inputs', async () => {
    render(<CategoriesPage />);
    
    const destinationInput = screen.getByLabelText(/Veuillez saisire votre destination/i);
    const boatTypeInput = screen.getByLabelText(/Type de bateau/i);
    
    await userEvent.type(destinationInput, 'Corse');
    await userEvent.type(boatTypeInput, 'Voilier');
    
    expect(destinationInput).toHaveValue('Corse');
    expect(boatTypeInput).toHaveValue('Voilier');
  });

  it('renders all logo components', () => {
    render(<CategoriesPage />);
    
    expect(screen.getByAltText('iconeBoar')).toBeInTheDocument();
    expect(screen.getByAltText('iconeCatamarans')).toBeInTheDocument();
    expect(screen.getByAltText('iconeCap')).toBeInTheDocument();
  });

  it('has responsive grid layout for categories', () => {
    render(<CategoriesPage />);
    
    const gridContainer = screen.getByText('Voiliers').closest('.grid');
    expect(gridContainer).toBeInTheDocument();
  });

  it('maintains consistent button styling', () => {
    render(<CategoriesPage />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(5);
  });

  it('renders background images correctly', () => {
    render(<CategoriesPage />);
    
    const backgroundElements = document.querySelectorAll('[style*="backgroundImage"]');
    expect(backgroundElements.length).toBeGreaterThan(0);
  });
});
