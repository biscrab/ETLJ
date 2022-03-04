import { NextPage } from 'next'
import axios from 'axios'
import cheerio from 'cheerio'
import * as S from '../styles/word'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/*
function getHTML(kanji){
    kanji = encodeURI(kanji);
    try {
        return axios.get(`/word/${kanji}`);
    }catch(err){
        console.log(err);
    }
}*/

const Word = ({props}) => {

    const router = useRouter();

    useEffect(()=>{
        console.log(router.query);
    },[])

    return(
        <S.Body>
            <S.SelectDiv>
                <S.Rank>
                    <S.Tit>등급</S.Tit>
                    <S.TagList>
                        <li>
                            <label>1급<input type="radio" id="level1"/></label>
                        </li>
                        <li>
                            <label>2급<input type="radio" id="level2"/></label>
                        </li>
                        <li>
                            <label>3급<input type="radio" id="level3"/></label>
                        </li>
                        <li>
                            <label>4급<input type="radio" id="level4"/></label>
                        </li>
                        <li>
                            <label>5급<input type="radio" id="level5"/></label>
                        </li>
                    </S.TagList>
                </S.Rank>   
                <S.WorldClass>           
                    <S.Tit>품사</S.Tit>
                    <S.TagList>
                        <li>
                            <label>전체<input type="radio" id="allClassNamclassName"/></label>
                        </li>
                        <li>
                            <label>명사<input type="radio" id="noun"/></label>
                        </li>
                        <li>
                            <label>대명사<input type="radio" id="verb"/></label>
                        </li>
                        <li>
                            <label>동사<input type="radio" id="adjective"/></label>
                        </li>
                        <li>
                            <label>조사<input type="radio" id="adverb"/></label>
                        </li>
                        <li>
                            <label>형용사<input type="radio" id="measurement"/></label>
                        </li>
                        <li>
                            <label>접사<input type="radio" id="phrases"/></label>
                        </li>
                        <li>
                            <label>부사<input type="radio" id="conjunction"/></label>
                        </li>
                        <li>
                            <label>감동사<input type="radio" id="numeral"/></label>
                        </li>
                        <li>
                            <label>형용동사<input type="radio" id="pronoun"/></label>
                        </li>
                        <li>
                            <label>기타<input type="radio" id="interjection"/></label>
                        </li>
                    </S.TagList>
                </S.WorldClass>
            </S.SelectDiv>
            <S.List>
                
            </S.List>
            <S.PageDiv>

            </S.PageDiv>
        </S.Body>
    )
}

function getHTML(query){
    try {
        return axios.get(`/word`, {params: query});
    }catch(err){
        console.log(err);
    }
}

function getWord(query){
    return new Promise((resolve, reject) => {
        getHTML(query)
            .then((html) => {
                console.log(html);
                const arr = [];
                const $ = cheerio.load(html.data);
                $("li .row").map(function(i, element){
                    var row = {readings: "", pronunciation: "", sound: "", mean: "", word_class: ""}
                    row.readings = String($(element).find('.origin > .link').text());
                    row.sound = String($(element).find('.origin > .unit_Taglisten > .btn_Taglisten play mp3').attr("purl"));
                    row.mean = String($(element).find('.meanTaglist > .mean_item').text());
                    row.word_class = String($(element).find('.meanTaglist > .mean_item > .word_class').text());
                    arr.push(row);
                })
                resolve(arr);
            resolve(arr);
        })
    })
}

Word.getInitialProps = async function (context) {

    const query = context.query;;
    const data = await getWord(query);

    console.log(data);

    return {
        props: {data}
    }
}

export default Word