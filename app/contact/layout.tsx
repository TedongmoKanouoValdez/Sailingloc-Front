import { ReactNode } from 'react';

export const metadata = {
  title: 'Contact - Pandawan',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  );
}
