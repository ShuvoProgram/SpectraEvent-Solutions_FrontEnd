import Link from 'next/link';
import React from 'react'

function FavoritePage() {
  return (
    <div>
        <Link href={`/user/favorite/update`}>Update Favorite</Link>
    </div>
  )
}

export default FavoritePage;