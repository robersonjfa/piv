'use client';
import React, { useState } from 'react';

export default function ImageMaybe({ src, alt, className }:{ src?: string; alt: string; className?: string }) {
  const [error, setErr] = useState(false);
  if (!src || error) return <div className={className} style={{display:'grid', placeItems:'center', background:'#f2f2f2', color:'#6b7280'}}>sem imagem</div>;
  return <img src={src} alt={alt} className={className} onError={()=>setErr(true)} />;
}
