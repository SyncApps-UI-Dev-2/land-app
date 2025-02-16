import { Heart, ChevronLeft, ChevronRight, Map, List } from 'lucide-react';
import { Card } from '@/components/ui/card';
import hearImg from '@/assets/HeartFill.svg';

import Button from '@/components/ui/Button.jsx';
import Pagination from '@/components/ui/Pagination.jsx';
import SelectComponent from '@/components/SelectComponent';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import ListViewIcon from '@/assets/list.svg';
import FilterIcon from '@/assets/filter-icon.svg';
import SearchIcon from '@/assets/search.svg';
import MarkerPin from '@/assets/marker-pin.svg';
import VerifiedIcon from '@/assets/verified-icon.svg';
import StarRating from './StarRating';
import SquareFeetIcon from '@/assets/sqftpin.svg';
import HeartIcon from '@/assets/heart.svg';
import RightIcon from '@/assets/arrow-right.svg';
import LeftIcon from '@/assets/arrow-left.svg';
import GoogleMapComponent from '@/components/GoogleMap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useGet } from '@/apis';
import { toIndianLakhs } from '@/utils/helper';
import Loading from '@/components/Loading';

const PropertyMapView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [like, setLike] = useState({});
  const [clearSearchbar, setClearSearchbar] = useState('');
  const handleClearSearch = () => {
    setClearSearchbar('');
    console.log('cleared');
  };
  const handleLike = (e, id) => {
    e.stopPropagation();
    setLike(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const navigate = useNavigate();

  const {
    data: allLandProperties,
    isLoading,
    isError,
  } = useGet('allLands', '/Land/GetAllLands', {
    staleTime: 300000, // 5 minutes
    cacheTime: 600000, // 10 minutes - keeps data in cache longer
  });
  const [stateAllLandProperties, setStateAllLandProperties] = useState([]);

  const totalPages = useMemo(() => {
    return Math.ceil((allLandProperties?.data?.length || 0) / 10);
  }, [allLandProperties]);

  console.log(allLandProperties, 'allLandProperties=====');

  useEffect(() => {
    if (allLandProperties?.data?.length > 0) {
      const markersProperties = allLandProperties.data.map(data => ({
        id: data.landId,
        lat: data.latitude,
        lng: data.longitude,
        price: toIndianLakhs(data.totalPrice),
      }));
      setStateAllLandProperties(markersProperties);
    }
  }, [allLandProperties]);

  return (
<<<<<<< HEAD
    <div className="lg:mx-auto lg:max-w-7xl w-full px-4 lg:px-6 py-2">
      <div className="flex flex-col xl:flex-row gap-4 w-full justify-between">
        <section className="flex-1 min-w-fit">
=======
    <div className=" lg:mx-auto lg:max-w-7xl w-full px-4 lg:px-6 py-2 ">
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
        <section className="lg:w-[65%] w-full ">
>>>>>>> d438e27cf3bdbbc9ab53dbbbce55696e339d0535
          <div className="flex md:flex-row flex-col justify-between items-center mb-3">
            <div className="">
              <h1 className="md:text-xl text-2xl font-semibold text-primary">
                Property Map View
              </h1>
              <p className="text-tertiary md:text-sm text-base">
                Borem ipsum dolor sit amet
              </p>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Button className="px-5 border rounded-lg  border-bPrimary  bg-white min-w-fit  text-primary">
                Share
              </Button>
              <Button className=" px-2 text-white border border-bPrimary rounded-md bg-primary flex items-center justify-center gap-2 min-w-fit ">
                <span className="text-lg">★</span> Save search
              </Button>
            </div>
          </div>

          <div className="flex gap-4 items-center mb-3 flex-wrap md:flex-nowrap">
            <SelectComponent
              className="flex justify-center md:justify-start items-center gap-2 md:py-4 py-6 border border-gray-300"
              placeholder="Select District"
              options={[
                { id: 1, label: 'Medak', value: 'Ts' },
                { id: 2, label: 'Warangal', value: 'Ts' },
                { id: 3, label: 'KarimNagar', value: 'Ts' },
                { id: 4, label: 'Adilabad', value: 'Ts' },
              ]}
            />
            <DatePickerWithRange className="w-full" />
            <SelectComponent
              className="flex justify-center md:justify-start items-center gap-2 md:py-3 py-6 border border-gray-300"
              placeholder="Select Price"
              options={[
                { id: 1, label: '$50' },
                { id: 2, label: '$100' },
                { id: 3, label: '$150' },
                { id: 4, label: '$200' },
              ]}
            />
            <Button
              className="border rounded-lg px-4 md:py-2 py-3 min-w-fit bg-white text-primary border-bPrimary hover:bg-white/50 mt-0  "
              onClick={() => navigate('/all-lands')}
            >
              <div className="flex items-center gap-2">
                <img
                  src={ListViewIcon}
                  alt="lst-view-icon"
                  className="h-5 w-5"
                />
                <span className="text-xs">List View </span>
              </div>
            </Button>
          </div>

          <div className="w-full md:w-auto md:hidden">
            <Button className="border rounded-lg px-4 py-2.5 bg-white text-primary border-bPrimary hover:bg-white/50 mt-0 mb-2 w-full">
              <div className="flex gap-2 items-center">
                <img src={FilterIcon} alt="filter-icon" />
                <span>More filters</span>
              </div>
            </Button>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 mb-3">
            <div className="relative min-w-fit flex-1 ">
              <input
                type="search"
                placeholder="Search"
                className="w-full border rounded-lg pl-12 px-4 py-2 shadow-xs border-bPrimary placeholder:[ #717680] placeholder:pl-2"
                value={clearSearchbar}
                onChange={e => setClearSearchbar(e.target.value)}
              />
              <img
                src={SearchIcon}
                alt="search-Icon"
                className="absolute top-[10px] left-5"
              />
            </div>
            <div className="flex flex-row gap-2 w-full md:w-auto">
              <div className="w-full">
                <Button
                  onClick={handleClearSearch}
                  className="border rounded-md px-4 py-2 text-primary font-semibold border-bPrimary bg-white mt-0 min-w-36"
                >
                  Clear
                </Button>
              </div>
              <div className="w-full">
                <Button className="border rounded-md px-4 py-2 text-white font-semibold border-bPrimary bg-primary mt-0 min-w-36">
                  Search
                </Button>
              </div>
              <div className="w-full md:block hidden">
                <Button className="border rounded-lg  bg-white text-primary border-bPrimary hover:bg-white/50 mt-0 mb-2 w-full">
                  <div className="flex gap-2 items-center text-sm h-full md:py-[2px]">
                    <img src={FilterIcon} alt="filter-icon" />
                    <span>More filters</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-3 ">
            <div className="flex gap-0">
              <Button className="border border-[#D5D7DA] text-xs font-[600]  bg-[#FAFAFA] hover:bg-[#FAFAFA]  rounded-r-none hover:opacity-50 text-primary min-w-fit px-3 py-2">
                Sort by date
              </Button>
              <Button className="border border-[#D5D7DA] text-xs  hover:opacity-50 hover:bg-white font-[500] rounded-l-none min-w-fit bg-white text-primary px-3 py-2">
                Sort by price
              </Button>
            </div>

            <div className="flex">
              <Button className="border border-[#D5D7DA]  hover:opacity-50 hover:bg-[#FAFAFA]  text-primary  p-1  bg-[ #FAFAFA] min-w-10 justify-center flex items-center rounded-r-none">
                <img
                  src={ListViewIcon}
                  alt="list-view"
                  className="text-primary h-4 w-4  rounded-r-none"
                />
              </Button>
              <Button className="border border-[#D5D7DA]  hover:opacity-50 hover:bg-white bg-white text-primary  p-1 w-2 min-w-10 flex justify-center items-center  rounded-l-none">
                <img src={MarkerPin} alt="marker-pin" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 mb-6">
<<<<<<< HEAD
            {properties.map(property => (
              <Card
                key={property.id}
                className="flex flex-wrap md:flex-nowrap shadow-sm border border-bSecondary bg-white rounded-xl md:px-4 px-2 md:py-5 py-2 gap-5 cursor-pointer"
                onClick={() =>
                  navigate(
                    `/premium-property/single-property-view/${property.id}`,
                  )
                }
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-44 md:h-56 2xl:h-52 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 ">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-buttontertiary text-sm font-semibold">
                        <img
                          src={VerifiedIcon}
                          alt=" verified-icon"
                          className="h-5 w-5"
                        />
                        <span className=" rounded-full w-2 h-2" />
                        {property.company}
                      </div>
                      <h3 className="text-xs sm:text-base md:text-sm font-semibold mt-2 text-primary ">
                        {property.title}
                      </h3>
                    </div>
                    <div
                      onClick={e => handleLike(e, property.id)}
                      className={`border border-[#d6bbfb] bg-white rounded-lg p-2 h-10 cursor-pointer shadow-lg`}
                    >
                      {like[property.id] ? (
                        <img
                          src={hearImg}
                          alt="heart-icon"
                          className={`h-auto w-6 `}
                        />
                      ) : (
                        <img
                          src={HeartIcon}
                          alt="heart-icon"
                          className={`h-auto w-6 `}
                        />
                      )}
                    </div>
=======
            {isLoading ? (
              <Loading />
            ) : (
              allLandProperties?.data?.map(property => (
                <Card
                  key={property.id}
                  className="flex flex-wrap md:flex-nowrap shadow-sm border border-bSecondary bg-white rounded-xl px-4 py-5 gap-5 cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/premium-property/single-property-view/${property.landId}`,
                    )
                  }
                >
                  <div className="w-full md:w-[30%]">
                    <img
                      src={property.images[0]}
                      alt={property.landName}
                      className=" h-44 md:h-44 w-full object-cover rounded-lg"
                    />
>>>>>>> d438e27cf3bdbbc9ab53dbbbce55696e339d0535
                  </div>

                  <div className="flex-1 ">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-buttontertiary text-sm font-semibold">
                          <img
                            src={VerifiedIcon}
                            alt=" verified-icon"
                            className="h-5 w-5"
                          />
                          <span className=" rounded-full w-2 h-2 text-sm" />
                          {property.landName}
                        </div>
                        <h3 className="text-xs sm:text-sm md:text-sm font-semibold mt-2 text-primary ">
                          {property.description}
                        </h3>
                      </div>
                      <div
                        onClick={e => handleLike(e, property.id)}
                        className={`border border-[#d6bbfb] bg-white rounded-lg p-2 h-8 w-8 cursor-pointer shadow-lg`}
                      >
                        {like[property.id] ? (
                          <img
                            src={hearImg}
                            alt="heart-icon"
                            className={`h-auto w-6 `}
                          />
                        ) : (
                          <img
                            src={HeartIcon}
                            alt="heart-icon"
                            className={`h-auto w-6 `}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <section>
                        <div className="flex items-center gap-1 mt-2">
                          <StarRating
                            starSize={16}
                            rating={property.reviews || 4}
                            className=""
                          />
                          <span className="text-tertiary text-sm">
                            {property.reviews} reviews
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <img
                              src={MarkerPin}
                              alt="MarkerPin"
                              className="text-bQuinary"
                            />
                            <span className="text-tertiary font-medium text-xs">
                              {property.address}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img
                              src={SquareFeetIcon}
                              alt="squarefeet"
                              className='"text-bQuinary'
                            />
                            <span className="text-tertiary font-medium text-xs">
                              {property.areaInSqft || 0}
                            </span>
                          </div>
                        </div>
                      </section>

                      <section className="-mt-6 flex">
                        <div className="flex gap-2 items-center">
                          <span className="text-primary text-sm sm:text-base font-semibold ">
                            {toIndianLakhs(property.totalPrice)}
                          </span>
                          <span className="text-tertiary text-sm sm:text-base">
                            Price
                          </span>
                        </div>
                      </section>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
          <div className="flex gap-2 justify-between items-center w-full">
            <Button
              className="bg-transparent rounded-none border-none outline-none  hover:bg-transparent text-primary text-sm mt-0 shadow-none justify-start"
              childrenClassName="justify-start"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <img src={LeftIcon} alt="left-icon" className="text-white" />
                <span> Previous</span>
              </div>
            </Button>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <Button
              className="bg-transparent rounded-none border-none outline-none   hover:bg-transparent hover:bg-none text-primary text-sm mt-0 shadow-none"
              childrenClassName="justify-end"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span>Next</span>
                <img src={RightIcon} alt="right-icon" className="text-white" />
              </div>
            </Button>
          </div>
        </section>

<<<<<<< HEAD
        <section className="w-full xl:w-[60%]">
          <GoogleMapComponent
            oneMarker={false}
            mapWidth="100%"
            className="w-full rounded-md"
            mapHeight="100vh"
=======
        <section className="lg:w-[35%] w-full h-screen sticky top-0">
          <GoogleMapComponent
            oneMarker={false}
            mapWidth="100%"
            className="w-full h-full rounded-md"
            mapHeight="100%"
            stateAllLandProperties={stateAllLandProperties}
>>>>>>> d438e27cf3bdbbc9ab53dbbbce55696e339d0535
          />
        </section>
      </div>
    </div>
  );
};

export default PropertyMapView;
