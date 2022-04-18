const KataganaTable = ({writting, setWord, setOnCanvas}) => {

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
                <td onClick={(e)=>clickTd(e)}><b>ア</b><br/>a 아</td>
                <td onClick={(e)=>clickTd(e)}><b>イ</b><br/>i 이</td>
                <td onClick={(e)=>clickTd(e)}><b>ウ</b><br/>u 우</td>
                <td onClick={(e)=>clickTd(e)}><b>エ</b><br/>e 에</td>
                <td onClick={(e)=>clickTd(e)}><b>オ</b><br/>o 오</td>
                <td></td>
                <td></td>
                <td>
            </td></tr>
            <tr>
            <th>か행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>カ</b><br/>ka 카</td>
                <td onClick={(e)=>clickTd(e)}><b>キ</b><br/>ki 키</td>
                <td onClick={(e)=>clickTd(e)}><b>ク</b><br/>ku 쿠</td>
                <td onClick={(e)=>clickTd(e)}><b>ケ</b><br/>ke 케</td>
                <td onClick={(e)=>clickTd(e)}><b>コ</b><br/>ko 코</td>
                <td onClick={(e)=>clickTd(e)}><b>キャ</b><br/>kya 캬</td>
                <td onClick={(e)=>clickTd(e)}><b>キュ</b><br/>kyu 큐</td>
                <td onClick={(e)=>clickTd(e)}><b>キョ</b><br/>kyo 쿄
            </td></tr>
            <tr>
            <th>さ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>サ</b><br/>sa 사</td>
                <td onClick={(e)=>clickTd(e)}><b>シ</b><br/>shi 시</td>
                <td onClick={(e)=>clickTd(e)}><b>ス</b><br/>su 스</td>
                <td onClick={(e)=>clickTd(e)}><b>セ</b><br/>se 세</td>
                <td onClick={(e)=>clickTd(e)}><b>ソ</b><br/>so 소</td>
                <td onClick={(e)=>clickTd(e)}><b>シャ</b><br/>sha 샤</td>
                <td onClick={(e)=>clickTd(e)}><b>シュ</b><br/>shu 슈</td>
                <td onClick={(e)=>clickTd(e)}><b>ショ</b><br/>sho 쇼
            </td></tr>
            <tr>
            <th>た행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>タ</b><br/>ta 타</td>
                <td onClick={(e)=>clickTd(e)}><b>チ</b><br/>chi 치</td>
                <td onClick={(e)=>clickTd(e)}><b>ツ</b><br/>tsu 츠</td>
                <td onClick={(e)=>clickTd(e)}><b>テ</b><br/>te 테</td>
                <td onClick={(e)=>clickTd(e)}><b>ト</b><br/>to 토</td>
                <td onClick={(e)=>clickTd(e)}><b>チャ</b><br/>cha 차</td>
                <td onClick={(e)=>clickTd(e)}><b>チュ</b><br/>chu 추</td>
                <td onClick={(e)=>clickTd(e)}><b>チョ</b><br/>cho 초
            </td></tr>
            <tr>
            <th>な행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ナ</b><br/>na 나</td>
                <td onClick={(e)=>clickTd(e)}><b>二</b><br/>ni 니</td>
                <td onClick={(e)=>clickTd(e)}><b>ヌ</b><br/>nu 누</td>
                <td onClick={(e)=>clickTd(e)}><b>ネ</b><br/>ne 네</td>
                <td onClick={(e)=>clickTd(e)}><b>ノ</b><br/>no 노</td>
                <td onClick={(e)=>clickTd(e)}><b>二ャ</b><br/>nya 냐</td>
                <td onClick={(e)=>clickTd(e)}><b>二ュ</b><br/>nyu 뉴</td>
                <td onClick={(e)=>clickTd(e)}><b>二ョ</b><br/>nyo 뇨
            </td></tr>
            <tr>
            <th>は행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ハ</b><br/>ha 하</td>
                <td onClick={(e)=>clickTd(e)}><b>ヒ</b><br/>hi 히</td>
                <td onClick={(e)=>clickTd(e)}><b>フ</b><br/>fu 후</td>
                <td onClick={(e)=>clickTd(e)}><b>ヘ</b><br/>he 헤</td>
                <td onClick={(e)=>clickTd(e)}><b>ホ</b><br/>ho 호</td>
                <td onClick={(e)=>clickTd(e)}><b>ヒャ</b><br/>hya 햐</td>
                <td onClick={(e)=>clickTd(e)}><b>ヒュ</b><br/>hyu 휴</td>
                <td onClick={(e)=>clickTd(e)}><b>ヒョ</b><br/>hyo 효
            </td></tr>
            <tr>
            <th>ま행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>マ</b><br/>ma 마</td>
                <td onClick={(e)=>clickTd(e)}><b>ミ</b><br/>mi 미</td>
                <td onClick={(e)=>clickTd(e)}><b>ム</b><br/>mu 무</td>
                <td onClick={(e)=>clickTd(e)}><b>メ</b><br/>me 메</td>
                <td onClick={(e)=>clickTd(e)}><b>モ</b><br/>mo 모</td>
                <td onClick={(e)=>clickTd(e)}><b>ミャ</b><br/>mya 먀</td>
                <td onClick={(e)=>clickTd(e)}><b>ミュ</b><br/>myu 뮤</td>
                <td onClick={(e)=>clickTd(e)}><b>ミョ</b><br/>myo 묘
            </td></tr>
            <tr>
            <th>や행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ヤ</b><br/>ya 야</td>
                <td></td>
                <td onClick={(e)=>clickTd(e)}><b>ユ</b><br/>yu 유</td>
                <td></td>
                <td onClick={(e)=>clickTd(e)}><b>ヨ</b><br/>yo 요</td>
                <td></td>
                <td></td>
                <td>
            </td></tr>
            <tr>
            <th>ら행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ラ</b><br/>ra 라</td>
                <td onClick={(e)=>clickTd(e)}><b>リ</b><br/>ri 리</td>
                <td onClick={(e)=>clickTd(e)}><b>ル</b><br/>ru 루</td>
                <td onClick={(e)=>clickTd(e)}><b>レ</b><br/>re 레</td>
                <td onClick={(e)=>clickTd(e)}><b>ロ</b><br/>ro 로</td>
                <td onClick={(e)=>clickTd(e)}><b>リャ</b><br/>rya 랴</td>
                <td onClick={(e)=>clickTd(e)}><b>リュ</b><br/>ryu 류</td>
                <td onClick={(e)=>clickTd(e)}><b>リョ</b><br/>ryo 료
            </td></tr>
            <tr>
            <th>わ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ワ</b><br/>wa 와</td>
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
                <td onClick={(e)=>clickTd(e)}><b>ン</b><br/>n -ㄴ</td>
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
                <td onClick={(e)=>clickTd(e)}><b>ガ</b><br/>ga 가</td>
                <td onClick={(e)=>clickTd(e)}><b>ギ</b><br/>gi 기</td>
                <td onClick={(e)=>clickTd(e)}><b>グ</b><br/>gu 구</td>
                <td onClick={(e)=>clickTd(e)}><b>ゲ</b><br/>ge 게</td>
                <td onClick={(e)=>clickTd(e)}><b>ゴ</b><br/>go 고</td>
                <td onClick={(e)=>clickTd(e)}><b>ギャ</b><br/>gya 갸</td>
                <td onClick={(e)=>clickTd(e)}><b>ギュ</b><br/>gyu 규</td>
                <td onClick={(e)=>clickTd(e)}><b>ギョ</b><br/>gyo 교
            </td></tr>
            <tr>
            <th>ざ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ザ</b><br/>za 자</td>
                <td onClick={(e)=>clickTd(e)}><b>ジ</b><br/>ji 지</td>
                <td onClick={(e)=>clickTd(e)}><b>ズ</b><br/>zu 즈</td>
                <td onClick={(e)=>clickTd(e)}><b>ゼ</b><br/>ze 제</td>
                <td onClick={(e)=>clickTd(e)}><b>ゾ</b><br/>zo 조</td>
                <td onClick={(e)=>clickTd(e)}><b>ジャ</b><br/>ja 자</td>
                <td onClick={(e)=>clickTd(e)}><b>ジュ</b><br/>ju 주</td>
                <td onClick={(e)=>clickTd(e)}><b>ジョ</b><br/>jo 조
            </td></tr>
            <tr>
            <th>だ행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>ダ</b><br/>da 다</td>
                <td><span style={{color: "grey"}}><b>ヂ</b><br/>ji 지</span></td>
                <td><span style={{color: "grey"}}><b>ヅ</b><br/>zu 즈</span></td>
                <td onClick={(e)=>clickTd(e)}><b>デ</b><br/>de 데</td>
                <td onClick={(e)=>clickTd(e)}><b>ド</b><br/>do 도</td>
                <td><span style={{color: "grey"}}><b>ヂャ</b><br/>ja 자</span></td>
                <td><span style={{color: "grey"}}><b>ヂュ</b><br/>ju 주</span></td>
                <td><span style={{color: "grey"}}><b>ヂョ</b><br/>jo 조</span>
            </td></tr>
            <tr>
            <th>ば행
            </th>
                <td onClick={(e)=>clickTd(e)}><b>バ</b><br/>ba 바</td>
                <td onClick={(e)=>clickTd(e)}><b>ビ</b><br/>bi 비</td>
                <td onClick={(e)=>clickTd(e)}><b>ブ</b><br/>bu 부</td>
                <td onClick={(e)=>clickTd(e)}><b>ベ</b><br/>be 베</td>
                <td onClick={(e)=>clickTd(e)}><b>ボ</b><br/>bo 보</td>
                <td onClick={(e)=>clickTd(e)}><b>ビャ</b><br/>bya 뱌</td>
                <td onClick={(e)=>clickTd(e)}><b>ビュ</b><br/>byu 뷰</td>
                <td onClick={(e)=>clickTd(e)}><b>ビョ</b><br/>byo 뵤
            </td></tr>
            </tbody>
        </table>
        </>
    )
}

export default KataganaTable