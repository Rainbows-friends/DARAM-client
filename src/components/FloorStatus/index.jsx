import * as S from "./style";

import { useEffect, useState } from "react";

import EditStatusModal from "@components/EditStatusModal";
import Member from "@components/Member";
import SearchIcon from "@assets/search.svg";

function FloorStatus({ floor, noshow, students, loading, error }) {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  function filterByFloor(students, floor) {
    return students ? students.filter((item) => item.user.floor === floor) : [];
  }

  function filterBySearch(students, searchTerm) {
    if (!searchTerm) return students;

    const loweredSearchTerm = searchTerm.toLowerCase().trim();

    return students.filter((student) => {
      const roomMatch = student.user.room
        .toString()
        .includes(loweredSearchTerm);
      const nameMatch = student.user.name
        .toLowerCase()
        .includes(loweredSearchTerm);

      return roomMatch || nameMatch;
    });
  }

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const floorFiltered = filterByFloor(students, floor);
    const searchFiltered = filterBySearch(floorFiltered, searchTerm);
    setFilteredStudents(searchFiltered);
  }, [floor, students, searchTerm]);

  const hasStudents = filterByFloor(students, floor).length > 0;

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
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img src={SearchIcon} alt="Search Icon" />
      </S.SearchBox>
      <S.MemberBox>
        {loading ? (
          <S.Text>로딩 중...</S.Text>
        ) : error ? (
          <S.Text>서버 에러</S.Text>
        ) : !hasStudents ? (
          <></> // 입실 인원이 없을 때는 아무것도 표시하지 않음
        ) : filteredStudents.length === 0 ? (
          <S.Text>검색 결과가 없습니다.</S.Text>
        ) : (
          filteredStudents.map((student) => (
            <Member
              key={student.id}
              room={student.user.room}
              name={student.user.name}
              time={student.checkinDate}
              onClick={() => handleMemberClick(student)}
            />
          ))
        )}
      </S.MemberBox>
      {isModalOpen && (
        <EditStatusModal
          member={selectedMember}
          onClose={closeModal}
          noshow={noshow}
        />
      )}
    </S.Wrapper>
  );
}

export default FloorStatus;
