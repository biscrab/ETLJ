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
                <S.Path selected={gana !== "katagana"}>???????????? (?????????)</S.Path>
            </Link>
            <Link href={'/gana/katagana'}>
                <S.Path selected={gana === "katagana"}>???????????? (?????????)</S.Path>
            </Link>
        </S.PathDiv>
        <S.TittleDiv>
            {gana !== "katagana" ?
                <h3>???????????? 50??????</h3>
                :
                <h3>???????????? 50??????</h3>
            }
            <S.Mode>
                <b>{writting ? "??????" : "??????"}</b>
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
        <h3>?????????</h3>
        <table>
            <tbody>
            <tr>
            <th colSpan={9}>?????????</th>
            </tr>
            <tr>
            <th>??????</th>
                <td><b>???</b><br/>pa ???</td>
                <td><b>???</b><br/>pi ???</td>
                <td><b>???</b><br/>pu ???</td>
                <td><b>???</b><br/>pe ???</td>
                <td><b>???</b><br/>po ???</td>
                <td><b>??????</b><br/>pya ???</td>
                <td><b>??????</b><br/>pyu ???</td>
                <td><b>??????</b><br/>pyo ???</td>
            </tr>
            </tbody>
        </table>
        <h3>??????</h3>
        <S.Comment>????????? ????????? ?????? ?????? ????????? ????????????. (?????? -a?????? ??????)</S.Comment>
        <S.Comment>????????? ????????? ?????? ?????? ????????? ????????????. (?????? -i?????? ??????)</S.Comment>
        <S.Comment>????????? ????????? ?????? ?????? ????????? ????????????. (?????? -u?????? ??????)</S.Comment>
        <S.Comment>????????? ????????? ?????? ?????? ????????? ????????? ????????????. (?????? -e???, -e?????? ??????)</S.Comment>
        <S.Comment>????????? ????????? ?????? ?????? ?????? ????????? ????????????. (?????? -o???, -o?????? ??????)</S.Comment><br/>
        <S.Comment>????????????(?????????): ????????????. ?????? ???????????????(????????? ??????)??? ????????? ??? ??????.</S.Comment>
        <S.Comment>????????????(?????????): ????????????. ?????? ???????????? ????????? ??? ?????????, ??????????????? ?????? ????????????, ???????????? ???????????? ??????????????? ????????????.</S.Comment>
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