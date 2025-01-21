// import Button from "../common/Button";

import Button from '@/components/ui/Button';

// import SearchInput from "../common/SearchInput";
import filterIcon from './images/filterIcon.svg';
import SearchInput from '@/components/SearchInput';

function SearchBar() {
  return (
    <div className="px-4 md:px-20">
      {/* Search Bar Container */}
      <div className="flex flex-col md:flex-row items-center gap-2 w-full">
        {/* Search Input */}
        <SearchInput
          className="flex-1 w-full md:w-auto"
          rounded="rounded-md"
          py="py-2"
        />

        {/* Medium and above screens: Show Clear and Search buttons in one line */}
        <div className="hidden md:flex gap-2">
          <Button
            border="border border-gray-300 rounded-lg"
            px="px-4"
            py="py-2"
          >
            Clear
          </Button>
          <Button
            className="rounded-lg"
            bg="bg-black"
            text="text-white"
            px="px-4"
            py="py-2"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Mobile View: Clear, Search, and More Filters Buttons */}
      <div className="md:hidden flex flex-col items-center mt-4 gap-4 w-full">
        {/* Clear and Search Buttons */}
        <div className="flex flex-col items-center gap-2 w-full">
          <Button className="w-full max-w-xs rounded-lg border border-gray-300 py-2 font-semibold">
            Clear
          </Button>
          <Button
            className="w-full max-w-xs rounded-lg py-2"
            bg="bg-black"
            text="text-white"
          >
            Search
          </Button>
        </div>
        {/* More Filters Button */}
        <Button className="w-full max-w-sm border border-gray-300 rounded-lg py-2">
          <span className="flex gap-2 items-center justify-center w-full">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            More Filters
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
