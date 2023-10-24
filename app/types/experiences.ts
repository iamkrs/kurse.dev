export type Experience = {
  name: string;
  /** Array of intl keys. */
  description: string[];
  position: string;
  startDate: Date | string;
  endDate?: Date | string;
};
