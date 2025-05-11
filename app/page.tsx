import Hello from "./components/hello"

export default function Home() {
  console.log("server component")
  return (
    <>
<div >
  Hi

   <Hello />
   </div>
</>
  );
}
