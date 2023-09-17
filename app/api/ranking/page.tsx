import Podium from "@/components/molecules/podium/Podium";


export default function Home() {
    async function getApi() {
        const data = await fetch('http://localhost:3000/api/ranking');
    
        console.log(await data.json())
    }
    getApi()
    return(
        <main>
            <div className="bg-[#DE1537]">
                <Podium pokemonId={1}/>
            </div>
        </main>
    )
}