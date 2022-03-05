import Link from "next/link"
import * as S from '../styles/header'

const Header = () => {
    return(
        <S.Header>
            <S.Title>
                <Link href={"/"}>EasyToLearnJapanese</Link>
            </S.Title>
            <S.PathDiv>
                <Link href={"/gana/hiragana"}>
                    <span>히라가나</span>
                </Link>
                <Link href={"/gana/katagana"}>
                    <span>가타가나</span>
                </Link>
                <Link href={"/kanji"}>
                    <span>한자</span>
                </Link>
                <Link href={"/word"}>
                    <span>단어</span>
                </Link>
                <Link href={"/explanation"}>
                    <span>설명</span>
                </Link>
            </S.PathDiv>
        </S.Header>
    )
}

export default Header