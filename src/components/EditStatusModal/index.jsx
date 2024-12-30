import * as S from "./style";

import { useEffect, useState } from "react";

import axios from "axios";
import cancel from "@assets/cancel.svg";
import { toast } from "react-toastify";

function EditStatusModal({ member, onClose, noshow: initialNoshow }) {
  const [room, setRoom] = useState("");
  const [noshow, setNoshow] = useState(initialNoshow);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (member) setRoom(member.user.room + "호");
  }, [member]);

  useEffect(() => {
    setIsModified(noshow !== initialNoshow || room !== member.user.room + "호");
  }, [noshow, room, initialNoshow, member]);

  const handleCheckInClick = () => {
    setNoshow(false);
  };

  const handleNoShowClick = () => {
    setNoshow(true);
  };

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

  const handleSubmit = async () => {
    if (!isModified) return;

    const accessToken = localStorage.getItem("accessToken");

    // grade, classNum, number를 하나로 합침 (예: 1416)
    const userInfo = Number(
      `${member.user.grade}${member.user.classNum}${member.user.number
        .toString()
        .padStart(2, "0")}`
    );

    try {
      // 입실 상태 변경 요청 (noshow가 변경된 경우에만)
      if (noshow !== initialNoshow) {
        const checkInResponse = await axios.patch(
          import.meta.env.VITE_CHANGE_CHECKIN_API_URL,
          { studentId: userInfo },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (checkInResponse.status !== 204) {
          throw new Error(
            `입실 상태 변경 에러: ${checkInResponse.data.message}`
          );
        }
      }

      // 호실 변경 요청 (room이 변경된 경우에만)
      if (room !== member.user.room + "호") {
        const roomChangeResponse = await axios.patch(
          import.meta.env.VITE_EDIT_USER_ROOM_API_URL,
          { studentId: userInfo, room: parseInt(room) },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (roomChangeResponse.status === 204) {
          toast.success("변경 사항이 저장되었습니다.");
          onClose();
        } else {
          throw new Error(`호실 변경 에러: ${roomChangeResponse.data.message}`);
        }
      } else {
        toast.success("변경 사항이 저장되었습니다.");
        onClose();
      }
    } catch (error) {
      toast.error(`서버 요청 중 오류가 발생했습니다. ${error.message}`);
    }
  };

  return (
    <S.Wrapper onClick={handleBackgroundClick}>
      <S.Container>
        <S.Top>
          <S.Student>
            {member.user.room}호 {member.user.name}
          </S.Student>
        </S.Top>
        <S.Mid>
          <S.MidItemContainer>
            <S.InputTitle>입실 현황 수정</S.InputTitle>
            <S.ButtonBox>
              <S.CheckInBtn
                width="67px"
                opacity={noshow ? 0.4 : 1}
                onClick={handleCheckInClick}
              >
                입실
              </S.CheckInBtn>
              <S.CheckInBtn
                width="80px"
                opacity={noshow ? 1 : 0.4}
                onClick={handleNoShowClick}
              >
                미입실
              </S.CheckInBtn>
            </S.ButtonBox>
          </S.MidItemContainer>
          <S.MidItemContainer>
            <S.InputTitle>호실 수정</S.InputTitle>
            <S.EditRoomBox>
              <S.EditRoomInput
                value={room}
                onChange={handleRoomChange}
                maxLength={4}
              />
            </S.EditRoomBox>
          </S.MidItemContainer>
        </S.Mid>
        <S.Bot>
          <S.SubmitBtn isModified={isModified} onClick={handleSubmit}>
            수정 완료
          </S.SubmitBtn>
        </S.Bot>
        <S.CancelBtn src={cancel} onClick={handleBackgroundClick} />
      </S.Container>
    </S.Wrapper>
  );
}

export default EditStatusModal;
