export interface OptionType {
  label: string;
  value: string;
}

export interface FormSelectProps {
  name: string;
  label: string;
  options: (string | OptionType)[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}
