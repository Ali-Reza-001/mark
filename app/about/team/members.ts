/* Add, remove or reorder team members here.
   Put each photo in /public/team and reference it as "/team/<file>". */
export type Member = {
  name: string;
  level: string; // e.g. Manager, Sales, Ticketing, Visa Officer, Support
  email: string;
  phone: string;
  photo: string;
};

export const members: Member[] = [
  { name: "Mojtaba Naseri", level: "Managing Director", email: "manager@marktravel.af", phone: "+93 700 000 001", photo: "/team/MojtabaNaseri.jpg" },
  { name: "Roman Naqizada", level: "Sales Manager", email: "sales@marktravel.af", phone: "+93 700 000 002", photo: "/team/RomanNaqizada.jpg" },
  { name: "Haseeb Saeidi", level: "Business Development Manager", email: "bdm@marktravel.af", phone: "+93 700 000 003", photo: "/team/HaseebSaeidi.jpg" },
  { name: "Nejat Ibrahimi", level: "Counter Sales Manager", email: "sales5@marktravel.af", phone: "+93 700 000 004", photo: "/team/NejatIbrahimi.jpg" },
  { name: "Quraish Nezami", level: "Cashier", email: "cashier@marktravel.af", phone: "+93 700 000 005", photo: "/team/QuraishNezami.jpg" },
  { name: "Omid Rahimi", level: "Finance Manager", email: "finance@marktravel.af", phone: "+93 700 000 006", photo: "/team/OmidRahimi.jpg" },
  { name: "Yaser Ahmadi", level: "Travel Consultant", email: "sales4@marktravel.af", phone: "+93 700 000 004", photo: "/team/YaserAhmadi.jpg" },
  { name: "Maisam Azimi", level: "Sales Executive", email: "sales2@marktravel.af", phone: "+93 700 000 004", photo: "/team/MaisamAzimi.jpg" },
];
