// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";
import { Header } from "../components/Header/Header.tsx";
import { ImageDemo } from "../islands/ImageDemo/ImageDemo.tsx";

export default function Home() {
  // const count = useSignal(3);
  return (
    <>
      <Header />
      <ImageDemo />
    </>
  );
}
