import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function Summary() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      let income = 0;
      let expense = 0;
      querySnapshot.docs.forEach(doc => {
        const { amount, type } = doc.data();
        if (type === 'income') {
          income += parseFloat(amount);
        } else {
          expense += parseFloat(amount);
        }
      });
      setTotalIncome(income);
      setTotalExpense(expense);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expense: {totalExpense}</p>
      <p>Net Balance: {totalIncome - totalExpense}</p>
    </div>
  );
}

export default Summary;
