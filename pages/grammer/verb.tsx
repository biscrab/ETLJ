import * as S from '../../styles/grammer'

const Verb = () => {
    return(
        <S.Body>
            <h1>동사</h1>
            <S.Title>동사의 종류</S.Title>
            동사는 크게 세 종류로 나뉘는데, 5단(활용)동사, 1단(활용)동사, 불규칙동사 (= 변격동사)로 나눈다.<br/>            
            5단(활용)동사: 동사의 어미인 う단이 동사를 활용할 때 あいうえお 5단에 전부 걸쳐 활용을 한다고 하여 5단동사라고 부른다. 마지막 음절이 る가 아니거나, る로 끝나지만 그 앞의 음절이 あ·う·お 단인 동사를 5단동사라고 한다 [33]<br/>            
            ex) 行かない (부정형, 미연형) 行きます (ます형, 연용형)　行く (종지형, 연체형)　行け (명령형, 가정형)　行こう (청유형, 권유형)<br/>            
            1단(활용)동사: る로 끝나면서 그 앞이 い·え단인 동사를 1단동사라 부른다. 1단동사는 다시 상1단동사와 하1단동사로 나누기도 하는데, い단+る로 끝나는 동사를 상1단동사 え단+る로 끝나는 동사를 하1단 동사라고 한다. 각각 동사의 기준이 되는 う단의 1단 위 / 1단 아래에 있어서 그렇게 부르는 것이다. 예외는 밑을 참조.<br/>            
            불규칙동사 (=변격동사): する, 来る 두 가지의 동사가 있으며, 각각 サ행 변격동사, カ행 변격동사라고 부른다. 그냥 불규칙으로 외우면 된다. する는 {"'하다'"}라는 뜻 이외의 다른 뜻으로 쓰이는 경우, 5단 동사이다<br/><br/>            
            い단 + る 또는 え단 + る로 끝나는 동사가 1단 동사인지 5단 동사인지를 파악하는 방법은 한자가 포함된 동사의 기본형을 보는 것이다.<br/>            
            1단 동사는 る 앞에 붙는 い단과 え단의 음절이 한자 밖에 있으며 5단 동사는 한자 안에 있다. 예를 들면 다음과 같다.<br/>            
            1단 동사: 変(か)える, 食(た)べる, 入(い)れる, 閉(し)める 등<br/>            
            5단 동사: 帰(かえ)る, 走(はし)る, 入(はい)る, 湿(しめ)る <br/><br/>        
            당장 네이버 일본어 사전 등에서 예시로 든 かえる를 검색해보자. 다양한 뜻이 있는데 {"'한자 + える'"} 형태의 동사들은 전부 1단 동사이며 {"'한자 + る'"} 형태의 동사들은 전부 5단 동사임을 볼 수 있다. 단, {"'한자 + る'"}의 형태를 가져도 1단 동사인 경우가 있는데 이 경우는 -る 앞의 한자가 い단이나 え단 한 글자로 발음되는 경우이다. 예를 들면 다음과 같다.<br/>            
            1단(2류) 동사: 見みる, 居いる <br/><br/>            
            다만, 切きる나 要いる 같이 위와 같은 형태임에도 5단 동사인 예외들이 존재하기 때문에 이런 경우는 얄짤없이 외워야 한다.
            <S.Title>동사의 분류</S.Title>
            <S.P>
            동사는 여러가지 분류 기준에 따라 여러 갈래로 분류될 수 있다.<br/>
            첫번째, 동사는 {"'움직임 또는 상태를 나타내는 말'"}이다. 이에 따라 움직임을 나타내는 운동동사, 상태, 존재, 관계를 나타내는 상태동사로 나뉜다.<br/>
            두번째, 의지성에 따라 의지동사 (인간의 의지가 개입할 수 있는 동사)와 무의지동사 (인간의 의지가 개입할 수 없는 동사)로 나뉜다.<br/>
            세번째, 동작의 유형에 따라 자동사 (대상이 없는 동사)와 타동사 (대상이 있는 동사)로 나뉜다.<br/>
            두, 세번째 분류를 각각 의지성에 따른 분류 / 문법적 의미에 따른 분류라고 창하기도 한다.
            </S.P>
            <S.SubTitle>동작성의 유무에 따른 분류</S.SubTitle>
            <b>운동동사</b>
            <S.P>
            운동동사는 동작동사와 변화동사로 나뉜다.<br/>
            운동동사는 기본형이 현재시제를 나타내지 못하고 ~ている형이 현재를 나타낸다.<br/>
            운동동사의 경우 기본형을 사용하면 그 문장은 미래시제를 나타낸다.<br/>
            운동동사를 흔히 말하는 ます형으로 활용하면 미래 시제 혹은 ~하겠다라는 의지와 정중을 동시에 나타낸다.
            </S.P>
            <b>상태동사</b>
            <S.P>
            상태, 존재, 관계를 나타내는 동사로 기본형이 현재시제를 나타낸다.<br/>
            상태동사의 경우 ます로 활용해도 단순히 정중하다는 의미만 추가가 될 뿐, 의지나 미래를 나타내지 않는다.
            </S.P>
            <S.SubTitle>의지성에 따른 분류</S.SubTitle>
            <b>의지동사</b>
            <S.P>
            인간이 의지를 갖고 일으킨 동작, 혹은 제어할 수 있는 동작을 나타낸다.
            </S.P>
            <b>무의지동사</b>
            <S.SubTitle>문법적 의미에 따른 분류</S.SubTitle>
            <b>자동사</b><br/>
            <S.P>
            유생주어 자동사와 무생주어 자동사로 나뉜다.<br/>
            자동사는 수동문에 있어서 오로지 간접수동문만을 만들 수 있는데, 유생주어 자동사만이 간접수동문을 만들 수 있고, 무생주어 자동사는 수동문을 만들 수 없다.<br/>
            <br/>
            유생주어 자동사 (동물이나 사람을 주어로 사용하는 동사)<br/>
            무생주어 자동사 (자연이나 사물 등을 주어로 사용하는 동사)
            </S.P>
            <b>타동사</b>
            <S.P>
            동작의 주체, 또는 경험자 등, 주어와 대상을 취하는 동사를 타동사라고 한다.<br/>
            타동성이 약한 타동사는 직접 수동문을 만들지 못하거나, 만드는 것에 제약이 따르기도 한다. 
            </S.P>
            <S.P>
                타동성이 강한 타동사 (행위의 결과가 외부로 향함)<br/>
                타동성이 약한 타동사 (행위의 결과가 나에게 향함)<br/>
                <br/>
                타동성이 강한 자동사는 행동의 영향이 밖으로 미치는 반면, 타동성이 약한 타동사는 행동의 영향이 나에게 미친다.<br/>
                타동사의 자동사 용법이라는 것도 존재하는데, 耳を傾ける ― 귀를 기울이다와 같이 타동사이지만 신체의 일부분을 나타내는 명사와 を격으로 함께 쓰일 경우, 결국 자기 자신에게 영향을 미치기 때문에 자동사문의 의미가 된다.
            </S.P>
        </S.Body>
    )
}

export default Verb