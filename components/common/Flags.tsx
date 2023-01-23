import Image from "next/image";
import zeaImg from "../../public/img/zea.png"
import engImg from "../../public/img/eng.png"
import Link from "next/link";

export const Flags = () => {
    return <li className="flex gap-4 justify-center py-8 lg:py-0">
        <Link href='https://immersivegroup.eu'>
            <Image src={engImg} width={30} height={15} alt='flag of england' />
        </Link>
        <Link href='https://immersivegroup.ae'>
            <Image src={zeaImg} width={30} height={15} alt='flag of United Arab Emirates' />
        </Link>
    </li>
}