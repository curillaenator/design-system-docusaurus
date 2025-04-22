import xyzb2c from '../assets/clients/xyzB2C.png';
import xyzclass from '../assets/clients/xyzclass.png';
import xyztoria from '../assets/clients/xyztoria.png';
import xyzb2b from '../assets/clients/xyzB2B.png';
import xyzSOVA from '../assets/clients/xyzSOVA.png';
import xyzcamp from '../assets/clients/xyzcamp.png';

export interface ClientProps {
  id: string;
  title: string;
  logoSrc: string;
}

export const CLIENTS_SCHEMA: ClientProps[] = [
  {
    id: 'xyzb2c',
    title: 'Xyz B2C',
    logoSrc: xyzb2c,
  },
  {
    id: 'xyzclass',
    title: 'Xyz Класс',
    logoSrc: xyzclass,
  },
  {
    id: 'xyztoria',
    title: 'Xyzтория',
    logoSrc: xyztoria,
  },
  {
    id: 'xyzb2b',
    title: 'Xyz B2B',
    logoSrc: xyzb2b,
  },
  {
    id: 'xyzSOVA',
    title: 'Xyz Сова',
    logoSrc: xyzSOVA,
  },
  {
    id: 'xyzcamp',
    title: 'Xyzcamp',
    logoSrc: xyzcamp,
  },
];
