import Image from 'next/image'
import React from 'react'

interface AvatarProps {
    src?: string | null;
}

const Avatar = ({src} : AvatarProps) => {
  return (
    <Image
        className="w-10 h-10 rounded-full"
        height={30}
        width={30}
        alt="Avater"
        src={src || 'https://via.placeholder.com/30x30?text=no+user+Image'}
    />
  )
}

export default Avatar