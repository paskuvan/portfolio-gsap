import React from 'react'
import Link from 'next/link'

interface LinkProps {
    href: string;
    label: string;
    className?: string;
}

export default function CustomLink({ href, label, className}: LinkProps) {
  return (
    <div>
        <Link href={href}>
        <p>{label}</p>
        <div className={className} />
        </Link>
    </div>
  )
}
