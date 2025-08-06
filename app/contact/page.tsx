'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';
import { BsSendFill } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const words = ['aventure', 'voyage', 'périple', 'épopée', 'exploration'];

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    nom: false,
    email: false,
    objet: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nom: formData.nom.trim() === '',
      email: formData.email.trim() === '',
      objet: formData.objet.trim() === '',
      message: formData.message.trim() === '',
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((val) => val === true);

    if (hasError) {
      toast.error('Veuillez remplir tous les champs obligatoires.');

      return;
    }

    const SERVICE_ID = 'service_29gmwal';
    const TEMPLATE_ID = 'template_rq3pwru';
    const PUBLIC_KEY = '7EUjUve2HG1kZcB1t';

    const templateParams = {
      from_name: formData.nom,
      from_email: formData.email,
      subject: formData.objet,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Votre message a bien été envoyé !');
        setFormData({ nom: '', email: '', objet: '', message: '' });
      })
      .catch((error) => {
        // console.error('Erreur lors de l'envoi :', error);
        toast.error('Une erreur s&apos;est produite. Veuillez réessayer.');
      });
  };

  return (
    <section
      className="bg-cover bg-center w-screen min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dluqkutu8/image/upload/v1751037337/4931029_zmkvbr.jpg")',
      }}
    >
      <div className=" mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-6 p-6 ">
        <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            Formulaire de contact
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="nom">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="nom"
                name="nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
              />
              {errors.nom && <p className="text-red-500 text-sm mt-1">Champ requis.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Adresse e-mail <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Champ requis.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="objet">
                Objet <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="objet"
                name="objet"
                type="text"
                value={formData.objet}
                onChange={handleChange}
              />
              {errors.objet && <p className="text-red-500 text-sm mt-1">Champ requis.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">Champ requis.</p>}
            </div>

            <button
              className="mx-auto flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 transition"
              type="submit"
            >
              <BsSendFill />
              <span>Envoyer le message</span>
            </button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="col-span-1 md:col-span-2 bg-glass p-6 rounded-xl shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Informations de contact
            </h2>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              <InfoCard
                icon={<BsTelephoneFill className="text-4xl" />}
                text={
                  <a className="hover:text-blue-500" href="tel:+33123456789">
                    +33 1 23 45 67 89
                  </a>
                }
              />
              <InfoCard
                icon={<TbMailFilled className="text-4xl" />}
                text={
                  <a className="hover:text-blue-500" href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                }
              />
              <InfoCard
                icon={<FaLocationDot className="text-4xl" />}
                text={
                  <a
                    className="hover:text-blue-500"
                    href="https://www.google.com/maps"
                    rel="noreferrer"
                    target="_blank"
                  >
                    12 Rue des Navigateurs,
                    <br />
                    75000 Paris, France
                  </a>
                }
              />
              <InfoCard icon={<IoIosTime className="text-4xl" />} text="Lun - Ven, 9h à 18h" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow border border-white mt-6">
            <iframe
              allowFullScreen
              className="border-none"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337477058263!2d2.3522217156742816!3d48.85661407928786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdfba7dfb1b%3A0xb60ff7f3732f7e3!2sParis!5e0!3m2!1sfr!2sfr!4v1616589273186!5m2!1sfr!2sfr"
              title="Carte interactive de l'agence X"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="bg-glass border border-gray-200 rounded-xl shadow-md w-full aspect-square flex flex-col items-center justify-center p-4 text-center space-y-2">
      <div className="text-4xl text-black">{icon}</div>
      <p className="text-[13px] font-semibold text-gray-800 leading-tight">{text}</p>
    </div>
  );
}
