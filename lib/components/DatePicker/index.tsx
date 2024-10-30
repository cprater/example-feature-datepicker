import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import { DatePickerProps } from './index.types';


const MyDatePicker = ({
  localizationProviderProps = {},
  datePickerProps = {}
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} {...localizationProviderProps}>
      <DatePicker {...datePickerProps} />
    </LocalizationProvider>
  );
};

export { MyDatePicker as DatePicker };
