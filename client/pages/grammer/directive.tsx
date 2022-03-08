import * as S from '../../styles/grammer'

const Directive = () => {
    return(
        <S.Body>
            <h1>지시사</h1>
            <S.Title>형태적 분류</S.Title>
            <S.SubTitle>지시대명사</S.SubTitle>
            <S.P>
            これ・それ・あれ・どれ 이것, 그것, 저것, 어느것<br/>
            ここ・そこ・あそこ・どこ 이곳, 그곳, 저곳, 어느곳<br/>
            こちら・そちら・あちら・どちら 이쪽, 그쪽, 저쪽, 어느쪽
            </S.P>
            <S.SubTitle>연체수식</S.SubTitle>
            <S.P>
            この・その・あの・どの 이, 그, 저, 어느<br/>
            こんな・そんな・あんな・どんな 이러한, 그러한, 저러한, 어떠한 ― 회화체, 비격식체<br/>
            このような・そのような・あのような・どのような 이러한, 그러한, 저러한, 어떠한 ― 문어체, 격식체<br/>
            こういう・そういう・ああいう・どういう 이런, 그런, 저런, 어떤
            </S.P>
            <S.SubTitle>연용수식</S.SubTitle>
            <S.P>
            こう・そう・ああ・どう 이리, 그리, 저리, 어찌<br/>
            こんなに・そんなに・あんなに・どんなに 이렇게, 그렇게, 저렇게, 어떻게<br/>
            このような・そのような・あのような・どのような 이렇게, 그렇게, 저렇게, 어떻게<br/>
            こんなふうに・そんなふうに・あんなふうに・どんなふうに 이런 식으로, 그런 식으로, 저런 식으로, 어떤 식으로
            </S.P>
            <S.Title>사용 맥락에 따른 분류</S.Title>
            <b>현장지시: 대화 현장에서 대상을 가리키는 것을 말한다.</b>
            <S.P>
            こ 계열: 화자에게 가까이 있는, 화자의 영역에 속하는 대상을 가리킨다.<br/>
            そ 계열: 청자에게 가까이 있는, 청자의 영역에 속하는 대상을 가리킨다.<br/>
            あ 계열: 화자와 청자로부터 멀리 있는 특정한 대상을 가리킨다.<br/>
            ど 계열: 대화 현장에 존재하지 않는 것, 불특정한 대상을 가리킨다.
            </S.P>
            <b>문맥지시: 대화의 화제에서 특정한 대상일 가리키는 것을 말한다.</b>
            <S.P>
            こ 계열: 직전의 화제에 등장한 것, 혹은 화제로 삼으려고 하는 대상을 가리킨다.<br/>
            そ 계열: 청자가 말한 내용을 받아서 말하거나, 화제에 나온 요소를 가리킨다.<br/>
            あ 계열: 화자와 청자 공통으로 알고 있는 요소를 가리킨다.<br/>
            ど 계열: 알지 못하는 요소를 가리킨다.
            </S.P>
        </S.Body>
    )
}

export default Directive