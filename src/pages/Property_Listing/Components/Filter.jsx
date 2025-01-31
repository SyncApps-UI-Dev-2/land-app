import filterIcon from '../Components/images/filterIcon.svg';
import Location from './images/location.svg';
import CalendarDropdown from '@/components/CalenderDropdown';
import SelectDistrict from './SelectDistrict';
import SelectPrice from './SelectPrice';
import { useNavigate } from 'react-router-dom';
// import DatePicker from '../DatePicker';

function Filter() {
  const navigate = useNavigate();
  return (
    <div className="px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start -z-50">
      <div className="flex flex-col md:flex-row justify-between py-4 w-full gap-4">
        {/* Dropdown Section */}
        <div className="flex flex-col md:flex-row z-40 items-center gap-4 md:w-2/3">
          <SelectDistrict />
          <CalendarDropdown width="w-full" />
          <SelectPrice />
        </div>

        {/* Mobile View Buttons */}
        <div className="block md:hidden w-full flex flex-col items-center gap-4">
          <button className="w-full max-w-xs py-2 border border-gray-300 rounded-md flex gap-2 items-center justify-center">
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span>Map View</span>
          </button>
          <button className="w-full max-w-xs py-2 border border-gray-300 rounded-md flex gap-2 items-center justify-center">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Desktop View Buttons */}
        <div className="hidden md:flex md:w-2/1 ml-auto gap-4">
          <button
            className="py-2 px-4 border border-gray-300 rounded-md flex gap-2 items-center"
            onClick={() => navigate('/premium-property/property-map-view')}
          >
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span>Map View</span>
          </button>
          <button className="py-2 px-4 border border-gray-300 rounded-md flex gap-2 items-center">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
