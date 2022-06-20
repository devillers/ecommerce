//import { WifiIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBathtub,
  faFire,
  faHotTubPerson,
  faParking,
  faPerson,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import Link from 'next/link';

export default function ChaletItem({ chalet }) {
  return (
    <>
      <Link href={`/hebergement/${chalet.slug}`} key={chalet.slug}>
        <div className="card w-full font-poppin">
          <div className="relative h-56 ">
            <Image
              src={chalet.image_1}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" rounded-t "
              priority
            />
          </div>
          <ul className="pb-4 ">
            <li>
              <h2 className="text-md pt-2 font-bold">{chalet.nameShort} </h2>
            </li>
            <li>
              <p className="text-sm pt-2 pb-2">{chalet.village} </p>

              <div className="flex text-slate-600">
                <div className="mr-1">
                  {chalet.wifi ? (
                    <FontAwesomeIcon className="icon" icon={faWifi} />
                  ) : (
                    ''
                  )}
                </div>

                <div className=" relative">
                  {chalet.sdb ? (
                    <FontAwesomeIcon className="icon" icon={faBathtub} />
                  ) : (
                    ''
                  )}
                  <div className="rond">{chalet.sdb}</div>
                </div>
                {chalet.hammam || chalet.sauna || chalet.jacuzzy ? (
                  <FontAwesomeIcon className="icon" icon={faHotTubPerson} />
                ) : (
                  ''
                )}
                {chalet.parking ? (
                  <FontAwesomeIcon className="icon" icon={faParking} />
                ) : (
                  ''
                )}
                <div className=" relative">
                  {chalet.firePlace ? (
                    <FontAwesomeIcon className="icon" icon={faFire} />
                  ) : (
                    ''
                  )}
                </div>

                <div className=" relative">
                  {chalet.capacity ? (
                    <FontAwesomeIcon className="icon" icon={faPerson} />
                  ) : (
                    ''
                  )}
                  <div className="rond">{chalet.capacity}</div>
                </div>
                <p className="mr-1 text-sm">
                  {chalet.surface}
                  <span className="ml-1 text-sm">m2</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}
