export interface ConditionService {
  id: string;
  title: string;
  subtitle: string;
  category: 'clinical' | 'aesthetic' | 'hair-nail';
  description: string;
  commonSymptoms: string[];
  clinicalApproach: string;
  iconName: string;
}

export interface ClinicTechnology {
  id: string;
  name: string;
  shortTag: string;
  tagline: string;
  description: string;
  primaryUses: string[];
  keyBenefits: string[];
  suitableFor: string;
  iconName: string;
  sessionDuration: string;
}

export interface DoctorProfile {
  name: string;
  degree: string;
  title: string;
  parentage: string;
  clinicName: string;
  location: string;
  experienceSummary: string;
  bio: string[];
  coreValues: { title: string; desc: string; icon: string }[];
  qualifications: string[];
}

export interface ClinicContactInfo {
  doctorName: string;
  fatherName: string;
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  ward: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  timings: {
    days: string;
    hours: string;
    note: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
    embedQuery: string;
    googleMapsUrl?: string;
    googleMapsDirectQuery?: string;
  };
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  consultationType: 'clinic' | 'teleconsultation';
  preferredDate: string;
  preferredTimeSlot: string;
  concernCategory: string;
  message: string;
}
