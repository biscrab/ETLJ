import { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import * as S from '../../styles/gana'
import $ from 'jquery';
import cheerio from 'cheerio'

const Hiragana: NextPage<{}> = () => {

    const router = useRouter();
    const {gana} = router.query;
/*
    const speech = new Speech();

    Speech.init({
        'volume': 1,
         'lang': 'en-GB',
         'rate': 1,
         'pitch': 1,
         'voice':'Google UK English Male',
         'splitSentences': true,
         'listeners': {
             'onvoiceschanged': (voices: any) => {
                 console.log("Event voiceschanged", voices)
             }
         }
    })*/

    const [synth, setSynth] = useState<any>();

    useEffect(()=>{
        const s = window.speechSynthesis;
        let speech = new SpeechSynthesisUtterance();
        setSynth(s);
        var voices = s.getVoices();
        var utterThis = new SpeechSynthesisUtterance("test")
        //s.speak(utterThis)
    },[])

    useEffect(()=>{
        $('td').click((i: any) => {
            const s = window.speechSynthesis;
            s.cancel();
            console.log(i.target.outerText[0]);
            const utterThis = new SpeechSynthesisUtterance(i.target.outerText[0]);
            utterThis.lang = 'ja-JP';
            s.speak(utterThis);
        })
    })
  
    // Log the properties of the voices in the list

    return(
        <S.Body>
        <S.PathDiv>
            <Link href={'/gana/hiragana'}>
                <S.Path selected={gana !== "katagana"}>히라가나 (平仮名)</S.Path>
            </Link>
            <Link href={'/gana/katagana'}>
                <S.Path selected={gana === "katagana"}>가타카나 (片仮名)</S.Path>
            </Link>
        </S.PathDiv>
        <>
        {gana !== "katagana" ?
        <>
        <h3 onClick={()=>synth.speak(new SpeechSynthesisUtterance("te"))}>히리가나 50음도</h3>
        <table>
        <tbody>
            <tr>
            <th colSpan={6}>50음도
            </th>
            <th colSpan={3}>요음
            </th></tr>
            <tr>
            <th></th>
            <th>あ단</th>
            <th>い단</th>
            <th>う단</th>
            <th>え단</th>
            <th>お단</th>
            <th>ゃ</th>
            <th>ゅ</th>
            <th>ょ</th>
            </tr>
            <tr>
            <th>あ행</th>
            <td><b>あ</b><br/>a 아</td>
            <td><b>い</b><br/>i 이</td>
            <td><b>う</b><br/>u 우</td>
            <td><b>え</b><br/>e 에</td>
            <td><b>お</b><br/>o 오</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>か행
            </th>
            <td><b>か</b><br/>ka 카</td>
            <td><b>き</b><br/>ki 키</td>
            <td><b>く</b><br/>ku 쿠</td>
            <td><b>け</b><br/>ke 케</td>
            <td><b>こ</b><br/>ko 코</td>
            <td><b>きゃ</b><br/>kya 캬</td>
            <td><b>きゅ</b><br/>kyu 큐</td>
            <td><b>きょ</b><br/>kyo 쿄
            </td></tr>
            <tr>
            <th>さ행
            </th>
            <td><b>さ</b><br/>sa 사</td>
            <td><b>し</b><br/>shi 시</td>
            <td><b>す</b><br/>su 스</td>
            <td><b>せ</b><br/>se 세</td>
            <td><b>そ</b><br/>so 소</td>
            <td><b>しゃ</b><br/>sha 샤</td>
            <td><b>しゅ</b><br/>shu 슈</td>
            <td><b>しょ</b><br/>sho 쇼
            </td></tr>
            <tr>
            <th>た행
            </th>
            <td><b>た</b><br/>ta 타</td>
            <td><b>ち</b><br/>chi 치</td>
            <td><b>つ</b><br/>tsu 츠</td>
            <td><b>て</b><br/>te 테</td>
            <td><b>と</b><br/>to 토</td>
            <td><b>ちゃ</b><br/>cha 차</td>
            <td><b>ちゅ</b><br/>chu 추</td>
            <td><b>ちょ</b><br/>cho 초
            </td></tr>
            <tr>
            <th>な행
            </th>
            <td><b>な</b><br/>na 나</td>
            <td><b>に</b><br/>ni 니</td>
            <td><b>ぬ</b><br/>nu 누</td>
            <td><b>ね</b><br/>ne 네</td>
            <td><b>の</b><br/>no 노</td>
            <td><b>にゃ</b><br/>nya 냐</td>
            <td><b>にゅ</b><br/>nyu 뉴</td>
            <td><b>にょ</b><br/>nyo 뇨
            </td></tr>
            <tr>
            <th>は행
            </th>
            <td><b>は</b><br/>ha 하</td>
            <td><b>ひ</b><br/>hi 히</td>
            <td><b>ふ</b><br/>fu 후</td>
            <td><b>へ</b><br/>he 헤</td>
            <td><b>ほ</b><br/>ho 호</td>
            <td><b>ひゃ</b><br/>hya 햐</td>
            <td><b>ひゅ</b><br/>hyu 휴</td>
            <td><b>ひょ</b><br/>hyo 효
            </td></tr>
            <tr>
            <th>ま행
            </th>
            <td><b>ま</b><br/>ma 마</td>
            <td><b>み</b><br/>mi 미</td>
            <td><b>む</b><br/>mu 무</td>
            <td><b>め</b><br/>me 메</td>
            <td><b>も</b><br/>mo 모</td>
            <td><b>みゃ</b><br/>mya 먀</td>
            <td><b>みゅ</b><br/>myu 뮤</td>
            <td><b>みょ</b><br/>myo 묘
            </td></tr>
            <tr>
            <th>や행
            </th>
            <td><b>や</b><br/>ya 야</td>
            <td></td>
            <td><b>ゆ</b><br/>yu 유</td>
            <td></td>
            <td><b>よ</b><br/>yo 요</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>ら행
            </th>
            <td><b>ら</b><br/>ra 라</td>
            <td><b>り</b><br/>ri 리</td>
            <td><b>る</b><br/>ru 루</td>
            <td><b>れ</b><br/>re 레</td>
            <td><b>ろ</b><br/>ro 로</td>
            <td><b>りゃ</b><br/>rya 랴</td>
            <td><b>りゅ</b><br/>ryu 류</td>
            <td><b>りょ</b><br/>ryo 료
            </td></tr>
            <tr>
            <th>わ행
            </th>
            <td><b>わ</b><br/>wa 와</td>
            <td><span style={{color:"grey"}}><b>ゐ</b><br/>wi 이</span></td>
            <td></td>
            <td><span style={{color:"grey"}}><b>ゑ</b><br/>we 에</span></td>
            <td><b>を</b><br/>wo 오</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>ん</b><br/>n -ㄴ</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
        </tbody>
        </table>
        <h3>탁음</h3>
        <table>
        <tbody><tr>
        <th colSpan={6}>탁음
        </th>
        <th colSpan={3}>요음
        </th></tr>
        <tr>
        <th>
        </th>
        <th>あ단</th>
        <th>い단</th>
        <th>う단</th>
        <th>え단</th>
        <th>お단</th>
        <th>ゃ</th>
        <th>ゅ</th>
        <th>ょ
        </th></tr>
        <tr>
        <th>が행
        </th>
        <td><b>が</b><br/>ga 가</td>
        <td><b>ぎ</b><br/>gi 기</td>
        <td><b>ぐ</b><br/>gu 구</td>
        <td><b>げ</b><br/>ge 게</td>
        <td><b>ご</b><br/>go 고</td>
        <td><b>ぎゃ</b><br/>gya 갸</td>
        <td><b>ぎゅ</b><br/>gyu 규</td>
        <td><b>ぎょ</b><br/>gyo 교
        </td></tr>
        <tr>
        <th>ざ행
        </th>
        <td><b>ざ</b><br/>za 자</td>
        <td><b>じ</b><br/>ji 지</td>
        <td><b>ず</b><br/>zu 즈</td>
        <td><b>ぜ</b><br/>ze 제</td>
        <td><b>ぞ</b><br/>zo 조</td>
        <td><b>じゃ</b><br/>ja 자</td>
        <td><b>じゅ</b><br/>ju 주</td>
        <td><b>じょ</b><br/>jo 조
        </td></tr>
        <tr>
        <th>だ행
        </th>
        <td><b>だ</b><br/>da 다</td>
        <td><b>ぢ</b><br/>ji 지</td>
        <td><b>づ</b><br/>zu 즈</td>
        <td><b>で</b><br/>de 데</td>
        <td><b>ど</b><br/>do 도</td>
        <td><b>ぢゃ</b><br/>ja 자</td>
        <td><b>ぢゅ</b><br/>ju 주</td>
        <td><b>ぢょ</b><br/>jo 조
        </td></tr>
        <tr>
        <th>ば행
        </th>
        <td><b>ば</b><br/>ba 바</td>
        <td><b>び</b><br/>bi 비</td>
        <td><b>ぶ</b><br/>bu 부</td>
        <td><b>べ</b><br/>be 베</td>
        <td><b>ぼ</b><br/>bo 보</td>
        <td><b>びゃ</b><br/>bya 뱌</td>
        <td><b>びゅ</b><br/>byu 뷰</td>
        <td><b>びょ</b><br/>byo 뵤
        </td></tr>
        </tbody>
        </table>
        <h3>반탁음</h3>
        <table>
        <tbody>
        <tr>
        <th colSpan={6}>반탁음
        </th>
        <th colSpan={3}>요음
        </th></tr>
        <tr>
        <th>
        </th>
        <th>あ단
        </th>
        <th>い단
        </th>
        <th>う단
        </th>
        <th>え단
        </th>
        <th>お단
        </th>
        <th>ゃ
        </th>
        <th>ゅ
        </th>
        <th>ょ
        </th></tr>
        <tr>
        <th>ぱ행
        </th>
        <td><b>ぱ</b><br/>pa 파</td>
        <td><b>ぴ</b><br/>pi 피</td>
        <td><b>ぷ</b><br/>pu 푸</td>
        <td><b>ぺ</b><br/>pe 페</td>
        <td><b>ぽ</b><br/>po 포</td>
        <td><b>ぴゃ</b><br/>pya 퍄</td>
        <td><b>ぴゅ</b><br/>pyu 퓨</td>
        <td><b>ぴょ</b><br/>pyo 표
        </td></tr>
        </tbody>
        </table>
        </>
        :
        <>
        <h3>가타카나 50음도</h3>
        <table>
            <tbody><tr>
            <th colSpan={6}>50음도
            </th>
            <th colSpan={3}>요음
            </th></tr>
            <tr>
            <th>
            </th>
            <th>あ단
            </th>
            <th>い단
            </th>
            <th>う단
            </th>
            <th>え단
            </th>
            <th>お단
            </th>
            <th>ゃ
            </th>
            <th>ゅ
            </th>
            <th>ょ
            </th></tr>
            <tr>
            <th>あ행
            </th>
            <td><b>ア</b><br/>a 아</td>
            <td><b>イ</b><br/>i 이</td>
            <td><b>ウ</b><br/>u 우</td>
            <td><b>エ</b><br/>e 에</td>
            <td><b>オ</b><br/>o 오</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>か행
            </th>
            <td><b>カ</b><br/>ka 카</td>
            <td><b>キ</b><br/>ki 키</td>
            <td><b>ク</b><br/>ku 쿠</td>
            <td><b>ケ</b><br/>ke 케</td>
            <td><b>コ</b><br/>ko 코</td>
            <td><b>キャ</b><br/>kya 캬</td>
            <td><b>キュ</b><br/>kyu 큐</td>
            <td><b>キョ</b><br/>kyo 쿄
            </td></tr>
            <tr>
            <th>さ행
            </th>
            <td><b>サ</b><br/>sa 사</td>
            <td><b>シ</b><br/>shi 시</td>
            <td><b>ス</b><br/>su 스</td>
            <td><b>セ</b><br/>se 세</td>
            <td><b>ソ</b><br/>so 소</td>
            <td><b>シャ</b><br/>sha 샤</td>
            <td><b>シュ</b><br/>shu 슈</td>
            <td><b>ショ</b><br/>sho 쇼
            </td></tr>
            <tr>
            <th>た행
            </th>
            <td><b>タ</b><br/>ta 타</td>
            <td><b>チ</b><br/>chi 치</td>
            <td><b>ツ</b><br/>tsu 츠</td>
            <td><b>テ</b><br/>te 테</td>
            <td><b>ト</b><br/>to 토</td>
            <td><b>チャ</b><br/>cha 차</td>
            <td><b>チュ</b><br/>chu 추</td>
            <td><b>チョ</b><br/>cho 초
            </td></tr>
            <tr>
            <th>な행
            </th>
            <td><b>ナ</b><br/>na 나</td>
            <td><b>二</b><br/>ni 니</td>
            <td><b>ヌ</b><br/>nu 누</td>
            <td><b>ネ</b><br/>ne 네</td>
            <td><b>ノ</b><br/>no 노</td>
            <td><b>二ャ</b><br/>nya 냐</td>
            <td><b>二ュ</b><br/>nyu 뉴</td>
            <td><b>二ョ</b><br/>nyo 뇨
            </td></tr>
            <tr>
            <th>は행
            </th>
            <td><b>ハ</b><br/>ha 하</td>
            <td><b>ヒ</b><br/>hi 히</td>
            <td><b>フ</b><br/>fu 후</td>
            <td><b>ヘ</b><br/>he 헤</td>
            <td><b>ホ</b><br/>ho 호</td>
            <td><b>ヒャ</b><br/>hya 햐</td>
            <td><b>ヒュ</b><br/>hyu 휴</td>
            <td><b>ヒョ</b><br/>hyo 효
            </td></tr>
            <tr>
            <th>ま행
            </th>
            <td><b>マ</b><br/>ma 마</td>
            <td><b>ミ</b><br/>mi 미</td>
            <td><b>ム</b><br/>mu 무</td>
            <td><b>メ</b><br/>me 메</td>
            <td><b>モ</b><br/>mo 모</td>
            <td><b>ミャ</b><br/>mya 먀</td>
            <td><b>ミュ</b><br/>myu 뮤</td>
            <td><b>ミョ</b><br/>myo 묘
            </td></tr>
            <tr>
            <th>や행
            </th>
            <td><b>ヤ</b><br/>ya 야</td>
            <td></td>
            <td><b>ユ</b><br/>yu 유</td>
            <td></td>
            <td><b>ヨ</b><br/>yo 요</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>ら행
            </th>
            <td><b>ラ</b><br/>ra 라</td>
            <td><b>リ</b><br/>ri 리</td>
            <td><b>ル</b><br/>ru 루</td>
            <td><b>レ</b><br/>re 레</td>
            <td><b>ロ</b><br/>ro 로</td>
            <td><b>リャ</b><br/>rya 랴</td>
            <td><b>リュ</b><br/>ryu 류</td>
            <td><b>リョ</b><br/>ryo 료
            </td></tr>
            <tr>
            <th>わ행
            </th>
            <td><b>ワ</b><br/>wa 와</td>
            <td><span style={{color: "grey"}}><b>ヰ</b><br/>wi 이</span></td>
            <td></td>
            <td><span style={{color: "grey"}}><b>ヱ</b><br/>we 에</span></td>
            <td><span style={{color: "grey"}}><b>ヲ</b><br/>wo 오</span></td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            <tr>
            <th>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>ン</b><br/>n -ㄴ</td>
            <td></td>
            <td></td>
            <td>
            </td></tr>
            </tbody>
        </table>
        <h3>탁음</h3>
        <table>
        <tbody>
            <th colSpan={9}>탁음
            </th>
            <tr>
            <th>が행
            </th>
            <td><b>ガ</b><br/>ga 가</td>
            <td><b>ギ</b><br/>gi 기</td>
            <td><b>グ</b><br/>gu 구</td>
            <td><b>ゲ</b><br/>ge 게</td>
            <td><b>ゴ</b><br/>go 고</td>
            <td><b>ギャ</b><br/>gya 갸</td>
            <td><b>ギュ</b><br/>gyu 규</td>
            <td><b>ギョ</b><br/>gyo 교
            </td></tr>
            <tr>
            <th>ざ행
            </th>
            <td><b>ザ</b><br/>za 자</td>
            <td><b>ジ</b><br/>ji 지</td>
            <td><b>ズ</b><br/>zu 즈</td>
            <td><b>ゼ</b><br/>ze 제</td>
            <td><b>ゾ</b><br/>zo 조</td>
            <td><b>ジャ</b><br/>ja 자</td>
            <td><b>ジュ</b><br/>ju 주</td>
            <td><b>ジョ</b><br/>jo 조
            </td></tr>
            <tr>
            <th>だ행
            </th>
            <td><b>ダ</b><br/>da 다</td>
            <td><span style={{color: "grey"}}><b>ヂ</b><br/>ji 지</span></td>
            <td><span style={{color: "grey"}}><b>ヅ</b><br/>zu 즈</span></td>
            <td><b>デ</b><br/>de 데</td>
            <td><b>ド</b><br/>do 도</td>
            <td><span style={{color: "grey"}}><b>ヂャ</b><br/>ja 자</span></td>
            <td><span style={{color: "grey"}}><b>ヂュ</b><br/>ju 주</span></td>
            <td><span style={{color: "grey"}}><b>ヂョ</b><br/>jo 조</span>
            </td></tr>
            <tr>
            <th>ば행
            </th>
            <td><b>バ</b><br/>ba 바</td>
            <td><b>ビ</b><br/>bi 비</td>
            <td><b>ブ</b><br/>bu 부</td>
            <td><b>ベ</b><br/>be 베</td>
            <td><b>ボ</b><br/>bo 보</td>
            <td><b>ビャ</b><br/>bya 뱌</td>
            <td><b>ビュ</b><br/>byu 뷰</td>
            <td><b>ビョ</b><br/>byo 뵤
            </td></tr>
            </tbody>
        </table>
        <h3>반탁음</h3>
        <table>
            <tbody>
            <tr>
            <th colSpan={9}>반탁음</th>
            </tr>
            <tr>
            <th>ぱ행</th>
            <td><b>パ</b><br/>pa 파</td>
            <td><b>ピ</b><br/>pi 피</td>
            <td><b>プ</b><br/>pu 푸</td>
            <td><b>ペ</b><br/>pe 페</td>
            <td><b>ポ</b><br/>po 포</td>
            <td><b>ピャ</b><br/>pya 퍄</td>
            <td><b>ピュ</b><br/>pyu 퓨</td>
            <td><b>ピョ</b><br/>pyo 표</td>
            </tr>
            </tbody>
        </table>
        </>
        }
        <h3>장음</h3>
        <S.Comment>あ단의 장음은 뒤에 あ를 붙여서 표기한다. (이하 -aあ로 표기)</S.Comment>
        <S.Comment>い단의 장음은 뒤에 い를 붙여서 표기한다. (이하 -iい로 표기)</S.Comment>
        <S.Comment>う단의 장음은 뒤에 う를 붙여서 표기한다. (이하 -uう로 표기)</S.Comment>
        <S.Comment>え단의 장음은 뒤에 い나 え나를 붙여서 표기한다. (이하 -eい, -eえ로 표기)</S.Comment>
        <S.Comment>お단의 장음은 뒤에 う나 お를 붙여서 표기한다. (이하 -oう, -oお로 표기)</S.Comment><br/>
        <S.Comment>히라가나(平仮名): 음절문자. 주로 형식형태소(조사나 어미)를 표기할 때 쓴다.</S.Comment>
        <S.Comment>가타카나(片仮名): 음절문자. 주로 외래어를 표기할 때 쓰거나, 히라가나로 쓰는 단어라도, 강조하는 의미라면 가타카나로 표기한다.</S.Comment>
        </>
        </S.Body>
    )   
}

export default Hiragana