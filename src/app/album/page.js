import Image from "next/image";
import pikachu from '@/assets/images/pikachu.jpg'

const AlbumPage = () => {
    return (
        <div>
            <h1>Using image component</h1>
            <Image src="https://i.ibb.co/sFBpmy8/sddefault.jpg" width={500} height={500} alt="image"/>


            <h1>Using image component</h1>
            <Image src={pikachu} width={500} height={500} alt="image"/>



            {/* do not use img tag. better use Image tag from next js. next js image  optimize the image in much better way */}


            {/* <h1>Using image tag</h1>
            <img src="https://i.ibb.co/sFBpmy8/sddefault.jpg" width={500} height={500} alt="image"/> */}
        </div>
    );
};

export default AlbumPage;