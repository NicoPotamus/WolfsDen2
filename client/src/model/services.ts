import data from '../data/services.json'

import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<Service> {
  return {
    data : data.services,
  }
}

export interface Service{
    name: String;
    price_master: String | Number;
    price_apprentice: String | Number;
    description: String;
    isOpen?: boolean;
  }