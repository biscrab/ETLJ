import * as S from '../../styles/kanji'
import axios from 'axios'
import cheerio from 'cheerio'
import { useEffect, useState } from 'react'
import j from 'jquery'

const Kanji = ({props}) => {
    const data = props.data;
    const [onCanvas, setOnCanvas] = useState(false);
    const [painting, setPainting] = useState(false);
    useEffect(() => {
        if(onCanvas){
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.font = '400px serif';
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.textAlign = "center";
            ctx.fillText(data.kanji, canvas.width/2, 400);
        }
    },[onCanvas])

    useEffect((e)=>{
        j(".background").click(function(e){
            if(!j(".canvas").has(e.target).length && onCanvas){
                setOnCanvas(false);
            }
        })
    })

    function startPainting(event){
        console.log("s");
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.lineCap = "round"
        ctx.beginPath();
        ctx.moveTo(x, y);
        setPainting(true);
    }

    function stopPainting(){
        console.log("e");
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.closePath();
        setPainting(false);
    }

    function onMouseMove(event){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        if(!painting){
            return;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
    }

    /*                    {data.kun_readings.map(i => {
                        return(
                            <span>{i}</span>
                        )
                    })}
                    <span>({data.kmeannings} {data.kreadings})</span>
                    <span>{data.stroke_count}획</span>
                    <img src={data.image}/> */

    return(
        <>
        <S.KBody>
            <S.KanjiDiv>
                <S.KanjiCaracter>
                    <S.Kanji>{props.data.kanji}</S.Kanji>
                    <button onClick={()=>setOnCanvas(true)}>쓰기</button>
                </S.KanjiCaracter>                
                <S.InfoDiv>
                </S.InfoDiv>
            </S.KanjiDiv>
        </S.KBody>
        {onCanvas ?
            <S.Background className="background">
                <div className="canvas">
                    <i className="fa-solid fa-eraser fa-lg"></i>
                    <S.Canvas id="canvas" width="900" height="500" onMouseDown={(e)=>startPainting(e)} onMouseLeave={()=>stopPainting()} onMouseUp={()=>stopPainting()} onMouseMove={(e)=>onMouseMove(e)}/>
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