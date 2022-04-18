import { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import * as S from '../../styles/gana'
import $ from 'jquery';
import HiraganaTable from '../../components/HiraganaTable'
import KataganaTable from '../../components/KataganaTable'

const Hiragana: NextPage<{}> = () => {

    const router = useRouter();
    const [writting, setWritting] = useState(true);
    const {gana} = router.query;
    const [onCanvas, setOnCanvas] = useState(false);
    const [painting, setPainting] = useState(false);
    const [word, setWord] = useState("");
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

    useEffect(() => {
        if(onCanvas){
            const canvas: any = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.font = '400px serif';
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.textAlign = "center";
            ctx.fillText(word, canvas.width/2, 400);
        }
    },[onCanvas])

    useEffect(() => {
        $(".background").click(function(e){
            if(!$(".canvas").has(e.target).length && onCanvas){
                setOnCanvas(false);
            }
        })
    })
    
    function startPainting(event: any){
        const canvas: any = document.getElementById("canvas");
        const ctx: any = canvas.getContext('2d');

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
        const canvas: any = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.closePath();
        setPainting(false);
    }

    function onMouseMove(event: any){
        const canvas: any  = document.getElementById("canvas");
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

        const canvas: any = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = '400px serif';
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.textAlign = "center";
        ctx.fillText(word, canvas.width/2, 400);
    }
  
    // Log the properties of the voices in the list

    return(
        <>
        <S.Body>
        <S.PathDiv>
            <Link href={'/gana/hiragana'}>
                <S.Path selected={gana !== "katagana"}>히라가나 (平仮名)</S.Path>
            </Link>
            <Link href={'/gana/katagana'}>
                <S.Path selected={gana === "katagana"}>가타카나 (片仮名)</S.Path>
            </Link>
        </S.PathDiv>
        <S.TittleDiv>
            {gana !== "katagana" ?
                <h3>히리가나 50음도</h3>
                :
                <h3>가타카나 50음도</h3>
            }
            <S.Mode>
                <b>{writting ? "쓰기" : "듣기"}</b>
                <S.Toggle checked={!writting} onClick={()=>{setWritting(!writting)}}>
                <input type="checkbox" checked={!writting}/>
                <span />
                </S.Toggle>
            </S.Mode>
        </S.TittleDiv>
        {gana !== "katagana" ?
        <HiraganaTable writting={writting} setWord={setWord} setOnCanvas={setOnCanvas}/>
        :
        <KataganaTable writting={writting} setWord={setWord} setOnCanvas={setOnCanvas}/>
        }
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
        <h3>장음</h3>
        <S.Comment>あ단의 장음은 뒤에 あ를 붙여서 표기한다. (이하 -aあ로 표기)</S.Comment>
        <S.Comment>い단의 장음은 뒤에 い를 붙여서 표기한다. (이하 -iい로 표기)</S.Comment>
        <S.Comment>う단의 장음은 뒤에 う를 붙여서 표기한다. (이하 -uう로 표기)</S.Comment>
        <S.Comment>え단의 장음은 뒤에 い나 え나를 붙여서 표기한다. (이하 -eい, -eえ로 표기)</S.Comment>
        <S.Comment>お단의 장음은 뒤에 う나 お를 붙여서 표기한다. (이하 -oう, -oお로 표기)</S.Comment><br/>
        <S.Comment>히라가나(平仮名): 음절문자. 주로 형식형태소(조사나 어미)를 표기할 때 쓴다.</S.Comment>
        <S.Comment>가타카나(片仮名): 음절문자. 주로 외래어를 표기할 때 쓰거나, 히라가나로 쓰는 단어라도, 강조하는 의미라면 가타카나로 표기한다.</S.Comment>
        </S.Body>
            <>
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
        </>
    )   
}

export default Hiragana