import pino from 'pino';

const TRANSPORT_OPTIONS = {
  tty: {
    target: 'pino-pretty',
  },
};

export const logger = pino(pino.transport(TRANSPORT_OPTIONS.tty));
