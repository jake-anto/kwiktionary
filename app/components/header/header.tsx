import SearchBar from "@/app/components/header/search";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <Container maxWidth="xs" sx={{ p: 2 }}>
      <SearchBar />
    </Container>
  );
}
