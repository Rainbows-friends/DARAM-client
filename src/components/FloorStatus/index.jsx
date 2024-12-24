import * as S from "./style";

import { useEffect, useState } from "react";

import Member from "@components/Member";
import SearchIcon from "@assets/search.svg";

function FloorStatus({ floor, noshow, students, loading, error }) {
  const [filteredStudents, setFilteredStudents] = useState([]);

  function filterByFloor(students, floor) {
    return students ? students.filter((item) => item.user.floor === floor) : [];
  }

  useEffect(() => {
    const result = filterByFloor(students, floor);
    setFilteredStudents(result);
  }, [floor, students]);

  return (
    <S.Wrapper>
      <S.Floor>
        {floor}층 {noshow ? "미입실" : "입실"} 현황
      </S.Floor>
      <S.SearchBox>
        <S.Input
          placeholder="방 호수, 이름 등을 검색해보세요"
          type="text"
          maxLength={10}
        />
        <img src={SearchIcon} alt="Search Icon" />
      </S.SearchBox>
      <S.MemberBox>
        {loading ? (
          <S.Text>로딩 중...</S.Text>
        ) : error ? (
          <S.Text>서버 에러</S.Text>
        ) : (
          filteredStudents.map((student) => (
            <Member
              key={student.id}
              room={student.user.room}
              name={student.user.name}
              time={student.checkinDate}
            />
          ))
        )}
      </S.MemberBox>
      <S.Shadow />
    </S.Wrapper>
  );
}

export default FloorStatus;
