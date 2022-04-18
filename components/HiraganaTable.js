const HiraganaTable = ({writting, setWord, setOnCanvas}) => {

    const clickTd = (i) => {
        if(writting){
            if(i.target.outerText.length !== 8 && i.target.outerText !== undefined){
                setWord(i.target.outerText[0]);
                setOnCanvas(true);
            }
        }
        else if(!writting){
            const s = window.speechSynthesis;
            s.cancel();
            console.log(i.target.outerText[1]);
                if(i.target.outerText[1] === "ゃ" || "ゅ" || "ょ" || "ャ" || "ュ" || "ョ"){
                    console.log("1 : " + i.target.outerText[0] + i.target.outerText[1])
                    const utterThis = new SpeechSynthesisUtterance(i.target.outerText[0] + i.target.outerText[1]);
                    utterThis.lang = 'ja-JP';
                    s.speak(utterThis);
                }
                else{
                    console.log("1 : " + i.target.outerText[0])
                    const utterThis = new SpeechSynthesisUtterance(i.target.outerText[0]);
                    utterThis.lang = 'ja-JP';
                    s.speak(utterThis);
                }
        }
    }

    return(
        <>
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
                <td onClick={(e)=>clickTd(e)}><b>あ</b><br/>a 아</td>
                <td onClick={(e)=>clickTd(e)}><b>い</b><br/>i 이</td>
                <td onClick={(e)=>clickTd(e)}><b>う</b><br/>u 우</td>
                <td onClick={(e)=>clickTd(e)}><b>え</b><br/>e 에</td>
                <td onClick={(e)=>clickTd(e)}><b>お</b><br/>o 오</td>
                <td></td>
                <td></td>
                <td>
            </td></tr>
            <tr>
            <th>か행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>か</b><br/>ka 카</td>
                <td onClick={(e)=>clickTd(e)}><b>き</b><br/>ki 키</td>
                <td onClick={(e)=>clickTd(e)}><b>く</b><br/>ku 쿠</td>
                <td onClick={(e)=>clickTd(e)}><b>け</b><br/>ke 케</td>
                <td onClick={(e)=>clickTd(e)}><b>こ</b><br/>ko 코</td>
                <td onClick={(e)=>clickTd(e)}><b>きゃ</b><br/>kya 캬</td>
                <td onClick={(e)=>clickTd(e)}><b>きゅ</b><br/>kyu 큐</td>
                <td onClick={(e)=>clickTd(e)}><b>きょ</b><br/>kyo 쿄
            </td></tr>
            <tr>
            <th>さ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>さ</b><br/>sa 사</td>
                <td onClick={(e)=>clickTd(e)}><b>し</b><br/>shi 시</td>
                <td onClick={(e)=>clickTd(e)}><b>す</b><br/>su 스</td>
                <td onClick={(e)=>clickTd(e)}><b>せ</b><br/>se 세</td>
                <td onClick={(e)=>clickTd(e)}><b>そ</b><br/>so 소</td>
                <td onClick={(e)=>clickTd(e)}><b>しゃ</b><br/>sha 샤</td>
                <td onClick={(e)=>clickTd(e)}><b>しゅ</b><br/>shu 슈</td>
                <td onClick={(e)=>clickTd(e)}><b>しょ</b><br/>sho 쇼
            </td></tr>
            <tr>
            <th>た행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>た</b><br/>ta 타</td>
                <td onClick={(e)=>clickTd(e)}><b>ち</b><br/>chi 치</td>
                <td onClick={(e)=>clickTd(e)}><b>つ</b><br/>tsu 츠</td>
                <td onClick={(e)=>clickTd(e)}><b>て</b><br/>te 테</td>
                <td onClick={(e)=>clickTd(e)}><b>と</b><br/>to 토</td>
                <td onClick={(e)=>clickTd(e)}><b>ちゃ</b><br/>cha 차</td>
                <td onClick={(e)=>clickTd(e)}><b>ちゅ</b><br/>chu 추</td>
                <td onClick={(e)=>clickTd(e)}><b>ちょ</b><br/>cho 초
            </td></tr>
            <tr>
            <th>な행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>な</b><br/>na 나</td>
                <td onClick={(e)=>clickTd(e)}><b>に</b><br/>ni 니</td>
                <td onClick={(e)=>clickTd(e)}><b>ぬ</b><br/>nu 누</td>
                <td onClick={(e)=>clickTd(e)}><b>ね</b><br/>ne 네</td>
                <td onClick={(e)=>clickTd(e)}><b>の</b><br/>no 노</td>
                <td onClick={(e)=>clickTd(e)}><b>にゃ</b><br/>nya 냐</td>
                <td onClick={(e)=>clickTd(e)}><b>にゅ</b><br/>nyu 뉴</td>
                <td onClick={(e)=>clickTd(e)}><b>にょ</b><br/>nyo 뇨
            </td></tr>
            <tr>
            <th>は행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>は</b><br/>ha 하</td>
                <td onClick={(e)=>clickTd(e)}><b>ひ</b><br/>hi 히</td>
                <td onClick={(e)=>clickTd(e)}><b>ふ</b><br/>fu 후</td>
                <td onClick={(e)=>clickTd(e)}><b>へ</b><br/>he 헤</td>
                <td onClick={(e)=>clickTd(e)}><b>ほ</b><br/>ho 호</td>
                <td onClick={(e)=>clickTd(e)}><b>ひゃ</b><br/>hya 햐</td>
                <td onClick={(e)=>clickTd(e)}><b>ひゅ</b><br/>hyu 휴</td>
                <td onClick={(e)=>clickTd(e)}><b>ひょ</b><br/>hyo 효
            </td></tr>
            <tr>
            <th>ま행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ま</b><br/>ma 마</td>
                <td onClick={(e)=>clickTd(e)}><b>み</b><br/>mi 미</td>
                <td onClick={(e)=>clickTd(e)}><b>む</b><br/>mu 무</td>
                <td onClick={(e)=>clickTd(e)}><b>め</b><br/>me 메</td>
                <td onClick={(e)=>clickTd(e)}><b>も</b><br/>mo 모</td>
                <td onClick={(e)=>clickTd(e)}><b>みゃ</b><br/>mya 먀</td>
                <td onClick={(e)=>clickTd(e)}><b>みゅ</b><br/>myu 뮤</td>
                <td onClick={(e)=>clickTd(e)}><b>みょ</b><br/>myo 묘
            </td></tr>
            <tr>
            <th>や행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>や</b><br/>ya 야</td>
                <td></td>
                <td onClick={(e)=>clickTd(e)}><b>ゆ</b><br/>yu 유</td>
                <td></td>
                <td onClick={(e)=>clickTd(e)}><b>よ</b><br/>yo 요</td>
                <td></td>
                <td></td>
                <td>
            </td></tr>
            <tr>
            <th>ら행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ら</b><br/>ra 라</td>
                <td onClick={(e)=>clickTd(e)}><b>り</b><br/>ri 리</td>
                <td onClick={(e)=>clickTd(e)}><b>る</b><br/>ru 루</td>
                <td onClick={(e)=>clickTd(e)}><b>れ</b><br/>re 레</td>
                <td onClick={(e)=>clickTd(e)}><b>ろ</b><br/>ro 로</td>
                <td onClick={(e)=>clickTd(e)}><b>りゃ</b><br/>rya 랴</td>
                <td onClick={(e)=>clickTd(e)}><b>りゅ</b><br/>ryu 류</td>
                <td onClick={(e)=>clickTd(e)}><b>りょ</b><br/>ryo 료
            </td></tr>
            <tr>
            <th>わ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>わ</b><br/>wa 와</td>
                <td><span style={{color:"grey"}}><b>ゐ</b><br/>wi 이</span></td>
                <td></td>
                <td><span style={{color:"grey"}}><b>ゑ</b><br/>we 에</span></td>
                <td onClick={(e)=>clickTd(e)}><b>を</b><br/>wo 오</td>
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
                <td onClick={(e)=>clickTd(e)}><b>ん</b><br/>n -ㄴ</td>
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
        <td onClick={(e)=>clickTd(e)}><b>が</b><br/>ga 가</td>
        <td onClick={(e)=>clickTd(e)}><b>ぎ</b><br/>gi 기</td>
        <td onClick={(e)=>clickTd(e)}><b>ぐ</b><br/>gu 구</td>
        <td onClick={(e)=>clickTd(e)}><b>げ</b><br/>ge 게</td>
        <td onClick={(e)=>clickTd(e)}><b>ご</b><br/>go 고</td>
        <td onClick={(e)=>clickTd(e)}><b>ぎゃ</b><br/>gya 갸</td>
        <td onClick={(e)=>clickTd(e)}><b>ぎゅ</b><br/>gyu 규</td>
        <td onClick={(e)=>clickTd(e)}><b>ぎょ</b><br/>gyo 교
        </td></tr>
        <tr>
        <th>ざ행
        </th>
        <td onClick={(e)=>clickTd(e)}><b>ざ</b><br/>za 자</td>
        <td onClick={(e)=>clickTd(e)}><b>じ</b><br/>ji 지</td>
        <td onClick={(e)=>clickTd(e)}><b>ず</b><br/>zu 즈</td>
        <td onClick={(e)=>clickTd(e)}><b>ぜ</b><br/>ze 제</td>
        <td onClick={(e)=>clickTd(e)}><b>ぞ</b><br/>zo 조</td>
        <td onClick={(e)=>clickTd(e)}><b>じゃ</b><br/>ja 자</td>
        <td onClick={(e)=>clickTd(e)}><b>じゅ</b><br/>ju 주</td>
        <td onClick={(e)=>clickTd(e)}><b>じょ</b><br/>jo 조
        </td></tr>
        <tr>
        <th>だ행
        </th>
        <td onClick={(e)=>clickTd(e)}><b>だ</b><br/>da 다</td>
        <td onClick={(e)=>clickTd(e)}><b>ぢ</b><br/>ji 지</td>
        <td onClick={(e)=>clickTd(e)}><b>づ</b><br/>zu 즈</td>
        <td onClick={(e)=>clickTd(e)}><b>で</b><br/>de 데</td>
        <td onClick={(e)=>clickTd(e)}><b>ど</b><br/>do 도</td>
        <td onClick={(e)=>clickTd(e)}><b>ぢゃ</b><br/>ja 자</td>
        <td onClick={(e)=>clickTd(e)}><b>ぢゅ</b><br/>ju 주</td>
        <td onClick={(e)=>clickTd(e)}><b>ぢょ</b><br/>jo 조
        </td></tr>
        <tr>
        <th>ば행
        </th>
        <td onClick={(e)=>clickTd(e)}><b>ば</b><br/>ba 바</td>
        <td onClick={(e)=>clickTd(e)}><b>び</b><br/>bi 비</td>
        <td onClick={(e)=>clickTd(e)}><b>ぶ</b><br/>bu 부</td>
        <td onClick={(e)=>clickTd(e)}><b>べ</b><br/>be 베</td>
        <td onClick={(e)=>clickTd(e)}><b>ぼ</b><br/>bo 보</td>
        <td onClick={(e)=>clickTd(e)}><b>びゃ</b><br/>bya 뱌</td>
        <td onClick={(e)=>clickTd(e)}><b>びゅ</b><br/>byu 뷰</td>
        <td onClick={(e)=>clickTd(e)}><b>びょ</b><br/>byo 뵤
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
        <td onClick={(e)=>clickTd(e)}><b>ぱ</b><br/>pa 파</td>
        <td onClick={(e)=>clickTd(e)}><b>ぴ</b><br/>pi 피</td>
        <td onClick={(e)=>clickTd(e)}><b>ぷ</b><br/>pu 푸</td>
        <td onClick={(e)=>clickTd(e)}><b>ぺ</b><br/>pe 페</td>
        <td onClick={(e)=>clickTd(e)}><b>ぽ</b><br/>po 포</td>
        <td onClick={(e)=>clickTd(e)}><b>ぴゃ</b><br/>pya 퍄</td>
        <td onClick={(e)=>clickTd(e)}><b>ぴゅ</b><br/>pyu 퓨</td>
        <td onClick={(e)=>clickTd(e)}><b>ぴょ</b><br/>pyo 표
        </td></tr>
        </tbody>
        </table>
        </>
    )
}

export default HiraganaTable