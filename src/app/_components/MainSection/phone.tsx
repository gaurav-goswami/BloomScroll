import Image from "next/image";
import styles from "@/app/_components/MainSection/phone.module.css";

type Props = {
    isVid: boolean;
    url: string
}

const Phone = (props: Props) => {
    const { isVid, url } = props;
    return (
        <div className={`relative w-72 h-[520px] bg-neutral-900 rounded-3xl border-[5px] border-neutral-800 shadow-xl flex flex-col items-center ${styles.phone}`} style={{ scale: ".7" }}>
            {/* Notch */}
            <div className="absolute top-0 w-36 h-6 bg-neutral-800 rounded-b-3xl mt-4 flex justify-center items-center">
                <div className="w-14 h-2 bg-neutral-700 rounded-full"></div>
            </div>

            {/* Screen */}
            <div className="mt-8 w-[95%] h-[84%] bg-neutral-950 rounded-2xl overflow-hidden shadow-inner relative">
                {
                    isVid ? <video
                        src={url}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    /> : <Image
                        src={url}
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                    />
                }

            </div>

            <div className="absolute top-4 left-4 w-[85%] h-[40%] bg-gradient-to-b from-gray-800/15 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="absolute bottom-6 w-14 h-14 bg-black rounded-full border-2 border-neutral-700 shadow-lg"></div>
        </div>
    );
};

export default Phone;
