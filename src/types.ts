export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  iconName: string;
  imageUrl: string;
  features: string[];
  durationEstimate: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  vehicle: string;
  date: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface BusinessInfo {
  name: string;
  tradeName: string;
  address: string;
  neighborhood: string;
  cityStateZip: string;
  fullAddress: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
}
