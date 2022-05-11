import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const weekDays = 260; // 52 weeks * 5

  const [desiredWage, setDesiredWage] = useState<string>('');
  const [costs, setCosts] = useState<string>('');
  const [calculation, setCalculation] = useState<number>();
  const [basicCalculation, setBasicCalculation] = useState<number>();

  // initially, just checking if NaN and returning 0 if it is
  const numberFormat = (value: string): number => {
    const toNumber = parseFloat(value);
    if (isNaN(toNumber)) {
      return 0;
    }

    return toNumber;
  };

  useEffect(() => {
    // these are the current defaults. They'll need to be lifted up at some point,
    // and we might not want to default all this for the user. Pension is a bit contentious for example
    const defaults = {
      publicHolidays: 9, // extra one in 2022
      annualLeave: 25,
      sickDays: 3,
      pension: 0,
    };

    const daysOff = defaults.annualLeave + defaults.publicHolidays + defaults.sickDays;
    const workingDays = weekDays - daysOff;
    const desiredWageNum = numberFormat(desiredWage);
    const costsNum = numberFormat(costs);

    // calculate how much pension will be paid
    const pension = (defaults.pension / 100) * desiredWageNum;

    if (desiredWage) {
      setCalculation(Math.ceil((desiredWageNum + pension + costsNum) / workingDays));
    }

    setBasicCalculation(Math.ceil((desiredWageNum * 1.3) / workingDays));
  }, [desiredWage, costs]);

  return (
    <div>
      <Head>
        <title>Freelance Calculator</title>
        <meta name="description" content="Calculate what your day rate should be" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Freelance calculator</h1>
        <h2>Day rate: {calculation}</h2>
        <h2>Your wage + 30%: {basicCalculation}</h2>
        <label>
          Desired wage:{' '}
          <input
            data-testid="wage"
            type="number"
            value={desiredWage}
            onChange={(e) => {
              setDesiredWage(e.target.value);
            }}
          />
        </label>

        <label>
          Costs:{' '}
          <input
            data-testid="costs"
            type="number"
            value={costs}
            onChange={(e) => {
              setCosts(e.target.value);
            }}
          />
        </label>
      </main>
    </div>
  );
};

export default Home;
