import axios from "axios";
import { getIdList } from "./lib/post";

export default async function Home() {
  const getId = await getIdList();
  
  return (
    <>
      <h1 className="font-extrabold text-center text-4xl my-8">メトロポリタン美術館｜Vincent van Gogh</h1>
      <div className="flex flex-wrap justify-center">
       {
          getId.map(async(id, index) => {
            const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
            
          
            if(response.data) {
              if(response.data.constituents[0] && response.data.primaryImageSmall) {

                if(response.data.constituents[0]?.name === "Vincent van Gogh") {
                  return (
                    <div key={index} className="flex flex-col items-center justify-center m-2 bg-[#FBFBFB] w-80 p-2 text-center">
                      <img src={response.data.primaryImageSmall} className="w-64 h-96 object-contain" />
                      <h3 className="text-lg font-bold">{response.data.title}</h3>
                      <p className="text-sm">{response.data.constituents[0]?.name}</p>
                    </div>
                  );
               }
              }
            }
          })
       }
      </div>
    </>
  );
}
