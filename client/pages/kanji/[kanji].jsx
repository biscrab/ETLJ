import Link from 'next/link'
import * as S from '../../styles/kanji'
import axios from 'axios'
import cheerio from 'cheerio'
import { useEffect } from 'react'

const Kanji = ({props}) => {
    const data = props.data;
    useEffect(() => {
        console.log(props);
    })
    return(
        <S.Body>
            <S.KanjiDiv>
                <S.Kanji>{data.kanji}</S.Kanji>
            </S.KanjiDiv>
        </S.Body>
    )
}

function getHTML(kanji){
    kanji = encodeURI(kanji);
    try {
        return axios.get(`https://ko.wiktionary.org/wiki/${kanji}`);
    }catch(err){
        console.log(err);
    }
}

function getWiki(kanji){
    return new Promise((resolve, reject) => {
        var info = {meanning: "", sound: "", busu: "", image: ""}
        getHTML(kanji)
            .then((html) => {
                const $ = cheerio.load(html.data);
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(2)")
                    .each(function(){
                        info.meanning = $(this).text();
                    })
                $("#mw-content-text > div.mw-parser-output > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2)")
                    .each(function(){
                        info.sound = $(this).text();
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
    const data = await res.data;
    const wiki = await getWiki(kanji);
    return {
        props : {...data, wiki}
    }
}

export default Kanji