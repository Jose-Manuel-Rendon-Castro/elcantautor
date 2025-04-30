import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import guitar from "../../images/electricGuitar.jpg"
import Card from "../../components/product/productCard.tsx";

function InstrumentsPage() {

    const {category, subcategory,subsubcategory} = useParams<{
        category: string;
        subcategory: string;
        subsubcategory: string;
    }>();

    type instrument = {
        name: string;
        type: string;
        subType: string;
        subSubType?: string;
        image: string;
        description: string;
        price: number;
        };

        const [instruments, setInstruments] = useState<instrument[]>([]);

        const filtered = instruments.filter((item) => {
          const matchType = category
            ? item.type.toLowerCase() === category.toLowerCase()
            : true;
          const matchSubType = subcategory
            ? item.subType?.toLowerCase() === subcategory.toLowerCase()
            : true;
          const matchSubSubType = subsubcategory
            ? item.subSubType?.toLowerCase() === subsubcategory.toLowerCase()
            : true;
        
          return matchType && matchSubType && matchSubSubType;
        });
          
        useEffect(() => {
          fetch("/instrument_examples.json")
            .then((res) => res.json())
            .then((data) => setInstruments(data))
            .catch((err) => console.error("Error loading instruments:", err));
        }, []);
    
    return(
        <>
            <Header/>
                <div id="info-image">
                    <img src={guitar} alt="Guitarra electrica"/>
                        <div id="info-box">
                            <div id="info">  
                            </div>
                        </div>
                </div>

            <h1>Instrumentos</h1>
                {filtered.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        />
                    ))}
        </>
        );
}
export default InstrumentsPage;