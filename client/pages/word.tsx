import { NextPage } from 'next'
import axios from 'axios'
import cheerio from 'cheerio'
import * as S from '../styles/word'
/*
function getHTML(kanji){
    kanji = encodeURI(kanji);
    try {
        return axios.get(`/word/${kanji}`);
    }catch(err){
        console.log(err);
    }
}*/

const Word = () => {
    return(
        <S.Body>
            <S.SelectDiv>
                <S.Rank>
                    <S.Tit>등급</S.Tit>
                    <div className="cont my_jlpt_condition">
                        <S.List>
                            <li className="item">
                                <label>1급<input type="radio" name="level" id="level1" className="inp_check"/></label>
                            </li>
                            <li>
                                <label>2급<input type="radio" name="level" id="level2" className="inp_check"/></label>
                            </li>
                            <li>
                                <label>3급<input type="radio" name="level" id="level3" className="inp_check"/></label>
                            </li>
                            <li>
                                <label>4급<input type="radio" name="level" id="level4" className="inp_check"/></label>
                            </li>
                            <li>
                                <label>5급<input type="radio" name="level" id="level5" className="inp_check"/></label>
                            </li>
                        </S.List>
                    </div>
                </S.Rank>
                <div className="cell word_className">
                    <S.Tit>품사</S.Tit>
                    <div className="cont my_jlpt_condition">
                        <S.List>
                            <li className="item">
                                <label className="inp_label my_inp_part_label is-active">전체<input type="radio" name="level" id="allClassNamclassName" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>명사<input type="radio" name="level" id="noun" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>대명사<input type="radio" name="level" id="verb" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>동사<input type="radio" name="level" id="adjective" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>조사<input type="radio" name="level" id="adverb" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>형용사<input type="radio" name="level" id="measurement" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>접사<input type="radio" name="level" id="phrases" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>부사<input type="radio" name="level" id="conjunction" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>감동사<input type="radio" name="level" id="numeral" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>형용동사<input type="radio" name="level" id="pronoun" className="inp_check"/></label>
                            </li>
                            <li className="item">
                                <label>기타<input type="radio" name="level" id="interjection" className="inp_check"/></label>
                            </li>
                        </S.List>
                    </div>
                </div>
                <div className="btn_cell"><button type="button"><i className="ico">접고/펼치기</i></button></div>
            </S.SelectDiv>
        </S.Body>
    )
}

export default Word