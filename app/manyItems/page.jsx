// app/manyItems/page.jsx

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components/header/PageHeader';
import { db } from '@/lib/firebase/firebaseConfig';

function Card({ id, brand, model }) {
  return (
    <aside>
      <h2>{id}</h2>
      <p>{brand}</p>
      <p>{model}</p>
      <Link href={`/single-item/${id}`}>View {model} using id: {id}</Link>
    </aside>
  );
}

function ManyItems({ items }) {
  return (
    <>
      <PageHeader title="All Items Display" tagline="Example of displaying all items in data" />
      <main className="min-h-screen py-24">
        {items ? (
          items.map((item) => (
            <Card key={item.id} {...item} />
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </main>
    </>
  );
}


export async function getServerComponents() {
  try {
    // Fetch items from Firebase and return them as server components
    const snapshot = await db.ref('https://dmit2008-15320-default-rtdb.firebaseio.com/mice').once('value');
    const itemsData = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      itemsData.push(item);
    });

    return {
      props: {
        items: itemsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        items: [],
      },
    };
  }
}



export default ManyItems; // Export as the default component
