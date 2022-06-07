import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/outline';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-56 cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className=" rounded-t "
            priority
          />
        </div>
      </Link>
      <div className="flex items-center justify-between p-4">
        <div className="relative flex flex-col">
          <div className="absolute -mt-8 -mr-9 px-2 py-1 text-white bg-red-500 rounded-3xl text-xs">
            disponible
          </div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-sm cursor-pointer">{product.name}</h2>
          </Link>
          <p className="text-sm">{product.price} €</p>
        </div>

        <div className="p-2 bg-bleu rounded">
          <ShoppingBagIcon className="w-6 h-6 text-white " />
        </div>
      </div>
    </div>
  );
}
