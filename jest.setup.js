// jest.setup.js
import '@testing-library/jest-dom';
 
// Mock complet de window.location
const mockWindowLocation = {
  href: 'http://localhost/',
  origin: 'http://localhost',
  protocol: 'http:',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  pathname: '/',
  search: '',
  hash: '',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
};
 
// Avant tous les tests
beforeAll(() => {
  delete window.location;
  window.location = { ...mockWindowLocation };
});
 
// Avant chaque test
beforeEach(() => {
  window.location.href = 'http://localhost/';
  jest.clearAllMocks();
});
 
// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    ...jest.requireActual('framer-motion'),
    motion: {
      div: React.forwardRef((props, ref) => React.createElement('div', { ...props, ref })),
      span: React.forwardRef((props, ref) => React.createElement('span', { ...props, ref })),
      button: React.forwardRef((props, ref) => React.createElement('button', { ...props, ref })),
      section: React.forwardRef((props, ref) => React.createElement('section', { ...props, ref })),
      h1: React.forwardRef((props, ref) => React.createElement('h1', { ...props, ref })),
      h2: React.forwardRef((props, ref) => React.createElement('h2', { ...props, ref })),
      p: React.forwardRef((props, ref) => React.createElement('p', { ...props, ref })),
    },
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});
 
// Mock @heroui/ripple
jest.mock('@heroui/ripple', () => {
  const React = require('react');
  return {
    __esModule: true,
    useRipple: () => ({
      ripples: [],
      onClear: jest.fn(),
      onPointerDown: jest.fn(),
    }),
    Ripple: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});
 
// Mock pour les icônes React
jest.mock('react-icons/fa6', () => ({
  FaLocationDot: () => React.createElement('div', { 'data-testid': 'location-icon' }),
}));
 
jest.mock('react-icons/io', () => ({
  IoIosTime: () => React.createElement('div', { 'data-testid': 'time-icon' }),
}));
 
jest.mock('react-icons/bs', () => ({
  BsSendFill: () => React.createElement('div', { 'data-testid': 'send-icon' }),
  BsTelephoneFill: () => React.createElement('div', { 'data-testid': 'phone-icon' }),
  BsCheckCircleFill: () => React.createElement('div', { 'data-testid': 'check-icon' }),
  BsFillCreditCard2FrontFill: () => React.createElement('div', { 'data-testid': 'creditcard-icon' }),
  BsShieldFill: () => React.createElement('div', { 'data-testid': 'shield-icon' }),
  BsCloudSunFill: () => React.createElement('div', { 'data-testid': 'cloud-icon' }),
}));
 
jest.mock('react-icons/tb', () => ({
  TbMailFilled: () => React.createElement('div', { 'data-testid': 'mail-icon' }),
}));
 
jest.mock('react-icons/pi', () => ({
  PiSunDimFill: () => React.createElement('div', { 'data-testid': 'sun-icon' }),
}));
 
jest.mock('react-icons/bi', () => ({
  BiSolidBookmark: () => React.createElement('div', { 'data-testid': 'bookmark-icon' }),
}));
 
jest.mock('react-icons/fa', () => ({
  FaStar: () => React.createElement('div', { 'data-testid': 'star-icon' }),
  FaQuoteLeft: () => React.createElement('div', { 'data-testid': 'quote-icon' }),
  FaCode: () => React.createElement('div', { 'data-testid': 'code-icon' }),
}));
 
jest.mock('react-icons/gr', () => ({
  GrNext: () => React.createElement('div', { 'data-testid': 'next-icon' }),
  GrPrevious: () => React.createElement('div', { 'data-testid': 'previous-icon' }),
}));
 
// Mock pour antd
jest.mock('antd', () => ({
  Badge: ({ children, ...props }) => (
    React.createElement('span', { ...props, 'data-testid': 'badge' }, children)
  ),
  Space: ({ children, ...props }) => (
    React.createElement('div', { ...props, 'data-testid': 'space' }, children)
  ),
}));
 
// Mock pour react-hot-toast
jest.mock('react-hot-toast', () => ({
  Toaster: () => React.createElement('div', { 'data-testid': 'toaster' }),
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    loading: jest.fn(),
    dismiss: jest.fn(),
  },
}));
 
