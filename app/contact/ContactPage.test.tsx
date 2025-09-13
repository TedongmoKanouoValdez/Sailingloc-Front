import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "./page"; // ajuste le chemin
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

// --- Mocks --- //
jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

jest.mock("emailjs-com", () => ({
  send: jest.fn(),
}));

// 👇 Cast de emailjs.send pour TS
const mockedEmailjsSend = emailjs.send as jest.Mock;

describe("ContactPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("rendre le formulaire de contact avec tous les champs", () => {
    render(<ContactPage />);

    expect(screen.getByText("Formulaire de contact")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nom \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Adresse e-mail \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Objet \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message \*/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Envoyer le message/i })
    ).toBeInTheDocument();
  });

  test("afficher les erreurs de validation quand les champs sont vides", async () => {
    render(<ContactPage />);
    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", { name: /Envoyer le message/i })
    );

    expect(screen.getAllByText("Champ requis.")).toHaveLength(4);
    expect(toast.error).toHaveBeenCalledWith(
      "Veuillez remplir tous les champs obligatoires."
    );
  });

  test("mettre à jour les valeurs des champs quand l'utilisateur tape", async () => {
    render(<ContactPage />);
    const user = userEvent.setup();

    const nomInput = screen.getByLabelText(/Nom \*/i);
    const emailInput = screen.getByLabelText(/Adresse e-mail \*/i);
    const objetInput = screen.getByLabelText(/Objet \*/i);
    const messageInput = screen.getByLabelText(/Message \*/i);

    await user.type(nomInput, "Jean Dupont");
    await user.type(emailInput, "jean.dupont@example.com");
    await user.type(objetInput, "Demande d information");
    await user.type(messageInput, "Ceci est un message de test");

    expect(nomInput).toHaveValue("Jean Dupont");
    expect(emailInput).toHaveValue("jean.dupont@example.com");
    expect(objetInput).toHaveValue("Demande d information");
    expect(messageInput).toHaveValue("Ceci est un message de test");
  });

  test("envoyer le formulaire avec succès", async () => {
    // ✅ Mock succès
    mockedEmailjsSend.mockResolvedValueOnce({ status: 200, text: "OK" });

    render(<ContactPage />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Nom \*/i), "Jean Dupont");
    await user.type(
      screen.getByLabelText(/Adresse e-mail \*/i),
      "jean.dupont@example.com"
    );
    await user.type(screen.getByLabelText(/Objet \*/i), "Demande d information");
    await user.type(
      screen.getByLabelText(/Message \*/i),
      "Ceci est un message de test"
    );

    await user.click(
      screen.getByRole("button", { name: /Envoyer le message/i })
    );

    await waitFor(() => {
      expect(mockedEmailjsSend).toHaveBeenCalledWith(
        "service_29gmwal",
        "template_rq3pwru",
        {
          from_name: "Jean Dupont",
          from_email: "jean.dupont@example.com",
          subject: "Demande d information",
          message: "Ceci est un message de test",
        },
        "7EUjUve2HG1kZcB1t"
      );
    });

    expect(toast.success).toHaveBeenCalledWith(
      "Votre message a bien été envoyé !"
    );

    // Vérifie la réinitialisation
    expect(screen.getByLabelText(/Nom \*/i)).toHaveValue("");
    expect(screen.getByLabelText(/Adresse e-mail \*/i)).toHaveValue("");
    expect(screen.getByLabelText(/Objet \*/i)).toHaveValue("");
    expect(screen.getByLabelText(/Message \*/i)).toHaveValue("");
  });

  test("gérer les erreurs d'envoi d'email", async () => {
    // ❌ Mock échec
    mockedEmailjsSend.mockRejectedValueOnce(new Error("Erreur d'envoi"));

    render(<ContactPage />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Nom \*/i), "Jean Dupont");
    await user.type(
      screen.getByLabelText(/Adresse e-mail \*/i),
      "jean.dupont@example.com"
    );
    await user.type(screen.getByLabelText(/Objet \*/i), "Demande d information");
    await user.type(
      screen.getByLabelText(/Message \*/i),
      "Ceci est un message de test"
    );

    await user.click(
      screen.getByRole("button", { name: /Envoyer le message/i })
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "Une erreur s'est produite. Veuillez réessayer."
      );
    });
  });
});
