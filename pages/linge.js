import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };
  return (
    <Layout title="location linge">
      <div className="rounded-md shadow-md text-xs text-slate-900 font-poppin p-5">
        <h1 className="">Location de linge de Maison </h1>
        <div className="grid grid-cols-5 ">
          <div className=" col-span-2 p-4">
            <div className="">
              {' '}
              <div className="">
                <div>
                  <div className="mt-3">
                    <label className="py-5">Check-in</label>
                    <DatePicker
                      selected={checkInDate}
                      minDate={new Date()}
                      onChange={handleCheckInDate}
                      className="border-[1px] border-bleu rounded-md w-1/2 p-2"
                    />
                  </div>
                  <div className="mt-3">
                    <label>Check-out</label>
                    <DatePicker
                      selected={checkOutDate}
                      minDate={checkInDate}
                      onChange={handleCheckOutDate}
                      className="border-[1px] border-bleu rounded-md w-1/2  p-2 text-md"
                    />
                  </div>
                </div>
                {checkInDate && checkOutDate && (
                  <div className="summary">
                    <p className="mt-5">
                      Vous avez fait une demande de location{' '}
                      {moment(checkInDate).format('LL')} to{' '}
                      {moment(checkOutDate).format('LL')}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-3">
              {data.products.map((product) => (
                <ProductItem product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
