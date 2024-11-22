import { useLocation } from "react-router-dom";
import * as S from "./style";

function Header() {
  const location = useLocation();

  const links = [
    { path: "/home", label: "메인화면" },
    { path: "/checkin", label: "입실 현황" },
    { path: "/noshow", label: "미입실자 현황" },
    { path: "/notice", label: "공지" },
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
