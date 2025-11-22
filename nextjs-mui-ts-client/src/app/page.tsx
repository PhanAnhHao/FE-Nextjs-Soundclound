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

  // const res = await sendRequest<IBackendRes<ITrackTop[]>>({
  //   url: `http://localhost:8000/api/v1/tracks/top`,
  //   method: 'POST',
  //   body: {
  //     category: 'CHILL',
  //     limit: 2
  //   }
  // });
  // console.log("API TS response server at home page:", res);

  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `http://localhost:8000/api/v1/tracks/top`,
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 10
    }
  });

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `http://localhost:8000/api/v1/tracks/top`,
    method: 'POST',
    body: {
      category: 'WORKOUT',
      limit: 10
    }
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `http://localhost:8000/api/v1/tracks/top`,
    method: 'POST',
    body: {
      category: 'PARTY',
      limit: 10
    }
  });


  return (
    <Container>
      <MainSlider
        title={"Top Chill"}
        data={chills?.data ?? []}
      />
      <MainSlider
        title={"Top Workout"}
        data={workouts?.data ?? []}
      />
      <MainSlider
        title={"Top Party"}
        data={party?.data ?? []}
      />
    </Container>
  );
}
