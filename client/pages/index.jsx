import { NextPage } from 'next'
import * as S from '../styles/home'
import { useEffect, useState } from 'react';
import $ from 'jquery'

const Home = () => {

/*
  useEffect(()=>{
    setInterval(()=>{
      const item = imgs[0];
      const arr = [imgs[1], item];
      console.log(arr);
      setImgs(arr);
    },2000)
  },[]);*/

  return (
    <>
      <S.Title>
        <div>
          <h1>배우기 쉬운 일본어</h1><h2>(Easy To Learn Japanese)</h2>
        </div>
      </S.Title>
      <S.Background src={"https://www.wallpapertip.com/wmimgs/27-272016_japanese-garden-desktop-wallpapers-hd-1080p-size-japan.jpg"}/>
    </>
  )
}

export default Home
