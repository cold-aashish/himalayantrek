import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(site)/home/page";

export const metadata = {
  title: "Travel and Tour || Travel & Tour",
  description: "",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
