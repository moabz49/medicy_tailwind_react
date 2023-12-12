import React from 'react';

interface ContactCardProps {
  head: string;
  info: string;
  extra: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ head, info, extra, icon:Icon }) => {
  return (
    <div className="bg-white shadow-md px-4 py-8 rounded-md flex space-x-4 border-t-[0.5px] items-stretch">
      <div className="text-teal-500 text-[40px]">{Icon}</div>
      <div>
        <h3 className="text-teal-900 text-xl font-bold">{head}</h3>
        <p className="text-neutral-800 font-light">{info}</p>
        {extra && <p className="text-neutral-800 font-light">{extra}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
