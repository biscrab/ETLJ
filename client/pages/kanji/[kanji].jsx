import Link from 'next/link'
import * as S from '../../styles/kanji'
import axios from 'axios'
import cheerio from 'cheerio'
import { useEffect, useState } from 'react'
import j from 'jquery'

const Kanji = ({props}) => {
    const data = props.data;
    const [onCanvas, setOnCanvas] = useState(false);
    useEffect(() => {
        if(onCanvas){
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.font = '400px serif';
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.textAlign = "center";
            ctx.fillText(data.kanji, canvas.width/2, 400);
        }
    },[])

    useEffect(()=>{
        j(".background").click(function(e){
            if(!j(".canvas").has(e.target).length && onCanvas){
                setOnCanvas(false);
            }
        })
    })

    return(
        <>
        <S.Body>
            <S.KanjiDiv>
                <S.Kanji>{data.kanji}</S.Kanji>
                <button onClick={()=>setOnCanvas(true)}>쓰기</button>
                {data.kun_readings.map(i => {
                    return(
                        <span>{i}</span>
                    )
                })}
                <span>({data.kmeannings} {data.kreadings})</span>
                <span>{data.stroke_count}</span>
                <img src={data.image}/>
            </S.KanjiDiv>
        </S.Body>
        {onCanvas ?
            <S.Background className="background">
                <div className="canvas">
                    <S.Canvas width="900" height="500"/>
                </div>
            </S.Background>
            :
            <></>
        }
        </>
    )
}

function getHTML(kanji){
    kanji = encodeURI(kanji);
    try {
        return axios.get(`/api/${kanji}`);
    }catch(err){
        console.log(err);
    }
}

function getWiki(kanji){
    return new Promise((resolve, reject) => {
        var info = {kmeannings: "", kreadings: "", busu: "", image: ""}
        getHTML(kanji)
            .then((html) => {
                const $ = cheerio.load(html.data);
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2)")
                    .each(function(){
                        info.kmeannings = $(this).text();
                    })
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2)")
                    .each(function(){
                        info.kreadings = $(this).text();
                    })
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2)")
                    .each(function(){
                        info.busu = $(this).text();
                    })
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(2) > a > img")
                    .each(function(){
                        info.image = $(this).attr("src");
                    })
                resolve(info);
            })
    })
}

Kanji.getInitialProps = async function (context) {
    const { kanji } = context.query;
    const res = await axios.get(`https://kanjiapi.dev/v1/kanji/${encodeURI(kanji)}`)
    const d = await res.data;
    const wiki = await getWiki(kanji);
    console.log(wiki);
    const data = {...d, ...wiki};
    console.log(data);
    return {
        props : {data}
    }
}

export default Kanji