// Mock pour emailjs-com
jest.mock('emailjs-com', () => ({
  send: jest.fn(() => Promise.resolve({ status: 200, text: 'OK' })),
  init: jest.fn(),
}));
 
// Mock pour next/navigation
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));
 
// Mock pour next/link
jest.mock('next/link', () => {
  const React = require('react');
  return ({ children, href, ...props }) => {
    return React.createElement('a', { href, ...props }, children);
  };
});
 
// Mock pour les fichiers CSS et assets
// Mock pour les fichiers CSS et assets - CORRECTION
// jest.mock('\\.(css|sass|scss)$', () => {
//   return {
//     __esModule: true,
//     default: {},
//   };
// });
 
// jest.mock('\\.(jpg|jpeg|png|gif|svg)$', () => {
//   return {
//     __esModule: true,
//     default: 'test-file-stub',
//   };
// });
 
// Mock pour Swiper
jest.mock('swiper/react', () => {
  const React = require('react');
  return {
    Swiper: ({ children, ...props }) => (
      React.createElement('div', { ...props, 'data-testid': 'swiper' }, children)
    ),
    SwiperSlide: ({ children, ...props }) => (
      React.createElement('div', { ...props, 'data-testid': 'swiper-slide' }, children)
    ),
  };
});
 
jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/free-mode', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));
 
jest.mock('swiper/modules', () => ({
  FreeMode: jest.fn(),
  Pagination: jest.fn(),
  Navigation: jest.fn(),
  Autoplay: jest.fn(),
  EffectFade: jest.fn(),
}));
 
// Mock pour les composants Hero UI
jest.mock('@heroui/date-picker', () => {
  const React = require('react');
  return {
    DatePicker: React.forwardRef((props, ref) =>
      React.createElement('input', { ...props, ref, 'data-testid': 'date-picker' })
    ),
  };
});
 
jest.mock('@heroui/number-input', () => {
  const React = require('react');
  return {
    NumberInput: React.forwardRef((props, ref) =>
      React.createElement('input', { ...props, ref, 'data-testid': 'number-input' })
    ),
  };
});
 
jest.mock('@heroui/input', () => {
  const React = require('react');
  return {
    Input: React.forwardRef(({ label, type, value, onChange, required, ...props }, ref) =>
      React.createElement('input', {
        type,
        value,
        onChange,
        required,
        'aria-label': label,
        role: 'textbox',
        ...props,
        ref,
        'data-testid': 'input-field'
      })
    ),
  };
});
 
jest.mock('@heroui/chip', () => {
  const React = require('react');
  return {
    Chip: ({ children, ...props }) => (
      React.createElement('span', { ...props, 'data-testid': 'chip' }, children)
    ),
  };
});
 
jest.mock('@heroui/form', () => {
  const React = require('react');
  return {
    Form: ({ children, ...props }) => (
      React.createElement('form', { ...props, 'data-testid': 'form' }, children)
    ),
  };
});
 
jest.mock('@heroui/button', () => {
  const React = require('react');
  return {
    Button: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement('button', { ...props, ref, 'data-testid': 'button' }, children)
    ),
    ButtonGroup: ({ children, ...props }) => (
      React.createElement('div', { ...props, 'data-testid': 'button-group' }, children)
    ),
  };
});
 
// Mock pour les composants personnalisés
jest.mock('@/components/ui/flip-words', () => {
  const React = require('react');
  return {
    FlipWords: ({ words, className }) => (
      React.createElement('div', { 'data-testid': 'flip-words', className }, words.join(' '))
    )
  };
});
 
jest.mock('@/components/magicui/box-reveal', () => {
  const React = require('react');
  return {
    BoxReveal: ({ children, boxColor, duration }) => (
      React.createElement('div', {
        'data-testid': 'box-reveal',
        style: { '--box-color': boxColor, '--duration': duration }
      }, children)
    )
  };
});
 
jest.mock('@/components/magicui/ripple-button', () => {
  const React = require('react');
  return {
    RippleButton: ({ children, ...props }) => (
      React.createElement('button', { ...props, 'data-testid': 'ripple-button' }, children)
    )
  };
});
 
// Mock pour fetch global
global.fetch = jest.fn();
 
// Mock pour alert global
global.alert = jest.fn();
 
// Mock pour les APIs navigateurs manquantes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
 
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});
 
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});
 
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});
 