import Image from 'next/image';
import Sven from '../images/Sven.png';
import Kevin from '../images/Kevin.png';
import Vansh from '../images/Vansh.png'
import MatPat from '../images/Matpat.png';
import Ishan from '../images/Ishan.png';
import Cleo_Abram from '../images/Cleo.png';
import Veritasium from '../images/Veritasium.png';
import TOPOP from '../images/TOPOP.png'

export default function TopCreators() {
    const creators = [
        { img: Sven, title: 'Sven Vincke' },
        { img: Kevin, title: 'Shah Kevin Ketan' },
        { img: Vansh, title: 'Vansh Chani' },
        { img: MatPat, title: 'MatPat' },
        { img: Ishan, title: 'Ishan Jindal' },
        { img: Cleo_Abram, title: 'Cleo Abram' },
        { img: Veritasium, title: 'Veritasium' },
        { img: TOPOP, title: 'Dhruv Singh Chopra' }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-4 w-11/12 flex justify-center">
                <div className="w-full">
                    <h1 className="text-5xl font-inter mb-4 text-left pr-28 text-textdarkblue" style={{ marginLeft: '-16px' }}>Top Creators</h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-16 justify-items-center">
                        {creators.map((creator, index) => (
                            <div key={index} className="relative bg-gray-400 rounded-lg w-64 h-72 flex flex-col items-center">
                                <div className="w-full h-full relative">
                                    <Image 
                                        src={creator.img} 
                                        alt={creator.title} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        objectPosition="top" 
                                        className="rounded-lg" 
                                    />
                                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
                                        <span className="text-white text-lg font-bold">{creator.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
