import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequestJS } from "@/utils/old.api";
import { sendRequest } from "@/utils/api";

export default async function HomePage() {

  // const res = await fetch(`http://localhost:8000/api/v1/tracks/top`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       categories: 'CHILL',
  //       limit: 10
  //     }),
  //   }
  // );
  // console.log("Fetch response server at home page:", await res.json());

  // const res = await sendRequestJS({
  //   url: `http://localhost:8000/api/v1/tracks/top`,
  //   method: 'POST',
  //   body: {
  //     category: 'CHILL',
  //     limit: 2
  //   }
  // });
  // console.log("API JS response server at home page:", res);

  const res = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `http://localhost:8000/api/v1/tracks/top`,
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 2
    }
  });
  console.log("API TS response server at home page:", res);

  return (
    <Container>
      <MainSlider />
      <div>HomePage</div>
    </Container>
  );
}
