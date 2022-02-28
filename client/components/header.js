import Link from "next/link"
import * as S from '../styles/header'

const Header = () => {
    return(
        <S.Header>
            <Link href={"/"}>EasyToLearnJapanese</Link>
        </S.Header>
    )
}

export default Header