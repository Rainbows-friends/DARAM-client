import * as S from "./style";

import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
    { path: "/home", label: "메인화면" },
    { path: "/checkin", label: "입실 현황" },
    { path: "/noshow", label: "미입실 현황" },
    { path: "/team", label: "팀소개" },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        {links.map((link) => (
          <S.StyledLink
            key={link.path}
            to={link.path}
            isActive={location.pathname === link.path}
          >
            {link.label}
          </S.StyledLink>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
