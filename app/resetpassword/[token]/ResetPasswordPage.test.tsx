import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ResetPasswordPage from './page';

import { useParams } from 'next/navigation';

// Mock de next/navigation
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

// Mock de fetch global
global.fetch = jest.fn();

describe('ResetPasswordPage', () => {
  const mockUseParams = useParams as jest.Mock;
  const mockFetch = fetch as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseParams.mockReturnValue({ token: 'test-token' });
  });

  it('renders the reset password form correctly', () => {
    render(<ResetPasswordPage />);
    
    expect(screen.getByText('Nouveau mot de passe')).toBeInTheDocument();

    // 👉 On cible l’input par son rôle et son type
    expect(screen.getByRole('textbox', { name: /Nouveau mot de passe/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Confirmer/i })).toBeInTheDocument();
  });

  it('shows error when token is missing', async () => {
    mockUseParams.mockReturnValue({});
    
    render(<ResetPasswordPage />);
    
    const passwordInput = screen.getByRole('textbox', { name: /Nouveau mot de passe/i });
    const submitButton = screen.getByRole('button', { name: /Confirmer/i });
    
    await userEvent.type(passwordInput, 'newPassword123');
    await userEvent.click(submitButton);
    
    expect(await screen.findByText('Token manquant')).toBeInTheDocument();
  });

  it('updates password state on input change', async () => {
    render(<ResetPasswordPage />);
    
    const passwordInput = screen.getByRole('textbox', { name: /Nouveau mot de passe/i }) as HTMLInputElement;
    
    await userEvent.type(passwordInput, 'newSecurePassword123');
    
    expect(passwordInput.value).toBe('newSecurePassword123');
  });

  it('submits form successfully and shows success message', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Mot de passe réinitialisé avec succès' }),
    });

    delete (window as any).location;
    (window as any).location = { href: '' };

    render(<ResetPasswordPage />);
    
    const passwordInput = screen.getByRole('textbox', { name: /Nouveau mot de passe/i });
    const submitButton = screen.getByRole('button', { name: /Confirmer/i });
    
    await userEvent.type(passwordInput, 'newPassword123');
    await userEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://sailingloc-back.vercel.app/api/auth/reset-password',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: 'test-token',
            newPassword: 'newPassword123'
          }),
        })
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Mot de passe réinitialisé avec succès')).toBeInTheDocument();
    });
    
    expect(window.location.href).toBe('/');
  });

  it('shows error message when API returns error', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Token invalide ou expiré' }),
    });

    render(<ResetPasswordPage />);
    
    const passwordInput = screen.getByRole('textbox', { name: /Nouveau mot de passe/i });
    const submitButton = screen.getByRole('button', { name: /Confirmer/i });
    
    await userEvent.type(passwordInput, 'newPassword123');
    await userEvent.click(submitButton);
    
    expect(await screen.findByText('Token invalide ou expiré')).toBeInTheDocument();
  });

  it('shows network error message when fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<ResetPasswordPage />);
    
    const passwordInput = screen.getByRole('textbox', { name: /Nouveau mot de passe/i });
    const submitButton = screen.getByRole('button', { name: /Confirmer/i });
    
    await userEvent.type(passwordInput, 'newPassword123');
    await userEvent.click(submitButton);
    
    expect(await screen.findByText('Erreur réseau')).toBeInTheDocument();
  });

  it('prevents form submission with empty password', async () => {
    render(<ResetPasswordPage />);
    
    const submitButton = screen.getByRole('button', { name: /Confirmer/i });
    
    await userEvent.click(submitButton);
    
    expect(mockFetch).not.toHaveBeenCalled();
  });
});