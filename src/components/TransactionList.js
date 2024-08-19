import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTransactions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.amount} - {transaction.type} - {transaction.date} - {transaction.category}
            <br />
            {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
