import * as S from '../styles/app'

const Loading = (props) => {
    return(
      <>
      {props.loading ?
        <S.LoadingBackground>
        <div className="spinner-border text-secondary" style={{width: "4rem", height: "4rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <S.LoadingText>로딩 중...</S.LoadingText>
      </S.LoadingBackground>
      :
      <></>
      }
      </>
    )
}

export default Loading