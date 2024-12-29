import * as S from "./style";

import { useEffect, useRef, useState } from "react";

function EditStatusModal({ member, onClose }) {
  const [room, setRoom] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (member) {
      setRoom(member.user.room + "호");
    }
  }, [member]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleRoomChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // 숫자만 남기기
    if (value.endsWith("호")) {
      setRoom(value);
    } else {
      setRoom(value + "호");
    }
  };

  return (
    <S.Wrapper onClick={handleBackgroundClick}>
      <S.Container>
        <S.Top>
          <S.Student>
            {room} {member.user.name}
          </S.Student>
        </S.Top>
        <S.Mid>
          <S.MidItemContainer>
            <S.InputTitle>입실 현황 수정</S.InputTitle>
            <S.ButtonBox>
              <S.CheckInBtn width="67px" opacity={0.4}>
                입실
              </S.CheckInBtn>
              <S.CheckInBtn width="80px">미입실</S.CheckInBtn>
            </S.ButtonBox>
          </S.MidItemContainer>
          <S.MidItemContainer>
            <S.InputTitle>호실 수정</S.InputTitle>
            <S.EditRoomBox>
              <S.EditRoomInput
                ref={inputRef}
                value={room}
                onChange={handleRoomChange}
                maxLength={4}
              />
            </S.EditRoomBox>
          </S.MidItemContainer>
        </S.Mid>
        <S.Bot>
          <S.SubmitBtn>수정 완료</S.SubmitBtn>
        </S.Bot>
      </S.Container>
    </S.Wrapper>
  );
}

export default EditStatusModal;
