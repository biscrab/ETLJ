import * as S from '../../styles/kanji'
import axios from 'axios'
import cheerio from 'cheerio'
import { useEffect, useState } from 'react'
import j from 'jquery'
import Link from 'next/link'

const Kanji = ({props}) => {
    
    const data = props.data;

    const [onCanvas, setOnCanvas] = useState(false);
    const [painting, setPainting] = useState(false);

    useEffect((e)=>{
        j(".background").click(function(e){
            if(!j(".canvas").has(e.target).length && onCanvas){
                setOnCanvas(false);
            }
        })
    })
    
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

    function eraseCanvas(){

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = '400px serif';
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.textAlign = "center";
        ctx.fillText(data.kanji, canvas.width/2, 400);
    }

    const [synth, setSynth] = useState();

    useEffect(()=>{
        const s = window.speechSynthesis;
        setSynth(s);
    },[])

    return(
        <>
        <S.KBody>
            <S.KanjiDiv>
                <S.KanjiCaracter>
                    <S.Kanji>{data.kanji}</S.Kanji>
                    <S.ButtonDiv>
                        <button onClick={()=>setOnCanvas(true)}>?????????</button>
                    </S.ButtonDiv>
                </S.KanjiCaracter>                
                <S.InfoDiv>
                    <div>
                    {data.kmeannings && data.kreadings ?
                    <h1>({data.kmeannings.replace("1. ", "")} {data.kreadings.replace(/\s/gi, "").replace("2.", ", ").replace("1.", "")})</h1>
                    :
                    <></>
                    }
                    {data.kun_readings[0] || data.name_readings[0] ?
                    <p>
                        {data.kun_readings[0] ? 
                        <>
                        {`??????: `} 
                        {data.kun_readings.map(
                            (i, index) => {
                                return(
                                    <span key={index} onClick={()=>{
                                        synth.cancel();
                                        const utterThis = new SpeechSynthesisUtterance(i);
                                        utterThis.lang = 'ja-JP';
                                        synth.speak(utterThis)
                                    }
                                    }>{i}{index !== data.kun_readings.length-1 ? ", " : ""}</span>
                                )
                            }
                        )}
                        </>
                        :
                        <></>
                        }
                        {data.name_readings[0] ?
                        <>
                        {" "}
                        {"(????????? ??????: "}
                        {data.name_readings.map(
                            (i, index) => {
                                return(
                                    <span key={index} onClick={()=>{
                                        synth.cancel();
                                        const utterThis = new SpeechSynthesisUtterance(i);
                                        utterThis.lang = 'ja-JP';
                                        synth.speak(utterThis)
                                    }
                                    }>{i}{index !== data.name_readings.length-1 ? ", " : ""}</span>
                                )
                            }
                        )}
                        )
                        </>
                        :
                        <></>}
                    </p>
                    :
                    <></>
                    }
                    <p>
                        {`??????: `} 
                        {data.on_readings.map(
                            (i, index) => {
                                return(
                                    <span key={index} onClick={()=> {                                        
                                        const utterThis = new SpeechSynthesisUtterance(i);
                                        utterThis.lang = 'ja-JP';
                                        synth.speak(utterThis)
                                    }}>{i}{index !== data.on_readings.length-1 ? ", " : ""}</span>
                                )
                            }
                        )}
                    </p>
                    {data.busu ?
                    <p>??????: <Link href={`/kanji/${data.busu[0]}`}>{data.busu}</Link></p>
                    :
                    <></>
                    }
                    <p>??? ??????: {data.stroke_count}???</p>
                    <p>{data.grade ? `??????: ${data.grade}??? ` : ""}{data.jlpt ? `(JLPT ${data.jlpt}???)` : ""}</p>
                    <p>????????????: {data.unicode}</p>
                    <img src={data.image}/>
                    </div>
                </S.InfoDiv>
            </S.KanjiDiv>
            <S.WordTitle></S.WordTitle>
            {data.word ?
            <S.WordList>
                {data.word.map((i, index) => {
                    return(
                        <li key={index}>
                            <b>{i.variants[0].written} ({i.variants[0].pronounced})</b>
                            <span>{i.meanings[0].glosses[0]}</span>
                        </li>
                    )
                }) }
            </S.WordList>
            :
            <></>
            }
        </S.KBody>
        {onCanvas ?
            <S.Background className="background">
                <div className="canvas">
                    <i onClick={() => eraseCanvas()} className="fa fa-eraser fa-2x" style={{color: "#333"}}></i>
                    <S.Canvas id="canvas" width="900" height="500" onMouseDown={(e)=>startPainting(e)} onMouseLeave={()=>stopPainting()} onMouseUp={()=>stopPainting()} onMouseMove={(e)=>onMouseMove(e)}/>
                </div>
            </S.Background>
            :
            <></>
        }
        </>
    )
}

function getW(kanji){
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
        getW(kanji)
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
            .catch(err => {
                resolve(false);
            })
    })
}

Kanji.getInitialProps = async function (context) {
    const { kanji } = context.query;
    const res = await axios.get(`https://kanjiapi.dev/v1/kanji/${encodeURI(kanji)}`)
    const data = await res.data;
    const wiki = await getWiki(kanji);
    const word = await axios.get(`https://kanjiapi.dev/v1/words/${encodeURI(kanji)}`).data;
    let propsData;
    if(wiki){
        const wikiData = {...word, kmeannings: word.kmeannings.split(',')[0].replace("1. ", ""), kreadings: word.kreadings.split(',')[0]};
        propsData = {...data, ...wikiData};
    }
    else{
        propsData = data;
    }

    propsData = {...data, word: [...word]};

    return {
        props : {propsData}
    }
}

export default Kanji

/*
function getWH(kanji){
    kanji = encodeURI(kanji);
    try {
        return axios.get(`/search/${kanji}`);
    }catch(err){
        console.log(err);
    }
}

function getWord(kanji){
    return new Promise((resolve, reject) => {
        const arr = [];
        getWH(kanji)
            .then((html) => {
                const $ = cheerio.load(html.data);
                console.log(html.data);
                $("div.row").map(function (i, element) {
                    var row = {readings: "", mean: "", word_class: ""}
                    row.readings = String($(element).find('.origin > .link').text());
                    console.log(row.readings);
                    row.mean = String($(element).find('.meanTaglist > .mean_item').text());
                    row.word_class = String($(element).find('.meanTaglist > .mean_item > .word_class').text());
                    arr.push(row);
                })
            })
        resolve(arr);
    })
}*/