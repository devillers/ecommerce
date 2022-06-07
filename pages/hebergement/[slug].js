import data from '../../utils/data';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Link from 'next/link';
import Image from 'next/image';
import {
  faBath,
  faBed,
  faBellConcierge,
  faBinoculars,
  faBus,
  faChampagneGlasses,
  faChild,
  faChildReaching,
  faFire,
  faHotTub,
  faKitchenSet,
  faParking,
  faShirt,
  faShower,
  faTv,
  faWifi,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function HebergemenScreen() {
  const { query } = useRouter();
  const { slug } = query;

  const chalet = data.chalets.find((x) => x.slug === slug);

  return (
    <>
      <Layout title="hebergment">
        <h1 className="text-3xl pt-4 pb-4 font-poppin ">{chalet.name} </h1>
        <div className="grid overflow-hidden gap-1 md:grid-cols-2 grid-rows-2 grid-flow-row lg:grid-cols-4">
          <div className="relative box row-span-2 col-span-2 h-96  ">
            <Image
              src={chalet.image_1}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" lg:rounded-tl-md rounded-bl-md"
              priority
            />
          </div>
          <div className="relative box col-span-1 sm:h-24  md:h-36 lg:h-auto ">
            {' '}
            <Image
              src={chalet.image_2}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="relative box col-span-1 ">
            {' '}
            <Image
              src={chalet.image_3}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" rounded-tr-md"
              priority
            />
          </div>
          <div className="relative box sm:h-24 md:h-36 lg:h-auto">
            {' '}
            <Image
              src={chalet.image_4}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="relative box ">
            {' '}
            <Image
              src={chalet.image_5}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className="rounded-br-md"
              priority
            />
          </div>
        </div>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 grid-flow-row h-auto font-poppin ">
          <div className="box row-span-2 col-span-2 text-sm ">
            <h3 className=" text-2xl mt-5 p-4 ">Description</h3>
            <p className="leading-6 text-justify p-4 >">
              {chalet.description}{' '}
            </p>
          </div>

          {/* partie 2 */}
          <div className="box col-span-1 mt-5 mb-10 p-4 text-xs ">
            <h3 className="mb-5 text-2xl font-poppin ">Amenities</h3>
            <ul>
              <li className="flex items-center mb-2">
                {chalet.wifi ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faWifi} />
                    <span>{chalet.wifi} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.vueOn ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBinoculars} />
                    <span>{chalet.vueOn} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.conciergerie ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBellConcierge} />
                    <span>{chalet.conciergerie} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.bedrooms ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBed} />
                    <span>{chalet.bedrooms} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-1">
                {chalet.sauna ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faHotTub} />
                    <span>{chalet.sauna} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.firePlace ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faFire} />
                    <span>{chalet.firePlace} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.highChair ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faChild} />
                    <span>{chalet.highChair} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.foldingBed ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faChildReaching} />
                    <span>{chalet.foldingBed} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie  */}
          <div className="box col-span-1 mt-20 mb-10 p-4 text-xs">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.carPark ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faParking} />
                    <span>{chalet.carPark} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.busTopName ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBus} />
                    <span>{chalet.busTopName} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.kitchenSize ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faKitchenSet} />
                    <span>{chalet.kitchenSize} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.bathtube ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBath} />
                    <span>{chalet.bathtube} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.shower ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faShower} />
                    <span>{chalet.shower} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie 4 */}
          <div className="box col-span-1 p-4 text-xs">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.stowart ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faHotTub} />
                    <span>{chalet.stowart} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.dryer ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faShirt} />
                    <span>{chalet.dryer} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.whashingMachine ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faShirt} />
                    <span>{chalet.whashingMachine} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.dishwasher ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faWineGlass} />
                    <span>{chalet.dishwasher} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.tvscreen ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faTv} />
                    <span>{chalet.tvscreen} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.party ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faChampagneGlasses}
                    />
                    <span className="text-red-600 font-bold">
                      {chalet.party}{' '}
                    </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie 5 */}

          <div className="box p-4 text-xs font-comfortaa">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.booking ? (
                  <div className="px-3 py-2 bg-blue-600 text-white rounded-full">
                    <Link href={''}>réserver sur booking</Link>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.airbnb ? (
                  <div className="px-3 py-2 bg-red-600 text-white rounded-full">
                    <Link href={chalet.airbnb}>
                      <a target="_blank">réserver sur Airbnb</a>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.airbnb ? (
                  <div className="px-3 py-2 bg-pink-600 text-white rounded-full">
                    <Link href={chalet.private}>
                      <a target="_blank">réserver en direct</a>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
